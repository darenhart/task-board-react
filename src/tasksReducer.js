export const tasksReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE':
      return {
        ...state,
        tasks: action.value,
      };

    case 'ADD_TO_COLUMN':
      return {
        ...state,
        tasks: {
          ...state.tasks,
          [action.column]: [...state.tasks[action.column], action.task],
        },
      };

    case 'DELETE':
      const filteredTasks = {};
      Object.keys(state.tasks).map(
        (column) =>
          (filteredTasks[column] = state.tasks[column].filter(
            (t) => t.id !== action.taskId
          ))
      );
      return {
        ...state,
        tasks: filteredTasks,
      };

    case 'EDIT_TASK':
      const editedTasks = {};
      Object.keys(state.tasks).map(
        (column) =>
          (editedTasks[column] = state.tasks[column].map((t) => {
            if (t.id === action.taskId) {
              t.content = action.value;
            }
            return t;
          }))
      );
      return {
        ...state,
        tasks: editedTasks,
      };

    default:
      return state;
  }
};
