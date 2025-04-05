import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/CM2-DOCS/__docusaurus/debug',
    component: ComponentCreator('/CM2-DOCS/__docusaurus/debug', '70b'),
    exact: true
  },
  {
    path: '/CM2-DOCS/__docusaurus/debug/config',
    component: ComponentCreator('/CM2-DOCS/__docusaurus/debug/config', 'd9d'),
    exact: true
  },
  {
    path: '/CM2-DOCS/__docusaurus/debug/content',
    component: ComponentCreator('/CM2-DOCS/__docusaurus/debug/content', '620'),
    exact: true
  },
  {
    path: '/CM2-DOCS/__docusaurus/debug/globalData',
    component: ComponentCreator('/CM2-DOCS/__docusaurus/debug/globalData', '867'),
    exact: true
  },
  {
    path: '/CM2-DOCS/__docusaurus/debug/metadata',
    component: ComponentCreator('/CM2-DOCS/__docusaurus/debug/metadata', '79b'),
    exact: true
  },
  {
    path: '/CM2-DOCS/__docusaurus/debug/registry',
    component: ComponentCreator('/CM2-DOCS/__docusaurus/debug/registry', '66f'),
    exact: true
  },
  {
    path: '/CM2-DOCS/__docusaurus/debug/routes',
    component: ComponentCreator('/CM2-DOCS/__docusaurus/debug/routes', 'a44'),
    exact: true
  },
  {
    path: '/CM2-DOCS/docs',
    component: ComponentCreator('/CM2-DOCS/docs', '60d'),
    routes: [
      {
        path: '/CM2-DOCS/docs',
        component: ComponentCreator('/CM2-DOCS/docs', '1d0'),
        routes: [
          {
            path: '/CM2-DOCS/docs',
            component: ComponentCreator('/CM2-DOCS/docs', '19a'),
            routes: [
              {
                path: '/CM2-DOCS/docs/intro',
                component: ComponentCreator('/CM2-DOCS/docs/intro', '60e'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/CM2-DOCS/',
    component: ComponentCreator('/CM2-DOCS/', '184'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
