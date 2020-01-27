import React from "react"
import Layout from "../components/layout"
import { Link, useStaticQuery, graphql } from "gatsby"
import blogStyles from "./blog.module.scss"

import Head from "../components/head"

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
                <h1 className="title is-1">blog</h1>
                {data.allMarkdownRemark.edges.map(edge => {
                    return (
                        <Link
                            to={`${edge.node.frontmatter.path}`}
                            key={edge.node.frontmatter.path}
                        >
                            <div
                                className={`${blogStyles.blogCard} card m-b-md`}
                            >
                                <div className="card-content">
                                    <div className="media">
                                        <div className="media-content">
                                            <p className="title is-4">
                                                {edge.node.frontmatter.title}
                                            </p>
                                            <p className="subtitle is-6">
                                                {edge.node.frontmatter.date}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    )
                })}
            </Layout>
        </>
    )
}

export default BlogPage
