import React from 'react'
import { useTheme } from '../contexts/ThemeContext'
import styled, { withTheme } from 'styled-components'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { Moon, Sun, GitMerge, File, MessageCircle } from 'react-feather'
import { ThemeTogglerWrapper } from './styled'
import { textColor } from '../theme'

const Ul = styled.ul`
  display: flex;
  margin: 0;
  justify-content: center;
`

const Li = styled.li`
  margin: 0.25em 0.5em;
  padding: 0.25em 0.5em;
  color: ${textColor};
  svg {
    stroke-width: 2.5px;
    width: 30px;
    height: 30px;
  }

  @media only screen and (min-width: 768px) {
    svg {
      width: 25px;
      height: 25px;
    }
  }
`

const HeaderTitle = styled.div`
  color: ${textColor};
  padding-top: 0.5rem;
  font-size: 1.125rem;
  font-weight: 500;
  transition: all 0.5s ease-in-out;
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
            <Link to={link}>
              <Li key={link}>{icon}</Li>
            </Link>
          ))}
          <ThemeTogglerWrapper>
            <Li onClick={() => themeToggle.toggle()}>
              {theme.mode === 'light' ? <Moon /> : <Sun />}
            </Li>
          </ThemeTogglerWrapper>
        </Ul>
      </nav>
    </header>
  )
}

export default withTheme(Header)
