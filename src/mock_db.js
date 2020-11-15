import Tree from './tree.js'
import Node from './components/node.js'

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

export {tree as db_tree};