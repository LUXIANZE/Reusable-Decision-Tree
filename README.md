# Reusable Decision Tree Model

To reduce the round trip for querying, the object will use lazy contruction and reused untill it is informed to be updated (trigger from endpoint).

# Getting Started

## Environment Setup

- Launch your terminal
- Make sure Node js 12.++ is installed on your machine, you can perform checking by typing:

```
node -v
```

- If you have it installed, your should see something like:

```
node -v
v12.18.3
```

- If you faced any problem, you should installed Node version 12.++ and add it to your system PATH.

## Get it running

- You need to ensure all node dependencies are installed before running the program
- Do below and you should see progress bar running in terminal, wait till the installation finishes:

```
npm i
```

- When the installation is complete, do:

```
npm run dev
```

- If you would like to add more Decision Tress and test out different question sets. Do your modification in **mock_db.js**

# Entities

- Tree
  - TreeID
  - Name
  - Description
  - User (The user of this tree, a system or a module, this can be use for access control)
  - Access Token
- Nodes
  - NodeID
  - TreeID (To recognise which tree does it belong to)
  - QuestionID
  - Answers
    - Text
    - NodeID (Next node)
- Questions
  - QuestionID
  - QuestionText
