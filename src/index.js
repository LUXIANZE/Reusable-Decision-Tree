import express from 'express';
import requestPreprocessor from './utils/requestPreprocessor.js';
import logger from './utils/logger.js';
import { db_tree } from './mocks/mock_cdss_tree.js';
import { GENERAL_ERROR } from './constants/error.js';
import { GENERAL_SUCCESS } from './constants/success.js';
import DB from './mocks/mock_db.js';
import Tree from './components/tree.js';
import Node from './components/node.js';

const DataBase = new DB().getInstance();
const app = express()
const port = 5000
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Web Service running')
});

app.post('/decision', async (req, res) => {
    let client_payload = {}
    let answer = {}

    try {
        client_payload = await requestPreprocessor(req.body)
    } catch (error) {
        logger(GENERAL_ERROR, error.message) //TODO@LUXIANZE: #5 Remove the use of personal Logger, choose mature Logger in npm
        return res.status(500).send(`Error: ${error.message}`)
    }

    try {
        answer = db_tree.evaluate(client_payload.answer)
    } catch (error) {
        logger(GENERAL_ERROR, error.message)
        return res.status(500).send(`Error: ${error.message}`)
    }
    logger(GENERAL_SUCCESS, `The answer object evaluated ${answer.text}, next node is ${answer.next_node}`)
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
        logger(GENERAL_ERROR, error.message)
        return res.status(500).send(`Error: ${error.message}`)
    }
});

app.post('/decisionByTreeId', async (req, res) => {
    let client_payload = {}
    let answer = {}

    try {
        client_payload = await requestPreprocessor(req.body)
    } catch (error) {
        logger(GENERAL_ERROR, error.message) //TODO@LUXIANZE: #5 Remove the use of personal Logger, choose mature Logger in npm
        return res.status(500).send(`Error: ${error.message}`)
    }

    try {
        const selectedTree = DataBase.GetTreeByID(client_payload.treeId);
        answer = selectedTree.evaluate(client_payload.answer)
    } catch (error) {
        logger(GENERAL_ERROR, error.message)
        return res.status(500).send(`Error: ${error.message}`)
    }
    logger(GENERAL_SUCCESS, `The answer object evaluated ${answer.text}, next node is ${answer.next_node}`)
    return res.send(answer.text)
});

app.get('/getAllTrees', async (req, res) => {
    let client_payload = {}

    try {
        client_payload = await requestPreprocessor(req.body)
    } catch (error) {
        logger(GENERAL_ERROR, error.message)
        return res.status(500).send(`Error: ${error.message}`)
    }

    return res.status(200).send(DataBase.GetAllTrees());
});

app.put('/updateTree', async (req, res) => {
    let client_payload = {}

    try {
        client_payload = await requestPreprocessor(req.body)
    } catch (error) {
        logger(GENERAL_ERROR, error.message)
        return res.status(500).send(`Error: ${error.message}`)
    }
    const newTree = GenerateTree(client_payload.tree, true);
    DataBase.UpdateTree(newTree);

    return res.status(200).send('updated');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});

function GenerateTree(treeInJSON, isUpdate=false){
    const temp_treeId = isUpdate ? DataBase.count : DataBase.count + 1;
    const temp_treeName = treeInJSON.name;
    const temp_nodes = treeInJSON.nodes.map(node => {
        return new Node(node.id, temp_treeId, node.questionText, node.answers);
    });

    return new Tree(temp_treeId, temp_treeName, temp_nodes);
}