import React from 'react'
import Loader from 'react-loaders'
import styled, { withTheme } from 'styled-components'

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const MyLoader = ({ theme }) => {
  return (
    <LoaderWrapper>
      <Loader
        type="line-scale-pulse-out-rapid"
        color={theme?.mode === 'dark' ? '#ffffff' : '#252525'}
        active
        style={{
          transition: 'all .5s ease-in-out',
        }}
      />
    </LoaderWrapper>
  )
}

export default withTheme(MyLoader)
