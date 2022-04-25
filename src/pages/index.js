import { graphql, Link, useStaticQuery } from 'gatsby'
import React from 'react'
// import Img from "gatsby-image" // example usage below
import Layout from '../components/layout'
import SEO from '../components/seo'
import { Cta, Intro, Subtitle, Title } from '../components/styled'

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author {
            name
            location
          }
        }
      }
      file(relativePath: { eq: "colby.jpg" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <>
      <SEO title="home" />
      <Layout>
        <div className="flex flex-col lg:flex-row justify-between mb-24">
          <Intro>
            <Title className="text-5xl font-bold">
              hi, i'm {data.site.siteMetadata.author.name}
            </Title>
            <Subtitle className="text-3xl sm:text-4xl mb-5">
              a software engineer in {data.site.siteMetadata.author.location}
            </Subtitle>
            <Cta className="text-xl sm:text-2xl">
              have an idea?{' '}
              <Link
                to="/contact"
                className="text-purple-600"
                aria-label="hit me up"
              >
                hmu
              </Link>
            </Cta>
          </Intro>
        </div>
      </Layout>
    </>
  )
}

export default IndexPage
