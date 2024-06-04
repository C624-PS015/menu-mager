import {
  HiOutlineShoppingCart,
  HiOutlineArchive,
  HiOutlineUserGroup,
  HiOutlineAnnotation,
  HiOutlineClipboardList,
  HiOutlineReceiptTax,
  HiOutlineChartBar,
} from 'react-icons/hi';

export const SIDEBAR_ITEMS = [
  {
    category: 'Business',
    items: [
      {
        title: 'Dashboard',
        path: '/dashboard',
        icon: HiOutlineChartBar,
      },
    ],
  },
  {
    category: 'Operation',
    items: [
      {
        title: 'Subscriptions',
        path: '/dashboard/subscriptions',
        icon: HiOutlineReceiptTax,
      },
      {
        title: 'Deliveries',
        path: '/dashboard/deliveries',
        icon: HiOutlineArchive,
      },
    ],
  },
  {
    category: 'Management',
    items: [
      {
        title: 'Users',
        path: '/dashboard/users',
        icon: HiOutlineUserGroup,
      },
      {
        title: 'Plans',
        path: '/dashboard/plans',
        icon: HiOutlineShoppingCart,
      },
      {
        title: 'Recipes',
        path: '/dashboard/recipes',
        icon: HiOutlineClipboardList,
      },
      {
        title: 'Preferences',
        path: '/dashboard/preferences',
        icon: HiOutlineAnnotation,
      },
    ],
  },
];
