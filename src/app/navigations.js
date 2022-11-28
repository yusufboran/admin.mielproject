export const navigations = [
  { name: "Home", path: "/home", icon: "dashboard" },
  {
    name: "Project",
    icon: "domain",
    children: [
      { name: "Projects", icon: "domain", path: "/projects" },
      { name: "Project add", icon: "domain_add", path: "/projects/add" },
    ],
  },
  {
    name: "Consultants",
    icon: "people",
    children: [
      { name: "Consultants", icon: "groups_icon", path: "/session/signin" },
      { name: "Consultant add", icon: "person_add", path: "/session/signup" },
    ],
  },
  {
    name: 'Components',
    icon: 'favorite',
    badge: { value: '30+', color: 'secondary' },
    children: [
      { name: 'Auto Complete', path: '/material/autocomplete', iconText: 'A' },
      { name: 'Buttons', path: '/material/buttons', iconText: 'B' },
      { name: 'Checkbox', path: '/material/checkbox', iconText: 'C' },
      { name: 'Dialog', path: '/material/dialog', iconText: 'D' },
      { name: 'Expansion Panel', path: '/material/expansion-panel', iconText: 'E' },
      { name: 'Form', path: '/material/form', iconText: 'F' },
      { name: 'Icons', path: '/material/icons', iconText: 'I' },
      { name: 'Menu', path: '/material/menu', iconText: 'M' },
      { name: 'Progress', path: '/material/progress', iconText: 'P' },
      { name: 'Radio', path: '/material/radio', iconText: 'R' },
      { name: 'Switch', path: '/material/switch', iconText: 'S' },
      { name: 'Slider', path: '/material/slider', iconText: 'S' },
      { name: 'Snackbar', path: '/material/snackbar', iconText: 'S' },
      { name: 'Table', path: '/material/table', iconText: 'T' },
    ],
  },
];
