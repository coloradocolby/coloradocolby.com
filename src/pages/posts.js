import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"
import PostCard from "../components/post-card"

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
                            description
                        }
                    }
                }
            }
        }
    `)

    console.log("posts data", data)
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
                                    <PostCard
                                        title={edge.node.frontmatter.title}
                                        date={edge.node.frontmatter.date}
                                        description={
                                            edge.node.frontmatter.description
                                        }
                                    ></PostCard>
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
