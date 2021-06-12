module.exports = {
  pathPrefix: `/gatsby-starter-blorg`,
  siteMetadata: {
    siteUrl: "https://blog.florianschroedl.com",
    title: "Blog | Florian Schrödl",
    description:
      "Personal blog about all things javascript, nix, nixos, emacs & functional programming.",
    author: "Florian Schrödl",
    twitter: "florianscr",
    social: [
      { name: "twitter", url: "https://twitter.com/florianscr" },
      { name: "website", url: "https://blog.florianschroedl.com" },
      { name: "github", url: "https://github.com/floscr" },
    ],
  },
  plugins: [
    // 'gatsby-plugin-feed',
    {
      resolve: "gatsby-plugin-matomo",
      options: {
        siteId: "1",
        matomoUrl: "https://analytics.florianschroedl.com",
        siteUrl: "https://blog.florianschroedl.com",
        disableCookies: true,
        dev: true,
      },
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
    {
      resolve: "gatsby-plugin-feed",
      options: {
        setup(ref) {
          const metaInfo = ref.query.site.siteMetadata

          metaInfo.generator = "GatsbyJS test"
          return metaInfo
        },
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize(value) {
              const rssMetadata = value.query.site.siteMetadata
              return value.query.allOrgPost.edges.map((x) => ({
                description: x.node.title,
                date: x.node.date,
                url: rssMetadata.siteUrl + x.node.slug,
                guid: rssMetadata.siteUrl + x.node.slug,
              }))
            },
            query: `
              {
                allOrgPost {
                  edges {
                    node {
                      id
                      date
                      slug
                      title
                    }
                  }
                }
              }
            `,
            output: "/feed.xml",
            title: "Florian Schrödl | Blog",
          },
        ],
      },
    },
  ],
}
