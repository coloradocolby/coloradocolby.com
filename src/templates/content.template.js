import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"

import { ThemedDiv } from "../components/styled"
// import "prismjs/themes/prism-tomorrow.css" // for code highlighting
import { withTheme } from "styled-components"

const ContentTemplate = ({
    data, // this prop will be injected by the GraphQL query below.
    theme,
}) => {
    const { markdownRemark } = data // data.markdownRemark holds your post data
    const { frontmatter, html } = markdownRemark

    // TODO: revisit changing code theme on theme toggle
    // if (theme === "dark") {
    // require("prismjs/themes/prism-tomorrow.css")
    // } else {
    //     require("prismjs/themes/prism-solarizedlight.css")
    // }

    return (
        <>
            <SEO title={frontmatter.title} />
            <Layout>
                <ThemedDiv className="text-4xl font-bold">
                    {frontmatter.title}
                </ThemedDiv>
                <ThemedDiv className="text-2xl font-semibold">
                    {frontmatter.date}
                </ThemedDiv>
                <ThemedDiv
                    className="mt-6"
                    dangerouslySetInnerHTML={{ __html: html }}
                />
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
                featuredImage {
                    childImageSharp {
                        # Specify the image processing specifications right in the query.
                        fluid {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
    }
`

export default withTheme(ContentTemplate)
