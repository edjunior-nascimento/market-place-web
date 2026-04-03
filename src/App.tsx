import './App.css'
import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import RouterApp from './router'
import theme from './theme'



export default function App() {
  return (

    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterApp />
    </ThemeProvider>
  )
}