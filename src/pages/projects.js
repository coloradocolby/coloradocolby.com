import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"
import ProjectCard from "../components/project-card"

const ProjectPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark(
                filter: { frontmatter: { type: { eq: "project" } } }
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
                                    fixed(height: 300) {
                                        ...GatsbyImageSharpFixed
                                    }
                                }
                            }
                            description
                            tags
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
                <div className="flex flex-col md:flex-row">
                    {data.allMarkdownRemark.edges.map(edge => {
                        const {
                            path,
                            title,
                            date,
                            featuredImage,
                            description,
                            tags,
                        } = edge.node.frontmatter
                        return (
                            <div className="w-full md:w-1/2">
                                <Link to={`${path}`} key={path}>
                                    <ProjectCard
                                        title={title}
                                        date={date}
                                        featuredImage={
                                            featuredImage?.childImageSharp.fluid
                                        }
                                        description={description}
                                        tags={tags}
                                    ></ProjectCard>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </Layout>
        </>
    )
}

export default ProjectPage
