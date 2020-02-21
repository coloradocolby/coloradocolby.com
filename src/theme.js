import theme from "styled-theming"

export const backgroundColor = theme("mode", {
    light: "#EFF0EB",
    dark: "#35353B",
})

export const textColor = theme("mode", {
    light: "#252525",
    dark: "#edf2f7",
})

export const hoverColor = theme("mode", {
    light: "#484848",
    dark: "#d2d2d2",
})
