// https://www.gatsbyjs.org/docs/adding-markdown-pages/#create-static-pages-using-gatsbys-nodejs-createpage-api
const path = require(`path`)
// https://www.gatsbyjs.org/packages/gatsby-remark-relative-images/#to-convert-frontmatter-images
// gatsby-node.js
const { fmImagesToRelative } = require('gatsby-remark-relative-images')

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const contentTemplate = path.resolve(`src/templates/content.template.js`)

  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: contentTemplate,
      context: {}, // additional data can be passed via context
    })
  })
}

exports.onCreateNode = ({ node }) => {
  fmImagesToRelative(node)
}
