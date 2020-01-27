import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

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
                    need a developer? <Link to="/contact">hmu</Link>
                </h4>
            </Layout>
        </>
    )
}

export default IndexPage
