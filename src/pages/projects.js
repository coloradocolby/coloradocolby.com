import React, { Component } from "react"
import Layout from "../components/layout"
import fetch from "node-fetch"
import Head from "../components/head"
import ProjectCard from "../components/project-card"

export default class ProjectsPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            repos: [],
        }
    }
    async componentDidMount() {
        let repos = await fetch(
            "https://api.github.com/users/coloradocolby/repos?sort=created",
            {
                headers: {
                    Accept: "application/vnd.github.mercy-preview+json", // allows us to see topics
                },
            }
        )
        repos = await repos.json()
        console.log(repos)
        this.setState({
            repos,
        })
    }
    render() {
        return (
            <>
                <Head title="Projects" />
                <Layout>
                    <h1 className="title is-1">projects</h1>
                    {this.state.repos &&
                        this.state.repos.map(repo => {
                            if (
                                repo.topics &&
                                repo.topics.length &&
                                repo.topics.includes("skrrrt")
                            ) {
                                return (
                                    <ProjectCard
                                        key={repo.id}
                                        name={repo.name}
                                        desc={repo.description}
                                        createdAt={repo.created_at}
                                        htmlUrl={repo.html_url}
                                        topics={repo.topics.filter(
                                            t => t !== "skrrrt"
                                        )}
                                    />
                                )
                            }
                        })}
                </Layout>
            </>
        )
    }
}
