import colors from './colors';

const frontend = {
  id: '1',
  name: 'Frontend',
  colors: {
    soft: colors.Y50,
    hard: colors.N400A,
  },
};

const backend = {
  id: '2',
  name: 'Backend',
  colors: {
    soft: colors.G50,
    hard: colors.N400A,
  },
};

const ux = {
  id: '3',
  name: 'UX',
  colors: {
    soft: colors.B50,
    hard: colors.N400A,
  },
};

export const badges = [frontend, backend, ux];

export const tasks = [
  {
    id: '2',
    content:
      'Sucking at something is the first step towards being sorta good at something.',
    badge: frontend,
  },
  {
    id: '3',
    content: "You got to focus on what's real, man",
    badge: frontend,
  },
  {
    id: '4',
    content: 'Is that where creativity comes from? From sad biz?',
    badge: backend,
  },
  {
    id: '5',
    content: 'Homies help homies. Always',
    badge: ux,
  },
  {
    id: '8',
    content:
      "People make mistakes. It's all a part of growing up and you never really stop growing",
    badge: ux,
  },
  {
    id: '9',
    content: "Don't you always call sweatpants 'give up on life pants,' Jake?",
    badge: ux,
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
