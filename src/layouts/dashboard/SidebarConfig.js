// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const sidebarConfig = [
  {
    title: 'Dashboard',
    path: '/dashboard/app',
    icon: getIcon('eva:clipboard-fill')
  },
  {
    title: 'Packages',
    path: '/dashboard/user',
    icon: getIcon('eva:people-fill')
  },
  {
    title: 'Ecosystem Extensions',
    path: '/dashboard/products',
    icon: getIcon('eva:shopping-bag-fill')
  },
  {
    title: 'Docs and SDKs',
    path: '/dashboard/blog',
    icon: getIcon('eva:file-text-fill')
  },
  // {
  //   title: 'login',
  //   path: '/login',
  //   icon: getIcon('eva:lock-fill')
  // },
  {
    title: 'Customer Access',
    path: '/register',
    icon: getIcon('eva:person-add-fill')
  }
  // {
  //   title: 'Not found',
  //   path: '/404',
  //   icon: getIcon('eva:alert-triangle-fill')
  // }
];

export default sidebarConfig;
