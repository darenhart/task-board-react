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
    id: '2',
    content:
      'Sucking at something is the first step towards being sorta good at something.',
    badge: backlog,
  },
  {
    id: '3',
    content: "You got to focus on what's real, man",
    badge: backlog,
  },
  {
    id: '4',
    content: 'Is that where creativity comes from? From sad biz?',
    badge: doing,
  },
  {
    id: '5',
    content: 'Homies help homies. Always',
    badge: done,
  },
  {
    id: '8',
    content:
      "People make mistakes. It's all a part of growing up and you never really stop growing",
    badge: done,
  },
  {
    id: '9',
    content: "Don't you always call sweatpants 'give up on life pants,' Jake?",
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
