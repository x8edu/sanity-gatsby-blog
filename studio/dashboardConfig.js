export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5d11ba101d4bf3ec3cd1bbc7',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-7djwehpt',
                  apiId: '9f7c99cd-1ed7-4f57-8df7-3ff7b8b5cbc0'
                },
                {
                  buildHookId: '5d11ba10af6ea73a7321d5d9',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-thjqxim5',
                  apiId: '237f877e-d162-476c-adf3-404c7018e232'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/x8edu/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-thjqxim5.netlify.com', category: 'apps'}
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
