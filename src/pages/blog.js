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
                {data.allMarkdownRemark.edges.map(edge => {
                    return (
                        <Link
                            to={`${edge.node.frontmatter.path}`}
                            key={edge.node.frontmatter.path}
                        >
                            <BlogCard
                                title={edge.node.frontmatter.title}
                                date={edge.node.frontmatter.date}
                            ></BlogCard>
                        </Link>
                    )
                })}
            </Layout>
        </>
    )
}

export default BlogPage
