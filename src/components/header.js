import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import headerStyles from "./header.module.scss"

const Header = () => {
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
            <h1>
                <Link to="/" className={headerStyles.title}>
                    {data.site.siteMetadata.site}
                </Link>
            </h1>
            <nav>
                <ul className={headerStyles.navList}>
                    <li>
                        <Link
                            to="/"
                            className={headerStyles.navItem}
                            activeClassName={headerStyles.activeNavItem}
                        >
                            home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/projects"
                            className={headerStyles.navItem}
                            activeClassName={headerStyles.activeNavItem}
                        >
                            projects
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/blog"
                            className={headerStyles.navItem}
                            activeClassName={headerStyles.activeNavItem}
                        >
                            blog
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/contact"
                            className={headerStyles.navItem}
                            activeClassName={headerStyles.activeNavItem}
                        >
                            contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default Header
