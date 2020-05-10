import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import PostCard from '../components/post-card'

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
        <ul className="columns is-multiline">
          {data.allMarkdownRemark.edges.map(edge => {
            return (
              <li className="column" key={edge.node.frontmatter.path}>
                <Link to={`${edge.node.frontmatter.path}`}>
                  <PostCard
                    title={edge.node.frontmatter.title}
                    date={edge.node.frontmatter.date}
                    description={edge.node.frontmatter.description}
                  ></PostCard>
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
