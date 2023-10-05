import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '8d1'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '2d2'),
    routes: [
      {
        path: '/docs/how/summary',
        component: ComponentCreator('/docs/how/summary', '17c'),
        exact: true,
        sidebar: "mainSidebar"
      },
      {
        path: '/docs/how/todo',
        component: ComponentCreator('/docs/how/todo', '26f'),
        exact: true,
        sidebar: "mainSidebar"
      },
      {
        path: '/docs/how/topics',
        component: ComponentCreator('/docs/how/topics', '06f'),
        exact: true,
        sidebar: "mainSidebar"
      },
      {
        path: '/docs/how/unsorted/architecture',
        component: ComponentCreator('/docs/how/unsorted/architecture', 'ffe'),
        exact: true
      },
      {
        path: '/docs/how/unsorted/blob',
        component: ComponentCreator('/docs/how/unsorted/blob', 'ee6'),
        exact: true
      },
      {
        path: '/docs/how/unsorted/roadmap',
        component: ComponentCreator('/docs/how/unsorted/roadmap', '8f6'),
        exact: true
      },
      {
        path: '/docs/how/unsorted/tokenomics',
        component: ComponentCreator('/docs/how/unsorted/tokenomics', 'f91'),
        exact: true
      },
      {
        path: '/docs/what/',
        component: ComponentCreator('/docs/what/', 'a12'),
        exact: true,
        sidebar: "mainSidebar"
      },
      {
        path: '/docs/what/addressing',
        component: ComponentCreator('/docs/what/addressing', '584'),
        exact: true,
        sidebar: "mainSidebar"
      },
      {
        path: '/docs/what/blobs_and_uris',
        component: ComponentCreator('/docs/what/blobs_and_uris', 'f62'),
        exact: true,
        sidebar: "mainSidebar"
      },
      {
        path: '/docs/what/blocks_state_proofs',
        component: ComponentCreator('/docs/what/blocks_state_proofs', '5a7'),
        exact: true,
        sidebar: "mainSidebar"
      },
      {
        path: '/docs/what/competition',
        component: ComponentCreator('/docs/what/competition', '3b9'),
        exact: true,
        sidebar: "mainSidebar"
      },
      {
        path: '/docs/what/handles',
        component: ComponentCreator('/docs/what/handles', '46c'),
        exact: true,
        sidebar: "mainSidebar"
      },
      {
        path: '/docs/what/host_vs_data_centric',
        component: ComponentCreator('/docs/what/host_vs_data_centric', 'f0f'),
        exact: true,
        sidebar: "mainSidebar"
      },
      {
        path: '/docs/what/identity',
        component: ComponentCreator('/docs/what/identity', '878'),
        exact: true,
        sidebar: "mainSidebar"
      },
      {
        path: '/docs/what/idms_preferences',
        component: ComponentCreator('/docs/what/idms_preferences', 'e86'),
        exact: true,
        sidebar: "mainSidebar"
      },
      {
        path: '/docs/what/messages',
        component: ComponentCreator('/docs/what/messages', 'eba'),
        exact: true,
        sidebar: "mainSidebar"
      },
      {
        path: '/docs/what/names_and_paths',
        component: ComponentCreator('/docs/what/names_and_paths', '863'),
        exact: true,
        sidebar: "mainSidebar"
      },
      {
        path: '/docs/what/numbers',
        component: ComponentCreator('/docs/what/numbers', 'fae'),
        exact: true,
        sidebar: "mainSidebar"
      },
      {
        path: '/docs/what/principles',
        component: ComponentCreator('/docs/what/principles', 'fd1'),
        exact: true,
        sidebar: "mainSidebar"
      },
      {
        path: '/docs/what/store_and_retrieve',
        component: ComponentCreator('/docs/what/store_and_retrieve', '572'),
        exact: true,
        sidebar: "mainSidebar"
      },
      {
        path: '/docs/why/algorithms_feeds_aggregation',
        component: ComponentCreator('/docs/why/algorithms_feeds_aggregation', '71b'),
        exact: true,
        sidebar: "mainSidebar"
      },
      {
        path: '/docs/why/attention',
        component: ComponentCreator('/docs/why/attention', 'a87'),
        exact: true
      },
      {
        path: '/docs/why/business_models',
        component: ComponentCreator('/docs/why/business_models', 'ef5'),
        exact: true
      },
      {
        path: '/docs/why/cant_be_evil',
        component: ComponentCreator('/docs/why/cant_be_evil', '0cf'),
        exact: true
      },
      {
        path: '/docs/why/collective_intelligence',
        component: ComponentCreator('/docs/why/collective_intelligence', '989'),
        exact: true
      },
      {
        path: '/docs/why/concerns',
        component: ComponentCreator('/docs/why/concerns', '607'),
        exact: true
      },
      {
        path: '/docs/why/cryptohistory',
        component: ComponentCreator('/docs/why/cryptohistory', 'bee'),
        exact: true
      },
      {
        path: '/docs/why/data_legos',
        component: ComponentCreator('/docs/why/data_legos', '2e0'),
        exact: true
      },
      {
        path: '/docs/why/evarrow',
        component: ComponentCreator('/docs/why/evarrow', '376'),
        exact: true
      },
      {
        path: '/docs/why/giant_global_graph',
        component: ComponentCreator('/docs/why/giant_global_graph', 'e36'),
        exact: true
      },
      {
        path: '/docs/why/host_centric',
        component: ComponentCreator('/docs/why/host_centric', '654'),
        exact: true
      },
      {
        path: '/docs/why/incentives_algorithms',
        component: ComponentCreator('/docs/why/incentives_algorithms', '18d'),
        exact: true
      },
      {
        path: '/docs/why/information_ecology',
        component: ComponentCreator('/docs/why/information_ecology', 'bf6'),
        exact: true
      },
      {
        path: '/docs/why/knowledge_management',
        component: ComponentCreator('/docs/why/knowledge_management', 'f9e'),
        exact: true
      },
      {
        path: '/docs/why/moderation',
        component: ComponentCreator('/docs/why/moderation', '526'),
        exact: true
      },
      {
        path: '/docs/why/organizing_information',
        component: ComponentCreator('/docs/why/organizing_information', '7a7'),
        exact: true
      },
      {
        path: '/docs/why/problems_with_the_web',
        component: ComponentCreator('/docs/why/problems_with_the_web', 'c19'),
        exact: true
      },
      {
        path: '/docs/why/startup_case_study',
        component: ComponentCreator('/docs/why/startup_case_study', '8d8'),
        exact: true
      },
      {
        path: '/docs/why/what_really_is_headjack',
        component: ComponentCreator('/docs/why/what_really_is_headjack', '79a'),
        exact: true
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'a6f'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
