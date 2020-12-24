import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    title: true,
    name: 'Home'
  },
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
    
  },
  {
    name: 'Trucks',
    url: '/trucks',
    icon: 'fa fa-truck',
    children: [
      {
        name: 'View truck',
        url: '/trucks/view-trucks',
        icon: 'fa fa-truck'
      },
      {
        name: 'Add truck',
        url: '/trucks/add-trucks',
        icon: 'fa fa-truck'
      }
    ]
  },

  {
    name: 'Employees',
    url: '/employees',
    icon: 'fa fa-address-book-o ',
    children: [
      {
        name: 'View Employees',
        url: '/employees/view-employees',
        icon:'fa fa-address-book-o'
      },
      {
        name: 'Add Employee',
        url: '/employees/add-employee',
        icon:'fa fa-address-book-o'
      }
    ]
  },

  {
    name: 'Tasks',
    url: '/tasks',
    icon: 'fa fa-tasks',
    children: [
      {
        name: 'View Tasks',
        url: '/tasks/view-tasks',
        icon: 'fa fa-tasks'
      },
      {
        name: 'New Task',
        url: '/tasks/new-task',
        icon: 'fa fa-tasks'
      }
    ]
  }

];
