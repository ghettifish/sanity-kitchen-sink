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
                  buildHookId: '60f9e49b6572d5154ebac6a8',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-bh7b3k7d',
                  apiId: 'b95a4406-01d1-4426-bff1-53c5b3a6b5c5'
                },
                {
                  buildHookId: '60f9e49b6e9f6a13725d0a91',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-tz5bg6y5',
                  apiId: '89e5b7c0-9a8a-4d33-876d-a78b2eb4bc4d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ghettifish/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-tz5bg6y5.netlify.app', category: 'apps'}
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
