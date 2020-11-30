import Tree from '../components/tree.js'
import Node from '../components/node.js'

// Singleton DB
class mock_db {

    constructor() {
        this.TreeList = [];
    }

    get count() {
        return this.TreeList.length;
    }

    AddTree(treeparam){
        treeparam.id = this.TreeList.length + 1;
        this.TreeList.push(treeparam);
    }

    GetTreeByID(id){
        return this.TreeList.find((tree) => {
            return tree.id === id;
        });
    }

    GetAllTrees(){
        return this.TreeList;
    }

    UpdateTree(treeparam){
        const tree_index = this.TreeList.findIndex((tree) => {
            return tree.id === treeparam.id;
        });
        this.TreeList[tree_index] = treeparam;
    }

    DeleteTree(id){
        const tree_index = this.TreeList.findIndex((tree) => {
            return tree.id === id;
        });
        if(tree_index > -1){
            this.TreeList.splice(tree_index);
        }else{
            throw new Error('no element found');
        }
    }

}

class Singleton {

  constructor() {
      if (!Singleton.instance) {
          Singleton.instance = new mock_db();
      }
  }

  getInstance() {
      return Singleton.instance;
  }

}

export default Singleton;