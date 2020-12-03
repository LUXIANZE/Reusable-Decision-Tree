import express from 'express';
import requestPreprocessor from './utils/requestPreprocessor.js';
import winston from 'winston';
import format from 'logform';
import { db_tree } from './mocks/mock_cdss_tree.js';
import DB from './mocks/mock_db.js';
import Tree from './components/tree.js';
import Node from './components/node.js';
import dotenv from 'dotenv';

const DataBase = new DB().getInstance();
const app = express()
app.use(express.json())
dotenv.config();

/**
 * Instantiate logger 
 */
const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'user-service' },
});

/**
 * Define format for logging with colors and text-alignment
 */
const alignedWithColorsAndTime = winston.format.combine(
    winston.format.colorize(),
    winston.format.timestamp(),
    winston.format.align(),
    winston.format.printf((info) => {
        const {
        timestamp, level, message, ...args
        } = info;

        const ts = timestamp.slice(0, 19).replace('T', ' ');
        return `${ts} [${level}]: ${message} \n${Object.keys(args).length ? JSON.stringify(args, null, 2) : ''}`;
    }),
);

/**
 * Use appropriate logging ouput based on production/development:
 * - Production:    Log to file
 * - Development:   Log to console only
 */
if (process.env.NODE_ENV === 'production') {
    logger.add(new winston.transports.File({ filename: 'error.log', level: 'error' }))
    logger.add(new winston.transports.File({ filename: 'combined.log' }))
} else {
    logger.add(new winston.transports.Console({
        format: alignedWithColorsAndTime,
    }));
    winston.addColors({
        error: 'redBG'
    })
}

/**
 * API: /
 * for Service's Health Checking
 */
app.get('/', (req, res) => {
  res.send('Web Service running')
});

/**
 * API: /decision
 */
app.post('/decision', async (req, res) => {
    let client_payload = {}
    let answer = {}

    try {
        client_payload = await requestPreprocessor(req.body)
    } catch (error) {
        logger.log(error) //TODO@LUXIANZE: #5 Remove the use of personal Logger, choose mature Logger in npm
        return res.status(500).send(`Error: ${error.message}`)
    }

    try {
        answer = db_tree.evaluate(client_payload.answer)
    } catch (error) {
        logger.log(error)
        return res.status(500).send(`Error: ${error.message}`)
    }
    return res.send(answer.text)
});



/**
 * expexted client payload:
 * tree: {
 *  id: null,
 *  name: name,
 *  nodes: [
 *      {
 *          id:
 *          treeId:
 *          questionText:
 *          answers:[
 *              {text,next_node}, {text,next_node}, {text,next_node}
 *          ]
 *      },{
 *      }
 *  ]
 * }
 */

app.post('/createTree', async (req, res) => {
    let client_payload = {}

    try {
        client_payload = await requestPreprocessor(req.body);
        
        const newTree = GenerateTree(client_payload.tree);
        DataBase.AddTree(newTree);
        return res.status(200).send('Success fully added');
    } catch (error) {
        logger.log(error)
        return res.status(500).send(`Error: ${error.message}`)
    }
});

/**
 * API: /decisionByTreeId
 * Query result using a specific tree
 */
app.post('/decisionByTreeId', async (req, res) => {
    let client_payload = {}
    let answer = {}

    try {
        client_payload = await requestPreprocessor(req.body)
    } catch (error) {
        logger.error(error)
        return res.status(500).send(`Error: ${error.message}`)
    }

    try {
        const selectedTree = DataBase.GetTreeByID(client_payload.treeId);
        answer = selectedTree.evaluate(client_payload.answer)
    } catch (error) {
        logger.error(`From: ${req.originalUrl}`, error.message)
        return res.status(500).send(`Error: ${error.message}`)
    }
    return res.send(answer.text)
});

/**
 * API: /getAllTrees
 * Display all existing decision trees on this service
 */
app.get('/getAllTrees', async (req, res) => {
    let client_payload = {}

    try {
        client_payload = await requestPreprocessor(req.body)
    } catch (error) {
        logger.log(error)
        return res.status(500).send(`Error: ${error.message}`)
    }

    return res.status(200).send(DataBase.GetAllTrees());
});

/**
 * API: /updateTree
 * Update the existing tree as desired
 */
app.put('/updateTree', async (req, res) => {
    let client_payload = {}

    try {
        client_payload = await requestPreprocessor(req.body)
    } catch (error) {
        logger.log(error)
        return res.status(500).send(`Error: ${error.message}`)
    }
    const newTree = GenerateTree(client_payload.tree, true);
    DataBase.UpdateTree(newTree);

    return res.status(200).send('updated');
});

/**
 * Start the service on PORT defined
 */
app.listen(process.env.PORT, () => {
  console.log(`Example app listening at http://localhost:${process.env.PORT}`)
});

/**
 * Generate a Decision Tree
 * @param {JSON} treeInJSON Decision Tree in JSON format
 * @param {Boolean} isUpdate Flag to indicate the incoming Tree JSON is new or existing Tree
 */
function GenerateTree(treeInJSON, isUpdate=false){
    const temp_treeId = isUpdate ? DataBase.count : DataBase.count + 1;
    const temp_treeName = treeInJSON.name;
    const temp_nodes = treeInJSON.nodes.map(node => {
        return new Node(node.id, temp_treeId, node.questionText, node.answers);
    });

    return new Tree(temp_treeId, temp_treeName, temp_nodes);
}