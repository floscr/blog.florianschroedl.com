module.exports = {
  pathPrefix: `/gatsby-starter-blorg`,
  siteMetadata: {
    siteURL: 'https://blog.florianschroedl.com',
    title: `Blog | Florian Schrödl`,
    description: `Personal blog about all things javascript, nix, nixos, emacs & functional programming.`,
    author: 'Florian Schrödl',
    twitter: 'florianscr',
    social: [
      { name: 'twitter', url: 'https://twitter.com/florianscr' },
      { name: 'website', url: 'https://blog.florianschroedl.com' },
      { name: 'github', url: 'https://github.com/floscr' },
    ]
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-matomo',
      options: {
        siteId: '1',
        matomoUrl: 'https://analytics.florianschroedl.com',
        siteUrl: 'https://blog.florianschroedl.com',
        disableCookies: true,
        dev: true,
      }
    },
    {
      resolve: `gatsby-theme-blorg`,
      options: {
        // contentPath: 'content',
        // filter: () => true,
        // pagination: 5,
        // columns: 2,
        // indexPath: '/',
        // imageMaxWidth: 1380,
        // categoryIndexPath: category => `/${category}`,
        // tagIndexPath: tag => `/:${tag}:`,
        // slug: ({ export_file_name }) => `/${export_file_name}`,
        // postRedirect: () => [],
      },
    },
  ],
}
