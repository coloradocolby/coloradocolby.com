import 'prismjs/themes/prism-tomorrow.css' // for code highlighting
import React from 'react'
import { MyThemeProvider } from './src/contexts/theme.context'
import './src/styles/tailwind.css'

export const wrapRootElement = ({ element }) => (
  // put providers here
  <MyThemeProvider>{element}</MyThemeProvider>
)
