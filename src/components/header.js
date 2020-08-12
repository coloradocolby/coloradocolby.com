import { Link } from 'gatsby'
import React from 'react'
import { AtSign, Bookmark, GitMerge, Home, Moon, Sun } from 'react-feather'
import styled, { withTheme } from 'styled-components'
import { useTheme } from '../contexts/ThemeContext'
import { backgroundColor, textColor } from '../theme'

const Ul = styled.ul`
  display: flex;
  margin: 0;
  justify-content: center;
`

const Li = styled.li`
  margin: 0.25em;
  padding: 0.5em;
  transition: background 200ms ease;
  color: ${textColor};
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    background: ${backgroundColor};
  }

  svg {
    stroke-width: 2.5px;
    width: 20px;
    height: 20px;
  }

  }
`

const Header = ({ theme }) => {
  const { toggle } = useTheme()

  return (
    <header className="mb-12">
      <nav className="my-2">
        <Ul>
          {[
            {
              link: '/',
              icon: <Home />,
            },
            {
              link: '/projects/',
              icon: <GitMerge />,
            },
            {
              link: '/posts/',
              icon: <Bookmark />,
            },
            {
              link: '/contact/',
              icon: <AtSign />,
            },
          ].map(({ link, icon }) => (
            <Link
              to={link}
              key={link}
              activeClassName={`active-link-${theme?.mode}`}
            >
              <Li>{icon}</Li>
            </Link>
          ))}
          <Li onClick={() => toggle()}>
            {theme.mode === 'light' ? <Moon /> : <Sun />}
          </Li>
        </Ul>
      </nav>
    </header>
  )
}

export default withTheme(Header)
