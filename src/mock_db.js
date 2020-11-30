import Tree from './components/tree.js'
import Node from './components/node.js'

const treeid = "T001";

// var node1 = new Node("N001", treeid, "Question : 10 OR 100",        [{text : "Answer 1: 10", next_node : "N002"}, {text : "Answer 2: 100", next_node : "N003"}]);
// var node2 = new Node("N002", treeid, "Question : 11 OR 12 OR 13",   [{text : "Answer 1: 11", next_node : "N004"}, {text : "Answer 2: 12", next_node : "N005"}, {text : "Answer 3: 13", next_node : "N006"}]);
// var node3 = new Node("N003", treeid, "Question : 101 OR 102",       [{text : "Answer 1: 101", next_node : "N007"}, {text : "Answer 2: 102", next_node : "N008"}]);
// var node4 = new Node("N004", treeid, "",                            [{text : "Path 1", next_node : null}]);
// var node5 = new Node("N005", treeid, "",                            [{text : "Path 2", next_node : null}]);
// var node6 = new Node("N006", treeid, "",                            [{text : "Path 3", next_node : null}]);
// var node7 = new Node("N007", treeid, "Question : 103",              [{text : "Answer 1: 103", next_node : "N009"}]);
// var node8 = new Node("N008", treeid, "",                            [{text : "Path 5", next_node : null}]);
// var node9 = new Node("N009", treeid, "",                            [{text : "Path 6", next_node : null}]);

var node1 = new Node("N001", treeid, "Number of Polyps",            [{text : "Number of Polyps: 0", next_node : "N002"}, {text : "Number of Polyps: <=2", next_node : "N003"}, {text : "Number of Polyps: 3-4", next_node : "N004"}, {text : "Number of Polyps: 5-10", next_node : "N005"}, {text : "Number of Polyps: >10", next_node : "N006"}]);

// from node 1
var node2 = new Node("N002", treeid, "",                            [{text : "10 Year", next_node : null}]); // answer node
var node3 = new Node("N003", treeid, "Size of largest polyp",       [{text : "Size of largest polyp: <10mm", next_node : "N007"}, {text : "Size of largest polyp: >=10mm", next_node : "N008"}]);
var node4 = new Node("N004", treeid, "Size of largest polyp",       [{text : "Size of largest polyp: <10mm", next_node : "N009"}, {text : "Size of largest polyp: >=10mm", next_node : "N010"}]);
var node5 = new Node("N005", treeid, "Size of largest polyp",       [{text : "Size of largest polyp: <10mm", next_node : "N011"}, {text : "Size of largest polyp: >=10mm", next_node : "N012"}]);
var node6 = new Node("N006", treeid, "",                            [{text : "1 Year", next_node : null}]); // answer node

// from node 3
var node7 = new Node("N007", treeid, "Villous architecture",        [{text : "Villous architecture: Y", next_node : "N013"}, {text : "Villous architecture: N", next_node : "N014"}]);
var node8 = new Node("N008", treeid, "Villous architecture",        [{text : "Villous architecture: Y", next_node : "N015"}, {text : "Villous architecture: N", next_node : "N016"}]);

// from node 4
var node9 = new Node("N009", treeid, "Villous architecture",        [{text : "Villous architecture: Y", next_node : "N017"}, {text : "Villous architecture: N", next_node : "N018"}]);
var node10 = new Node("N010", treeid, "Villous architecture",        [{text : "Villous architecture: Y", next_node : "N019"}, {text : "Villous architecture: N", next_node : "N020"}]);

// from node 5
var node11 = new Node("N011", treeid, "Villous architecture",        [{text : "Villous architecture: Y", next_node : "N021"}, {text : "Villous architecture: N", next_node : "N022"}]);
var node12 = new Node("N012", treeid, "Villous architecture",        [{text : "Villous architecture: Y", next_node : "N023"}, {text : "Villous architecture: N", next_node : "N024"}]);

// from node 7
var node13 = new Node("N013", treeid, "High grade Dysplasia",                            [{text : "High grade Dysplasia : Y", next_node : "N025"}, {text : "High grade Dysplasia : N", next_node : "N026"}]);
var node14 = new Node("N014", treeid, "High grade Dysplasia",                            [{text : "High grade Dysplasia : Y", next_node : "N027"}, {text : "High grade Dysplasia : N", next_node : "N028"}]);

// from node 8
var node15 = new Node("N015", treeid, "High grade Dysplasia",                            [{text : "High grade Dysplasia : Y", next_node : "N029"}, {text : "High grade Dysplasia : N", next_node : "N030"}]);
var node16 = new Node("N016", treeid, "High grade Dysplasia",                            [{text : "High grade Dysplasia : Y", next_node : "N031"}, {text : "High grade Dysplasia : N", next_node : "N032"}]);

