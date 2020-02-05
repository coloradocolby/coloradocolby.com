import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import Head from "../components/head"

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
                <h1 className="title is-1 m-b-lg">
                    hi, i'm {data.site.siteMetadata.author}
                </h1>
                <h2 className="subtitle is-2 m-b-lg">
                    a software engineer in seattle
                </h2>
                <h4 className="is-size-4">
                    have an idea? <Link to="/contact">hmu</Link>
                </h4>
                {/* <Img
                    fluid={data.file.childImageSharp.fluid}
                    alt="colby thomas"
                /> */}
            </Layout>
        </>
    )
}

export default IndexPage
