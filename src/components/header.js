import React from 'react'
import { useTheme } from '../contexts/ThemeContext'
import styled, { withTheme } from 'styled-components'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { Moon, Sun, GitMerge, File, MessageCircle } from 'react-feather'
import { ThemeTogglerWrapper } from './styled'
import { textColor, hoverColor } from '../theme'

const Ul = styled.ul`
  color: ${textColor};
  display: flex;
  margin: 0;
  justify-content: center;
`

const Li = styled.li`
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  transition: color 0.5s ease-in-out;
  margin: 0 1em;

  &:hover {
    color: ${hoverColor};
  }

  @media only screen and (min-width: 1200px) {
    font-size: 1.5rem;
    font-weight: normal;
  }
`

const HeaderTitle = styled.div`
  color: ${textColor};
  padding: 0.5rem 0;
  font-size: 1.125rem;
  font-weight: 900;
  transition: all 0.5s ease-in-out;

  &:hover {
    color: ${hoverColor};
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
      <div className="text-center">
        <Link to="/">
          <HeaderTitle>{data.site.siteMetadata.site}</HeaderTitle>
        </Link>
      </div>
      <nav>
        <Ul>
          {[
            {
              link: '/projects',
              icon: <GitMerge />,
            },
            {
              link: '/posts',
              icon: <File />,
            },
            {
              link: '/contact',
              icon: <MessageCircle />,
            },
          ].map(({ link, icon }) => (
            <Li key={link}>
              <Link to={link}>{icon}</Link>
            </Li>
          ))}
          <Li>
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
          </Li>
        </Ul>
      </nav>
    </header>
  )
}

export default withTheme(Header)
