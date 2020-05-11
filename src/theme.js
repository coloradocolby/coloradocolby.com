import theme from 'styled-theming'

export const backgroundColor = theme('mode', {
  light: '#e9e9e9',
  dark: '#29292f',
})

export const textColor = theme('mode', {
  light: '#333333',
  dark: '#edf2f7',
})
