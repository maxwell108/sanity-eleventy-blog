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
                  buildHookId: '6091f78ccc315811ea1be13a',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-rxcuybpt',
                  apiId: '4dfcb39d-2ff0-407d-97d9-e4a210ad67c7'
                },
                {
                  buildHookId: '6091f78c119d0616a2447353',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-nat3ynp4',
                  apiId: '9a9bf396-6885-4eab-9287-a468fb0aa1ee'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/maxwell108/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-nat3ynp4.netlify.app', category: 'apps'}
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
