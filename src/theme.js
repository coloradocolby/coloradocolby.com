import theme from "styled-theming"

export const backgroundColor = theme("mode", {
    light: "#fafafa",
    dark: "#35353B",
})

export const textColor = theme("mode", {
    light: "#252525",
    dark: "#ffffff",
})

export const hoverColor = theme("mode", {
    light: "#484848",
    dark: "#d2d2d2",
})
