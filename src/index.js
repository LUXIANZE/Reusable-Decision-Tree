import express from 'express'
import requestPreprocessor from './utils/requestPreprocessor.js';
import logger from './utils/logger.js';
import { db_tree } from './mocks/mock_cdss_tree.js';
import { GENERAL_ERROR } from './constants/error.js'
import { GENERAL_SUCCESS } from './constants/success.js'

const app = express()
const port = 5000
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Web Service running')
})

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
        answer = db_tree.evaluate(req.body.answer)
    } catch (error) {
        logger(GENERAL_ERROR, error.message)
        return res.status(500).send(`Error: ${error.message}`)
    }
    logger(GENERAL_SUCCESS, `The answer object evaluated ${answer.text}, next node is ${answer.next_node}`)
    return res.send(answer.text)
})



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})