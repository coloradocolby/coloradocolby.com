import theme from 'styled-theming'

export const backgroundColor = theme('mode', {
  light: '#edf2f7',
  dark: '#4a5568',
})

export const textColor = theme('mode', {
  light: '#2d3748',
  dark: '#ffffff',
})
