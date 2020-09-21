export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f692011c0de820154f47bbf',
                  title: 'Sanity Studio',
                  name: 'into-sanity-studio',
                  apiId: '58157e34-0b33-4746-93ad-5fa911866e68'
                },
                {
                  buildHookId: '5f692011b177fa012be44ffa',
                  title: 'Blog Website',
                  name: 'into-sanity',
                  apiId: '5d393ba6-96e6-4394-82eb-a1170f642f6b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/geleeroyale/into-sanity',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://into-sanity.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
