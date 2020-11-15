import {db_tree} from './mock_db.js'
import {Logger} from './utils/logger.js'

/**
 * - Above are imports
 * - Program runs from here on
 **/

Logger("Program starts here")

/**
 * - Mock clinician input
 **/

const clinician_answer_1 = ["Answer 1: 10", "Answer 1: 11"];                     // Expected outcome: Path 1
const clinician_answer_2 = ["Answer 1: 10", "Answer 2: 12"];                     // Expected outcome: Path 2
const clinician_answer_3 = ["Answer 1: 10", "Answer 3: 13"];                     // Expected outcome: Path 3
const clinician_answer_4 = ["Answer 2: 100", "Answer 1: 101", "Answer 1: 103"];  // Expected outcome: Path 6
const clinician_answer_5 = ["Answer 2: 100", "Answer 2: 102"];                   // Expected outcome: Path 5

const answer1 = db_tree.evaluate(clinician_answer_1);
console.log(`Evaluation Answer for input 1: ${answer1.text}`);

const answer2 = db_tree.evaluate(clinician_answer_2);
console.log(`Evaluation Answer for input 2: ${answer2.text}`);

const answer3 = db_tree.evaluate(clinician_answer_3);
console.log(`Evaluation Answer for input 3: ${answer3.text}`);

const answer4 = db_tree.evaluate(clinician_answer_4);
console.log(`Evaluation Answer for input 4: ${answer4.text}`);

const answer5 = db_tree.evaluate(clinician_answer_5);
console.log(`Evaluation Answer for input 5: ${answer5.text}`);
