import React from "react"
import { graphql } from "gatsby"

import Head from "../components/head"
import Layout from "../components/layout"

export default function Template({
    data, // this prop will be injected by the GraphQL query below.
}) {
    const { markdownRemark } = data // data.markdownRemark holds your post data
    const { frontmatter, html } = markdownRemark
    return (
        <>
            <Head title={frontmatter.title} />
            <Layout>
                <h1 className="title has-text-white">{frontmatter.title}</h1>
                <h2 className="subtitle has-text-white">{frontmatter.date}</h2>
                <div className="blog-post content">
                    <div dangerouslySetInnerHTML={{ __html: html }} />
                </div>
            </Layout>
        </>
    )
}

export const pageQuery = graphql`
    query($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                path
                title
            }
        }
    }
`
