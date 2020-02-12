import React from "react"
import { useTheme } from "../contexts/ThemeContext"
import styled, { withTheme } from "styled-components"
import { Link, graphql, useStaticQuery } from "gatsby"
import headerStyles from "./header.module.scss"
import { Moon, Sun } from "react-feather"
import { ThemeTogglerWrapper, HeaderTitle } from "./styled"
import { textColor, hoverColor } from "../theme"

const CustomLinkWrapper = styled.div`
    display: flex;
    margin: 0;
    padding-top: 2rem;
    justify-content: space-between;

    @media only screen and (min-width: 1000px) {
        padding: 0;
        justify-content: space-between;
    }
`

const CustomLink = styled.div`
    color: ${textColor};
    font-size: 1rem;
    padding-top: 1rem;
    font-weight: bold;
    text-align: center;
    transition: color 0.5s ease-in-out;

    &:hover {
        color: ${hoverColor};
    }

    @media only screen and (min-width: 1000px) {
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
                    author
                    site
                }
            }
        }
    `)
    return (
        <header className={headerStyles.header}>
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
                    <Link to="/" activeClassName={headerStyles.activeNavItem}>
                        <CustomLink>home</CustomLink>
                    </Link>
                    <Link
                        to="/projects/"
                        activeClassName={headerStyles.activeNavItem}
                    >
                        <CustomLink>projects</CustomLink>
                    </Link>
                    <Link
                        to="/blog/"
                        activeClassName={headerStyles.activeNavItem}
                    >
                        <CustomLink>blog</CustomLink>
                    </Link>
                    <Link
                        to="/contact/"
                        activeClassName={headerStyles.activeNavItem}
                    >
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
                                    style={{ color: "black" }}
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
