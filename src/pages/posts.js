import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"
import PostsCard from "../components/post-card"

const PostsPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark(
                filter: { frontmatter: { type: { eq: "post" } } }
            ) {
                edges {
                    node {
                        frontmatter {
                            title
                            path
                            date(formatString: "MMMM DD, YYYY")
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
            }
        }
    `)

    return (
        <>
            <Head title="Posts" />
            <Layout>
                <div className="columns is-multiline">
                    {data.allMarkdownRemark.edges.map(edge => {
                        return (
                            <div className="column">
                                <Link
                                    to={`${edge.node.frontmatter.path}`}
                                    key={edge.node.frontmatter.path}
                                >
                                    <PostsCard
                                        title={edge.node.frontmatter.title}
                                        date={edge.node.frontmatter.date}
                                        featuredImage={
                                            edge.node.frontmatter.featuredImage
                                                .childImageSharp.fluid
                                        }
                                    ></PostsCard>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </Layout>
        </>
    )
}

export default PostsPage
