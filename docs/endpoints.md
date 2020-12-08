# API Endpoints

## PATH : '/'

- GET
- This path will show the App Servic is up and running.
- If you deploy this App Service on PORT 3000, then type http://localhost:3000 in your browser.

## PATH: '/decision'

- POST
- This path is dedicated for Colonoscopy CDSS
- Sample request data:

```json
{
  "answer": [
    "Number of Polyps: <=2",
    "Size of largest polyp: <10mm",
    "Villous architecture: Y",
    "High grade Dysplasia : Y"
  ]
}
```

- The answer should look like

```text
3 Year
```

## PATH: '/createTree'

- POST
- This path allows user to create Tree
- Sample request data:

```json
{
  "tree": {
    "id": null,
    "name": "First Tree",
    "nodes": [
      {
        "id": "N001",
        "treeId": null,
        "questionText": "Question : 10 OR 100",
        "answers": [
          { "text": "Answer 1: 10", "next_node": "N002" },
          { "text": "Answer 2: 100", "next_node": "N003" }
        ]
      },
      {
        "id": "N002",
        "treeId": null,
        "questionText": "Question : 11 OR 12 OR 13",
        "answers": [
          { "text": "Answer 1: 11", "next_node": "N004" },
          { "text": "Answer 2: 12", "next_node": "N005" },
          { "text": "Answer 3: 13", "next_node": "N006" }
        ]
      },
      {
        "id": "N003",
        "treeId": null,
        "questionText": "Question : 101 OR 102",
        "answers": [
          { "text": "Answer 1: 101", "next_node": "N007" },
          { "text": "Answer 2: 102", "next_node": "N008" }
        ]
      },
      {
        "id": "N004",
        "treeId": null,
        "questionText": "",
        "answers": [{ "text": "Path 1", "next_node": null }]
      },
      {
        "id": "N005",
        "treeId": null,
        "questionText": "",
        "answers": [{ "text": "Path 2", "next_node": null }]
      },
      {
        "id": "N006",
        "treeId": null,
        "questionText": "",
        "answers": [{ "text": "Path 3", "next_node": null }]
      },
      {
        "id": "N007",
        "treeId": null,
        "questionText": "Question : 103",
        "answers": [{ "text": "Answer 1: 103", "next_node": "N009" }]
      },
      {
        "id": "N008",
        "treeId": null,
        "questionText": "",
        "answers": [{ "text": "Path 5", "next_node": null }]
      },
      {
        "id": "N009",
        "treeId": null,
        "questionText": "",
        "answers": [{ "text": "Path 6", "next_node": null }]
      }
    ]
  }
}
```

## PATH: '/decisionByTreeId'

- POST
- This path allows user to get decision according to **tree Id**
- Sample request data:

```json
{
  "treeId": 1,
  "answer": ["Answer 1: 10", "Answer 1: 11"]
}
```

- It should return answer of:

```
Path 1
```

## PATH: '/getAllTrees'

- GET
- This path gets all the tree existing on server
- Sample request data:

```text
This endpoint doesn't require request body, just do:
  http://localhost:{PORT}/getAllTrees
```

## PATH: '/updateTree'

- PUT
- This path allows users to update their Tree
- User should specify the treeId that they wish to update
- In the following example we try to update Node N004's answer
- Sample request data:

```json
{
  "tree": {
    "id": 1,
    "name": "First Tree",
    "nodes": [
      {
        "id": "N001",
        "treeId": null,
        "questionText": "Question : 10 OR 100",
        "answers": [
          { "text": "Answer 1: 10", "next_node": "N002" },
          { "text": "Answer 2: 100", "next_node": "N003" }
        ]
      },
      {
        "id": "N002",
        "treeId": null,
        "questionText": "Question : 11 OR 12 OR 13",
        "answers": [
          { "text": "Answer 1: 11", "next_node": "N004" },
          { "text": "Answer 2: 12", "next_node": "N005" },
          { "text": "Answer 3: 13", "next_node": "N006" }
        ]
      },
      {
        "id": "N003",
        "treeId": null,
        "questionText": "Question : 101 OR 102",
        "answers": [
          { "text": "Answer 1: 101", "next_node": "N007" },
          { "text": "Answer 2: 102", "next_node": "N008" }
        ]
      },
      {
        "id": "N004",
        "treeId": null,
        "questionText": "",
        "answers": [{ "text": "Path 1", "next_node": null }]
      },
      {
        "id": "N005",
        "treeId": null,
        "questionText": "",
        "answers": [{ "text": "New Answer", "next_node": null }]
      },
      {
        "id": "N006",
        "treeId": null,
        "questionText": "",
        "answers": [{ "text": "Path 3", "next_node": null }]
      },
      {
        "id": "N007",
        "treeId": null,
        "questionText": "Question : 103",
        "answers": [{ "text": "Answer 1: 103", "next_node": "N009" }]
      },
      {
        "id": "N008",
        "treeId": null,
        "questionText": "",
        "answers": [{ "text": "Path 5", "next_node": null }]
      },
      {
        "id": "N009",
        "treeId": null,
        "questionText": "",
        "answers": [{ "text": "Path 6", "next_node": null }]
      }
    ]
  }
}
```
