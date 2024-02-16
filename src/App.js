import './App.css'
import { CssBaseline, StyledEngineProvider } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import { useSelector } from 'react-redux'
import themes from './components/themes'
import MainLayout from './components/MainLayout'

function App() {
    const customization = useSelector((state) => state.customization)

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={themes(customization)}>
        <CssBaseline />
        <MainLayout />
      </ThemeProvider>
    </StyledEngineProvider>
  )
}

export default App
