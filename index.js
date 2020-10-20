class Tree {
    constructor(id, name, nodes){
        this.id = id;
        this.name = name;
        this.nodes = nodes;

        // Assign initial node of the Tree
        this.initialnode = this.nodes[0];

        // Assign current node ti be used in current evaluation
        this.currentnode = this.initialnode;

        // Create a Map Object to store all nodes
        this.map = this.CreateMap(this.nodes);

    };

    CreateMap(nodes){
        let tempmap = new Map();
        nodes.forEach(node => {
            tempmap.set(node.id, node);
        });
        return tempmap;
    };

    evaluate(clinician_inputs){
        let answer, i;
        for( i = 0; i < clinician_inputs.length; i++ ){
            let j;
            counter:
            for( j = 0; j < this.currentnode.answers.length; j++ ){
                if(this.currentnode.answers[j].text === clinician_inputs[i]){
                    if(this.currentnode.answers[j].next_node){
                        let temp_node = this.map.get(this.currentnode.answers[j].next_node)
                        this.currentnode = temp_node;
                        break counter;
                    }
                }
            }
        }
        answer = this.currentnode.answers[0];
        // Reset the current Node upon completion
        this.currentnode = this.nodes[0];
        return answer;
    };
}

class Node {
    constructor(id, treeId, questionText, answers){
        this.id = id;
        this.treeId = treeId;
        this.questionText = questionText;
        this.answers = answers;
    };
}

function Logger(title, content){
    if(title){
        console.log("\n");
        console.log(title);
        console.log("\n");
    }
    if(content){
        console.group(content);
        console.log("\n");
    }
};

/**
 * - Above are presets
 * - Program runs from here on
 **/

// Logger("This is A Demo of Clinical Decision Tree")

const treeid = "T001";

var node1 = new Node("N001", treeid, "Question : 10 OR 100",        [{text : "Answer 1: 10", next_node : "N002"}, {text : "Answer 2: 100", next_node : "N003"}]);
var node2 = new Node("N002", treeid, "Question : 11 OR 12 OR 13",   [{text : "Answer 1: 11", next_node : "N004"}, {text : "Answer 2: 12", next_node : "N005"}, {text : "Answer 3: 13", next_node : "N006"}]);
var node3 = new Node("N003", treeid, "Question : 101 OR 102",       [{text : "Answer 1: 101", next_node : "N007"}, {text : "Answer 2: 102", next_node : "N008"}]);
var node4 = new Node("N004", treeid, "",                            [{text : "Path 1", next_node : null}]);
var node5 = new Node("N005", treeid, "",                            [{text : "Path 2", next_node : null}]);
var node6 = new Node("N006", treeid, "",                            [{text : "Path 3", next_node : null}]);
var node7 = new Node("N007", treeid, "Question : 103",              [{text : "Answer 1: 103", next_node : "N009"}]);
var node8 = new Node("N008", treeid, "",                            [{text : "Path 5", next_node : null}]);
var node9 = new Node("N009", treeid, "",                            [{text : "Path 6", next_node : null}]);

var arr = [node1, node2, node3, node4, node5, node6, node7, node8, node9];

var tree = new Tree(treeid, "Test Tree Model", arr);

const clinician_answer_1 = ["Answer 1: 10", "Answer 1: 11"];                     // Expected outcome: Path 1
const clinician_answer_2 = ["Answer 1: 10", "Answer 2: 12"];                     // Expected outcome: Path 2
const clinician_answer_3 = ["Answer 1: 10", "Answer 3: 13"];                     // Expected outcome: Path 3
const clinician_answer_4 = ["Answer 2: 100", "Answer 1: 101", "Answer 1: 103"];  // Expected outcome: Path 6
const clinician_answer_5 = ["Answer 2: 100", "Answer 2: 102"];                   // Expected outcome: Path 5

const answer1 = tree.evaluate(clinician_answer_1);
console.log(`Evaluation Answer for input 1: ${answer1.text}`);

const answer2 = tree.evaluate(clinician_answer_2);
console.log(`Evaluation Answer for input 2: ${answer2.text}`);

const answer3 = tree.evaluate(clinician_answer_3);
console.log(`Evaluation Answer for input 3: ${answer3.text}`);

const answer4 = tree.evaluate(clinician_answer_4);
console.log(`Evaluation Answer for input 4: ${answer4.text}`);

const answer5 = tree.evaluate(clinician_answer_5);
console.log(`Evaluation Answer for input 5: ${answer5.text}`);
