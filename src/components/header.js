import React from "react"
import { useTheme } from "../contexts/ThemeContext"
import styled, { withTheme } from "styled-components"
import { Link, graphql, useStaticQuery } from "gatsby"
import { Moon, Sun } from "react-feather"
import { ThemeTogglerWrapper, HeaderTitle } from "./styled"
import { textColor, hoverColor } from "../theme"

const CustomLinkWrapper = styled.div`
    color: ${textColor};
    display: flex;
    margin: 0;
    padding-top: 2rem;
    justify-content: space-between;

    @media only screen and (min-width: 1200px) {
        padding: 0;
        justify-content: space-between;
    }
`

const CustomLink = styled.div`
    font-size: 1rem;
    padding-top: 1rem;
    font-weight: bold;
    text-align: center;
    // transition: color 0.5s ease-in-out;

    &:hover {
        color: ${hoverColor};
    }

    @media only screen and (min-width: 1200px) {
        font-size: 1.5rem;
        font-weight: normal;
        padding-top: 0.4rem;
    }
`

const Header = ({ theme }) => {
    const themeToggle = useTheme()
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    site
                }
            }
        }
    `)
    return (
        <header className="mb-12">
            <h1
                style={{
                    position: "absolute",
                    top: "5px",
                    left: "15px",
                    fontSize: ".5em",
                }}
            >
                <Link to="/">
                    <HeaderTitle>{data.site.siteMetadata.site}</HeaderTitle>
                </Link>
            </h1>
            <nav>
                <CustomLinkWrapper>
                    <Link to="/" activeClassName="underline">
                        <CustomLink>home</CustomLink>
                    </Link>
                    <Link to="/projects" activeClassName="underline">
                        <CustomLink>projects</CustomLink>
                    </Link>
                    <Link to="/posts" activeClassName="underline">
                        <CustomLink>posts</CustomLink>
                    </Link>
                    <Link to="/contact" activeClassName="underline">
                        <CustomLink>contact</CustomLink>
                    </Link>
                    <div
                        style={{
                            position: "absolute",
                            top: "10px",
                            right: "15px",
                        }}
                    >
                        <ThemeTogglerWrapper>
                            {theme.mode === "light" ? (
                                <Moon
                                    onClick={() => themeToggle.toggle()}
                                    style={{ color: "#333333" }}
                                />
                            ) : (
                                <Sun onClick={() => themeToggle.toggle()} />
                            )}
                        </ThemeTogglerWrapper>
                    </div>
                </CustomLinkWrapper>
            </nav>
        </header>
    )
}

export default withTheme(Header)
