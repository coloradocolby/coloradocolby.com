import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Card from '../components/card'

const ProjectPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: { frontmatter: { type: { eq: "project" } } }) {
        edges {
          node {
            frontmatter {
              title
              path
              date(formatString: "MMMM DD, YYYY")
              description
              tags
            }
          }
        }
      }
    }
  `)

  return (
    <>
      <SEO title="projects" />
      <Layout>
        <ul className="flex flex-col">
          {data.allMarkdownRemark.edges.map(edge => {
            const {
              path,
              title,
              date,
              description,
              tags,
            } = edge.node.frontmatter
            return (
              <li className="w-full" key={path}>
                <Link to={`${path}`}>
                  <Card
                    title={title}
                    date={date}
                    description={description}
                    tags={tags}
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

export default ProjectPage
