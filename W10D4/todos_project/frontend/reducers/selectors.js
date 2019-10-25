export const allTodos = (state) => {
  let arr = Object.keys(state.todos);
  let ret = arr.map( (key) => { 
    return state.todos[key];
  });
  return ret;
}

window.allTodos = allTodos;

