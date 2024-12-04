import { PATH_DASHBOARD } from '../../../routes/path';

const getIcon = (name: string) => (
  <img src={`/assets/icons/${name}.svg`} className="h-10 w-10" />
);

const ICONS = {
  first: getIcon('first'),
};

const NavConfig = [
  {
    subheader: 'PLANNING',
    items: [
      {
        id: 'home',
        title: 'Timeline',
        path: PATH_DASHBOARD,
        icon: ICONS.first,
      },
    ],
  },
  {
    subheader: 'DEVELOPMENT',
    items: [
      {
        id: 'allowed',
        title: 'Backlog',
        path: PATH_DASHBOARD,
        icon: ICONS.first,
      },
      {
        id: 'master_temple_trust',
        title: 'Board',
        path: PATH_DASHBOARD,
        icon: ICONS.first,
      },

      {
        id: 'master_merchant',
        title: 'Goal',
        path: PATH_DASHBOARD,
        icon: ICONS.first,
      },
    ],
  },
];

export default NavConfig;
