export const tasksReducer = (state, action) => {
  let tasks = {};
  switch (action.type) {
    case 'UPDATE':
      tasks = action.value;
      break;

    case 'ADD_TO_COLUMN':
      tasks = {
        ...state.tasks,
        [action.column]: [...state.tasks[action.column], action.task],
      };
      break;

    case 'DELETE':
      Object.keys(state.tasks).map(
        (column) =>
          (tasks[column] = state.tasks[column].filter(
            (t) => t.id !== action.taskId
          ))
      );
      break;

    case 'EDIT_TASK':
      Object.keys(state.tasks).map(
        (column) =>
          (tasks[column] = state.tasks[column].map((t) => {
            if (t.id === action.taskId) {
              t.content = action.value;
              t.isNew = false;
            }
            return t;
          }))
      );
      break;

    default:
      tasks = state.tasks;
      break;
  }
  localStorage.setItem('tasks', JSON.stringify(tasks));
  return { ...state, tasks };
};
