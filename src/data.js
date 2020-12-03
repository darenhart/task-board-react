export const version = 2;

const backlog = {
  id: '1',
  name: 'Backlog',
};

const doing = {
  id: '2',
  name: 'Doing',
};

const done = {
  id: '3',
  name: 'Done',
};

export const badges = [backlog, doing, done];

let id = 1;

export const tasks = [
  {
    id: (id++).toString(),
    content: 'Fix warning "Unable to find drag handle"',
    badge: backlog,
  },
  {
    id: (id++).toString(),
    content: 'Put component style in separate file',
    badge: backlog,
  },
  {
    id: (id++).toString(),
    content: 'Increase test coverage',
    badge: doing,
  },
  {
    id: (id++).toString(),
    content: 'Add Readme',
    badge: doing,
  },
  {
    id: (id++).toString(),
    content: 'Add version to localStorage',
    badge: done,
  },
  {
    id: (id++).toString(),
    content: 'Save column name in localStorage',
    badge: doing,
  },
  {
    id: (id++).toString(),
    content: 'Responsive design',
    badge: doing,
  },
  {
    id: (id++).toString(),
    content: 'Separate files by screen and component folders',
    badge: done,
  },
  {
    id: (id++).toString(),
    content: 'Save tasks on localStorage',
    badge: doing,
  },
  {
    id: (id++).toString(),
    content:
      'User can also edit the Names of the Columns by clicking on the Name',
    badge: done,
  },
  {
    id: (id++).toString(),
    content: 'User can also move a Card from one column to another',
    badge: done,
  },
  {
    id: (id++).toString(),
    content: 'User can re-arrange the order of the Cards in a Column',
    badge: done,
  },
  {
    id: (id++).toString(),
    content:
      'When editing a card (Diag. 2, below) the background goes dark and you can edit, save, and delete the card.',
    badge: done,
  },
  {
    id: (id++).toString(),
    content:
      'User can edit the text in a Card by hovering over the Card and clicking the Edit pencil',
    badge: done,
  },
  {
    id: (id++).toString(),
    content:
      'User should be able to add a Card to a column by clicking “Add another card”',
    badge: done,
  },
  {
    id: (id++).toString(),
    content: 'POC with react-beautiful-dnd',
    badge: done,
  },
  {
    id: (id++).toString(),
    content: 'Research existing drag and drop tools',
    badge: done,
  },
];

const getByBadge = (badge, items) =>
  items.filter((task) => task.badge === badge);

export const data = badges.reduce(
  (previous, badge) => ({
    ...previous,
    [badge.name]: getByBadge(badge, tasks),
  }),
  {}
);
