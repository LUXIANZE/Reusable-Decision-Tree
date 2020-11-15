export default function Logger(title, content){
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