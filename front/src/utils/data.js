import { MdHome } from 'react-icons/md';
import { MdFactCheck } from 'react-icons/md';
import { MdWatchLater } from 'react-icons/md';
import { FaCircleExclamation } from 'react-icons/fa6';

export const navMenus = [
  { label: 'Home', to: '/', icon: <MdHome className="w-5 h-5" />, idx: 0 },
  {
    label: 'Completed',
    to: '/completed',
    icon: <MdFactCheck className="w-5 h-5" />,
    idx: 1,
  },
  {
    label: 'Proceeding',
    to: '/proceeding',
    icon: <MdWatchLater className="w-5 h-5" />,
    idx: 2,
  },
  {
    label: 'Important',
    to: '/important',
    icon: <FaCircleExclamation className="w-4 h-4" />,
    idx: 3,
  },
];
