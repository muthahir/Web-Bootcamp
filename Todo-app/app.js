
//selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
console.log(todoButton);

// Event Listener 
//1.
todoButton.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("inside");
 
 
    // div list
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");
    // div list item 
    const newTodo = document.createElement('li');
   
    newTodo.classList.add('todo-item');
    newTodo.innerText = todoInput.value;
    todoDiv.appendChild(newTodo);
    //Checked button
    const completedButton = document.createElement('button');
    completedButton.innerHTML= '<i class="fas fa-check"></i>'
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);
   
   //Trash button
   const trashButton = document.createElement('button');
   trashButton.innerHTML= '<i class="far fa-trash-alt"></i>'
   trashButton.classList.add('trash-btn');
   todoDiv.appendChild(trashButton);
   
   todoList.appendChild(todoDiv);
   todoInput.value="";
    
  



});

//2.
todoList.addEventListener("click", (e) =>{

    const item = e.target;
    // Delete 

    if(item.classList[0]=== "trash-btn"){
        const todo = item.parentElement;
        todo.classList.add("fall");
        todo.addEventListener("transitionend",function(){
            todo.remove();
        });
       
    }
    
    //check

    if(item.classList[0]=== "complete-btn"){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }

});
