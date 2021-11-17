export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
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
                  buildHookId: '6194a4831251d8c61d0e75e9',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-3-studio-mutqy9ug',
                  apiId: '3197eaa0-a0d5-4eca-aaaa-ea634776db50'
                },
                {
                  buildHookId: '6194a48346dcf5c4fa4529b3',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-3-web-xxjgvwad',
                  apiId: '46d1f386-b197-4688-8b5d-e70609859f65'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ItsMeAra/sanity-eleventy-blog3',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-3-web-xxjgvwad.netlify.app', category: 'apps'}
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
