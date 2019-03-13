let todoList = []; 

function  addToDo(list, todo) { 
    let nextId = list.length; 
    
    let task =  {               
        id: nextId,
        description: todo,
        done: false
    }
    console.log(task)
    list[nextId] = task;        
}

function printTodoList(list) {
  let x = 0;
  let count = list.length;

  while(x < count) {
      let currentItem = list[x];
      //console.log(currentItem.description)
      x++;
  }
}

// Sample Use
let myTask = "Pick up drycleaning";
//addToDo(todoList, myTask);
//printTodoList(todoList);
completeToDo(todoList, myTask);
printTodoList(todoList)
 