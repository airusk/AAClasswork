
const ulList = document.getElementsByClassName("todos")[0];
const todoForm = document.getElementsByClassName("add-todo-form")[0];
const todos = [];


function addTodo(){
  const todoInput = document.getElementsByName("add-todo")[0];
  // debugger
  const todo = todoInput.value;
  const doneHash = {value: todo, done: false};
  todos.push(doneHash);
  todoInput.value = "";
  populateList(todos);
}

function populateList(todos){
  // debugger
  let result = todos.map((todo)=>{
    const todoCheck = document.createElement("input");
    todoCheck.setAttribute("type", "checkbox");
    const todoLabel = document.createElement("label");  
    todoLabel.innerHTML = todo.value;
    const todoLi = document.createElement("li");
    // debugger
    todoLi.append(todoCheck);
    todoLi.append(todoLabel);
    return todoLi;
  });
  const todoUl = document.getElementsByClassName("todos")[0];
  result.forEach((listEl)=>{
    todoUl.append(listEl);
  });
}

document.addEventListener("submit",(e)=>{
  e.preventDefault();
  addTodo();
});