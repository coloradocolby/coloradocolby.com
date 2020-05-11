import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Card from '../components/card'
import ContentAwareLink from '../components/contentAwareLink'

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
              repoUrl
              deployedUrl
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
              deployedUrl,
              repoUrl,
            } = edge.node.frontmatter
            return (
              <li className="w-full" key={path}>
                <ContentAwareLink to={deployedUrl || repoUrl || '/'}>
                  <Card
                    title={title}
                    date={date}
                    description={description}
                    tags={tags}
                  ></Card>
                </ContentAwareLink>
              </li>
            )
          })}
        </ul>
      </Layout>
    </>
  )
}

export default ProjectPage
