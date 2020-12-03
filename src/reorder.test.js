import { reorderTaskMap } from './reorder';

test('renders title', () => {
  const tasks = {
    doing: [
      {
        id: '51',
        content: 'Fix warning Unable to find drag handle',
      },
    ],
    done: [
      {
        id: '52',
        content: 'Put component style in separate file',
      },
    ],
  };
  const ordered = {
    doing: [],
    done: [tasks.done[0], tasks.doing[0]],
  };

  const data = reorderTaskMap({
    taskMap: tasks,
    source: { droppableId: 'doing', index: 0 },
    destination: { droppableId: 'done', index: 1 },
  });
  expect(data).toStrictEqual({ taskMap: ordered });
});
