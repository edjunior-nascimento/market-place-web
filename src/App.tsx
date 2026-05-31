import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import RouterApp from './router'
import theme from './theme'
import { BrowserRouter } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';



export default function App() {
  return (

    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <RouterApp />
      </BrowserRouter>
    </ThemeProvider>
  )
}