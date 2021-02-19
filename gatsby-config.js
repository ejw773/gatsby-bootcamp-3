module.exports = {
  siteMetadata: {
    title: 'Gatsby Bootcamp 2021',
    author: 'Elijah J Wilcott'
  },
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    }
  ]
}
