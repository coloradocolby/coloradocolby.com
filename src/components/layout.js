import React from 'react'
import styled, { withTheme } from 'styled-components'
// import layoutStyles from "./layout.module.scss"
import { backgroundColor } from '../theme'
import Footer from './footer'
import Header from './header'

const Main = styled.main`
  background: ${backgroundColor};
  transition: all 200ms ease;
  overflow-x: hidden;
  overflow-y: auto;
`

const SVG_CONFIG = {
  SIZE: '700px',
  DARK: '#26272d',
  LIGHT: '#e0e0e0',
}

const SVG = styled.svg`
  height: ${SVG_CONFIG.SIZE};
  flex: 0 0 auto;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    overflow: hidden;
    padding-bottom: 0;
  }
`

const ShiftUp = styled.div`
  margin-top: -${SVG_CONFIG.SIZE};
`

const Layout = props => {
  if (props.theme?.mode) {
    return (
      <Main>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            // overflow: "hidden",
          }}
        >
          <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4000 600">
            <path
              style={{
                fill: `${
                  props.theme.mode === 'light'
                    ? SVG_CONFIG.LIGHT
                    : SVG_CONFIG.DARK
                }`,
                transition: 'all 200ms ease',
              }}
              className="curve"
              d="M.5.5v508s364,107,996,92S2139,335,3010,297s991,54,991,54L4000.5.5Z"
            />
          </SVG>
        </div>

        <ShiftUp>
          <div className="min-h-screen flex flex-col px-10 max-w-screen-md my-0 mx-auto">
            <Header />
            <div className="flex-grow">{props.children}</div>
            <Footer />
          </div>
        </ShiftUp>
      </Main>
    )
  } else {
    return null
  }
}

export default withTheme(Layout)
