import React from 'react'
import { useTheme } from '../contexts/ThemeContext'
import styled, { withTheme } from 'styled-components'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { Moon, Sun } from 'react-feather'
import { ThemeTogglerWrapper, HeaderTitle } from './styled'
import { textColor, hoverColor } from '../theme'

const Ul = styled.ul`
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

const Li = styled.li`
  font-size: 1rem;
  padding-top: 1rem;
  font-weight: bold;
  text-align: center;
  transition: color 0.5s ease-in-out;

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
      <div
        style={{
          position: 'absolute',
          top: '5px',
          left: '15px',
          fontSize: '.5em',
        }}
      >
        <Link to="/">
          <HeaderTitle>{data.site.siteMetadata.site}</HeaderTitle>
        </Link>
      </div>
      <nav>
        <Ul>
          <Li>
            <Link to="/projects" activeClassName="underline">
              projects
            </Link>
          </Li>

          <Li>
            <Link to="/posts" activeClassName="underline">
              posts
            </Link>
          </Li>
          <Li>
            <Link to="/contact" activeClassName="underline">
              contact
            </Link>
          </Li>

          <div
            style={{
              position: 'absolute',
              top: '10px',
              right: '15px',
            }}
            aria-hidden="true"
          >
            <ThemeTogglerWrapper>
              {theme.mode === 'light' ? (
                <Moon
                  onClick={() => themeToggle.toggle()}
                  style={{ color: '#333333' }}
                />
              ) : (
                <Sun onClick={() => themeToggle.toggle()} />
              )}
            </ThemeTogglerWrapper>
          </div>
        </Ul>
      </nav>
    </header>
  )
}

export default withTheme(Header)
