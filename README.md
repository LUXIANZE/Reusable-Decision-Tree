# Reusable Clinical Decision Tree Model

To reduce the round trip for querying, the object will use lazy contruction and reused untill it is informed to be updated (trigger from endpoint).

## Entities
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