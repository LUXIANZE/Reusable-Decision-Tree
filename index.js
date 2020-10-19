class Tree {
    constructor(id, name, nodes){
        this.id = id
        this.name = name
        this.nodes = nodes

        // Assign initial node of the Tree
        this.initialnode = this.nodes[0]

        // assign current node ti be used in current evaluation
        this.currentnode = this.initialnode
    }
    evaluate(clinician_inputs){
        for( i = 0; i < clinician_inputs.length; i++ ){

        }
    }
}

class Node {
    constructor(id, treeId, questionText, answers){
        this.id = id
        this.treeId = treeId
        this.questionText = questionText
        this.answers = answers
    }
}

function Logger(title, content){
    if(title){
        console.log(`\n${title}\n`)
        
    }
    if(content){
        console.group(content)
        console.log("\n")
    }
}

/**
 * - Above are presets
 * - Program runs from here on
 **/

Logger("This is A Demo of Clinical Decision Tree")

var tree = new Tree("T001", "Test Tree Model", ["Node 1", "Node 2", "Node 3", "Node 4"])
var node = new Node("N001", tree.id, "Question of Node 1", ["Answer 1", "Answer 2"])

Logger("Tree Object", tree)
Logger("Node Object", node)