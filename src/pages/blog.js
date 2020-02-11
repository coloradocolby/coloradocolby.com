import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"
import BlogCard from "../components/blog-card"

const BlogPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            title
                            path
                            date(formatString: "MMMM DD, YYYY")
                        }
                    }
                }
            }
        }
    `)

    return (
        <>
            <Head title="Blog" />
            <Layout>
                <div className="columns is-multiline">
                    {data.allMarkdownRemark.edges.map(edge => {
                        return (
                            <div className="column is-half">
                                <Link
                                    to={`${edge.node.frontmatter.path}`}
                                    key={edge.node.frontmatter.path}
                                >
                                    <BlogCard
                                        title={edge.node.frontmatter.title}
                                        date={edge.node.frontmatter.date}
                                    ></BlogCard>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </Layout>
        </>
    )
}

export default BlogPage
