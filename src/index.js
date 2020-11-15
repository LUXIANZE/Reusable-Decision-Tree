import express from 'express'
import requestPreprocessor from './utils/requestPreprocessor.js';
import logger from './utils/logger.js';
import { db_tree } from './mock_db.js';

const app = express()
const port = 3000
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
        logger("Logged", error.message)
        res.status(500).send(`Error: ${error.message}`)
        return
    }

    try {
        answer = db_tree.evaluate(client_payload.answer)
    } catch (error) {
        logger("Error", error.message)
    }
    
    return res.send(answer.text)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})