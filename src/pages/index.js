import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
// import Img from "gatsby-image" // example usage below

import Layout from "../components/layout"
import Head from "../components/head"
import { Title, Subtitle, Cta } from "../components/styled"

const IndexPage = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    author
                }
            }
            file(relativePath: { eq: "me.jpg" }) {
                childImageSharp {
                    # Specify the image processing specifications right in the query.
                    fluid {
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
            }
        }
    `)

    return (
        <>
            <Head title="Home" />
            <Layout>
                <Title className="title is-1 m-b-lg">
                    hi, i'm {data.site.siteMetadata.author}
                </Title>
                <Subtitle className="subtitle is-2 m-b-lg">
                    a software engineer in seattle
                </Subtitle>
                <Cta className="is-size-4">
                    have an idea? <Link to="/contact">hmu</Link>
                </Cta>
                {/* <Img
                    fluid={data.file.childImageSharp.fluid}
                    alt="colby thomas"
                /> */}
            </Layout>
        </>
    )
}

export default IndexPage
