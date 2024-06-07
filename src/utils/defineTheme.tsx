import { ThemeOptions } from "@mui/material"
import { createTheme } from "@mui/material/styles"
import { deepmerge } from "@mui/utils"

const colorPallet = {
    lloydsGreen: '#086c4c',
    softRed: '#f50057',
    white: '#FFF',
    black: '#000',
}

const defaultStyles: ThemeOptions = {
    breakpoints: {
        values: {
            xs: 400,
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1920,
        },
    },
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: colorPallet.lloydsGreen,
                    backgroundBlendMode: 'color'
                }
            }
        }
    }
}

export default function defineTheme(prefferedTheme: string): ThemeOptions {

    if (prefferedTheme === 'dark') {
        const darkTheme: ThemeOptions = {
            palette: {
                mode: 'dark',
                primary: {
                    main: colorPallet.lloydsGreen,
                },
                secondary: {
                    main: colorPallet.softRed,
                },
            }
        } 
    return (createTheme(deepmerge(defaultStyles, darkTheme)))
    } else {
        const lightTheme: ThemeOptions = {
            palette: {
                mode: 'light',
                primary: {
                    main: colorPallet.lloydsGreen,
                },
                secondary: {
                    main: colorPallet.softRed,
                },
            }
        }
        return (createTheme(deepmerge(defaultStyles, lightTheme)))
    }
}