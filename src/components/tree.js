export default class Tree {
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