// from node 9
var node17 = new Node("N017", treeid, "High grade Dysplasia",                            [{text : "High grade Dysplasia : Y", next_node : "N033"}, {text : "High grade Dysplasia : N", next_node : "N034"}]);
var node18 = new Node("N018", treeid, "High grade Dysplasia",                            [{text : "High grade Dysplasia : Y", next_node : "N035"}, {text : "High grade Dysplasia : N", next_node : "N036"}]);

// from node 10
var node19 = new Node("N019", treeid, "High grade Dysplasia",                            [{text : "High grade Dysplasia : Y", next_node : "N037"}, {text : "High grade Dysplasia : N", next_node : "N038"}]);
var node20 = new Node("N020", treeid, "High grade Dysplasia",                            [{text : "High grade Dysplasia : Y", next_node : "N039"}, {text : "High grade Dysplasia : N", next_node : "N040"}]);

// from node 11
var node21 = new Node("N021", treeid, "High grade Dysplasia",                            [{text : "High grade Dysplasia : Y", next_node : "N041"}, {text : "High grade Dysplasia : N", next_node : "N042"}]);
var node22 = new Node("N022", treeid, "High grade Dysplasia",                            [{text : "High grade Dysplasia : Y", next_node : "N043"}, {text : "High grade Dysplasia : N", next_node : "N044"}]);

// from node 12
var node23 = new Node("N023", treeid, "High grade Dysplasia",                            [{text : "High grade Dysplasia : Y", next_node : "N045"}, {text : "High grade Dysplasia : N", next_node : "N046"}]);
var node24 = new Node("N024", treeid, "High grade Dysplasia",                            [{text : "High grade Dysplasia : Y", next_node : "N047"}, {text : "High grade Dysplasia : N", next_node : "N048"}]);

// from node 13
var node25 = new Node("N025", treeid, "",                            [{text : "3 Year", next_node : null}]); // answer node
var node26 = new Node("N026", treeid, "",                            [{text : "3 Year", next_node : null}]); // answer node

// from node 14
var node27 = new Node("N027", treeid, "",                            [{text : "3 Year", next_node : null}]); // answer node
var node28 = new Node("N028", treeid, "",                            [{text : "7-10 Year", next_node : null}]); // answer node

// from node 15
var node29 = new Node("N029", treeid, "",                            [{text : "3 Year", next_node : null}]); // answer node
var node30 = new Node("N030", treeid, "",                            [{text : "3 Year", next_node : null}]); // answer node

// from node 16
var node31 = new Node("N031", treeid, "",                            [{text : "3 Year", next_node : null}]); // answer node
var node32 = new Node("N032", treeid, "",                            [{text : "3 Year", next_node : null}]); // answer node

// from node 17
var node33 = new Node("N033", treeid, "",                            [{text : "3 Year", next_node : null}]); // answer node
var node34 = new Node("N034", treeid, "",                            [{text : "3 Year", next_node : null}]); // answer node

// from node 18
var node35 = new Node("N035", treeid, "",                            [{text : "3 Year", next_node : null}]); // answer node
var node36 = new Node("N036", treeid, "",                            [{text : "3-5 Year", next_node : null}]); // answer node

// from node 19
var node37 = new Node("N037", treeid, "",                            [{text : "3 Year", next_node : null}]); // answer node
var node38 = new Node("N038", treeid, "",                            [{text : "3 Year", next_node : null}]); // answer node

// from node 20
var node39 = new Node("N039", treeid, "",                            [{text : "3 Year", next_node : null}]); // answer node
var node40 = new Node("N040", treeid, "",                            [{text : "3 Year", next_node : null}]); // answer node

// from node 21
var node41 = new Node("N041", treeid, "",                            [{text : "3 Year", next_node : null}]); // answer node
var node42 = new Node("N042", treeid, "",                            [{text : "3 Year", next_node : null}]); // answer node

// from node 22
var node43 = new Node("N043", treeid, "",                            [{text : "3 Year", next_node : null}]); // answer node
var node44 = new Node("N044", treeid, "",                            [{text : "3 Year", next_node : null}]); // answer node

// from node 23
var node45 = new Node("N045", treeid, "",                            [{text : "3 Year", next_node : null}]); // answer node
var node46 = new Node("N046", treeid, "",                            [{text : "3 Year", next_node : null}]); // answer node

// from node 24
var node47 = new Node("N047", treeid, "",                            [{text : "3 Year", next_node : null}]); // answer node
var node48 = new Node("N048", treeid, "",                            [{text : "3 Year", next_node : null}]); // answer node

var arr = [node1, node2, node3, node4, node5, node6, node7, node8, node9, node10, node11, node12, node13, node14, node15, node16, node17, node18, node19, node20, node21, node22, node23, node24, node25, node26, node27, node28, node29, node30, node31, node32, node33, node34, node35, node36, node37, node38, node39, node40, node41, node42, node43, node44, node45, node46, node47, node48];

var tree = new Tree(treeid, "Test Tree Model", arr);

export {tree as db_tree};