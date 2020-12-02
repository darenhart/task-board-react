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

export const tasks = [
  {
    id: '51',
    content: 'Fix warning "Unable to find drag handle"',
    badge: backlog,
  },
  {
    id: '31',
    content: 'Increase test coverage',
    badge: doing,
  },
  {
    id: '31',
    content: 'Add Readme',
    badge: doing,
  },
  {
    id: '32',
    content: 'Add version to localStorage',
    badge: doing,
  },
  {
    id: '33',
    content: 'Save column name in localStorage',
    badge: doing,
  },
  {
    id: '34',
    content: 'Responsive design',
    badge: doing,
  },
  {
    id: '35',
    content: 'Separate files in screen and component folders',
    badge: doing,
  },
  {
    id: '4',
    content: 'Save tasks on localStorage',
    badge: doing,
  },
  {
    id: '5',
    content:
      'User can also edit the Names of the Columns by clicking on the Name',
    badge: done,
  },
  {
    id: '6',
    content: 'User can also move a Card from one column to another',
    badge: done,
  },
  {
    id: '7',
    content: 'User can re-arrange the order of the Cards in a Column',
    badge: done,
  },
  {
    id: '8',
    content:
      'When editing a card (Diag. 2, below) the background goes dark and you can edit, save, and delete the card.',
    badge: done,
  },
  {
    id: '9',
    content:
      'User can edit the text in a Card by hovering over the Card and clicking the Edit pencil',
    badge: done,
  },
  {
    id: '10',
    content:
      'User should be able to add a Card to a column by clicking “Add another card”',
    badge: done,
  },
  {
    id: '11',
    content: 'POC with react-beautiful-dnd',
    badge: done,
  },
  {
    id: '12',
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
