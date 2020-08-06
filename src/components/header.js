import { graphql, Link, useStaticQuery } from 'gatsby'
import React from 'react'
import { AtSign, Bookmark, GitMerge, Home, Moon, Sun } from 'react-feather'
import styled, { withTheme } from 'styled-components'
import { useTheme } from '../contexts/ThemeContext'
import { textColor } from '../theme'
import { ThemeTogglerWrapper } from './styled'

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
  transition: all 200ms ease;
`

const Header = ({ theme }) => {
  const { toggle } = useTheme()
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
      {/* <div className="text-center">
        <Link to="/">
          <HeaderTitle>{data.site.siteMetadata.site}</HeaderTitle>
        </Link>
      </div> */}
      <nav className="my-2">
        <Ul>
          {[
            {
              link: '/',
              icon: <Home />,
            },
            {
              link: '/projects',
              icon: <GitMerge />,
            },
            {
              link: '/posts',
              icon: <Bookmark />,
            },
            {
              link: '/contact',
              icon: <AtSign />,
            },
          ].map(({ link, icon }) => (
            <Link to={link}>
              <Li key={link}>{icon}</Li>
            </Link>
          ))}
          <ThemeTogglerWrapper>
            <Li onClick={() => toggle()}>
              {theme.mode === 'light' ? <Moon /> : <Sun />}
            </Li>
          </ThemeTogglerWrapper>
        </Ul>
      </nav>
    </header>
  )
}

export default withTheme(Header)
