const fs=require("fs");
const AddFilePath="./created.json";

function loadTasks(){
    try {
      let dataBuffer=fs.readFileSync(AddFilePath);
      let JsonFile=dataBuffer.toString(); //diff from normal json
      let dataJson=JSON.parse(JsonFile);
      return dataJson;
    } catch (error) {
        return [];
    }
}

function addTask(parameter){
    let loadedTask=loadTasks();
    loadedTask.push({task:parameter});
    saveTask(loadedTask);
    console.log("Task Added Successfully");



}
function DeleteTask(parameter){
    const modifiedTask=loadTasks().filter(item=>item.task!==parameter);
    if(modifiedTask.length===loadTasks().length){
        console.log("Wrong Parameter!")
        return;
    }
    saveTask(modifiedTask);
    console.log("Task Deleted");
    



}
function saveTask(LoadedTask){
    const dataJsonString=JSON.stringify(LoadedTask);
    fs.writeFileSync(AddFilePath,dataJsonString);
}

function ListTask(){
    let TaskBank=loadTasks();
    if(TaskBank.length===0){
        console.log("No Task Found")
        return;
    }
    else{
         TaskBank.forEach(item=>{
         console.log(item.task)
    })
    }
   

}




let cammand=process.argv[2];
let argument=process.argv[3];
if(cammand==="Add"){
    addTask(argument);
}
else if(cammand==="List"){
    ListTask();
}
else if(cammand==="Del"){
    DeleteTask(argument);
}
else{
    console.log("Cammand Not Found");
}