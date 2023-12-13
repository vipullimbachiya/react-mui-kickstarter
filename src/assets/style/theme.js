import { createTheme } from '@mui/material/styles'

const baseTheme = {}
export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    // primary: {
    //   main: '#3e79f7',
    //   default: '#1a3353',
    // },
  },
  ...baseTheme,
})
export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#121212',
      default: '#d6d7dc',
    },
  },
  ...baseTheme,
})
