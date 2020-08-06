import { graphql, Link, useStaticQuery } from 'gatsby'
import React from 'react'
import Card from '../components/card'
import Layout from '../components/layout'
import SEO from '../components/seo'

const PostsPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: { frontmatter: { type: { eq: "post" } } }) {
        edges {
          node {
            frontmatter {
              title
              path
              date(formatString: "MMMM DD, YYYY")
              description
            }
          }
        }
      }
    }
  `)

  return (
    <>
      <SEO title="posts" />
      <Layout>
        <ul className="flex flex-row flex-wrap">
          {data.allMarkdownRemark.edges.map(edge => {
            return (
              <li className="md:w-1/2 w-full" key={edge.node.frontmatter.path}>
                <Link to={`${edge.node.frontmatter.path}`}>
                  <Card
                    title={edge.node.frontmatter.title}
                    date={edge.node.frontmatter.date}
                    description={edge.node.frontmatter.description}
                  ></Card>
                </Link>
              </li>
            )
          })}
        </ul>
      </Layout>
    </>
  )
}

export default PostsPage
