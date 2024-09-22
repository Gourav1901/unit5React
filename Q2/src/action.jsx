// actions.js
export const addTodo = (title) => {
  return {
    type: 'ADD_TODO',
    payload: {
      id: uuidv4(),
      title,
      status: false,
    },
  };
};

export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    payload: id,
  };
};

export const deleteTodo = (id) => {
  return {
    type: 'DELETE_TODO',
    payload: id,
  };
};
