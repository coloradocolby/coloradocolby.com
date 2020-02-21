import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const Head = ({ title }) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                    author {
                        fullName
                        location
                    }
                }
            }
        }
    `)
    return (
        <Helmet>
            <title>
                {`${title} | ${data.site.siteMetadata.title}`.toLowerCase()}
            </title>
            <meta
                name="description"
                content={`${data.site.siteMetadata.author.fullName} - a software engineer in ${data.site.siteMetadata.author.location}`}
            />
        </Helmet>
    )
}

export default Head
