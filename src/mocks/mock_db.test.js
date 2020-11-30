import DB from "./mock_db.js";

const DataBase = new DB().getInstance();

// Get Count
console.log('Get initial Trees count in DB: ');
console.log(DataBase.count);
console.log();

// Add Tree
console.log('Added a Tree to DB: ');
DataBase.AddTree({id:1, content: 'A'});

console.log(DataBase.count);
console.log();

// Get Tree
console.log('Get a Tree from DB: ');
const element_1 = DataBase.GetTreeByID(1);

console.table(element_1);
console.log();

// Update Tree
console.log('Update a Tree from DB: ')
element_1.content = 'B';
DataBase.UpdateTree(element_1);

const element_2 = DataBase.GetTreeByID(1);

console.table(element_2);
console.log();

// Delete Tree
console.log('Delete a Tree from DB: ');
DataBase.DeleteTree(1);

console.log(DataBase.count)
console.log()

// Get All Trees
DataBase.AddTree({content: 'A'});
DataBase.AddTree({content: 'B'});
DataBase.AddTree({content: 'C'});
DataBase.AddTree({content: 'D'});
console.log('Get all trees from DB, after inserting 4 Trees: ');

const allTrees = DataBase.GetAllTrees();

console.table(allTrees);
