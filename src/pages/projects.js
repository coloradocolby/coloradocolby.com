import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
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
            <SEO title="projects" />
            <Layout>
                <div className="flex flex-col">
                    {data.allMarkdownRemark.edges.map(edge => {
                        const {
                            path,
                            title,
                            date,
                            description,
                            tags,
                        } = edge.node.frontmatter
                        return (
                            <div className="w-full">
                                <Link to={`${path}`} key={path}>
                                    <ProjectCard
                                        title={title}
                                        date={date}
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
