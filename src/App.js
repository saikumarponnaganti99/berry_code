import './App.css'
import Login from './components/Login'
import { CssBaseline, StyledEngineProvider } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import { useSelector } from 'react-redux'
import themes from './themes'

function App() {
    const customization = useSelector((state) => state.customization)

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={themes(customization)}>
        <CssBaseline />
        <Login />
      </ThemeProvider>
    </StyledEngineProvider>
  )
}

export default App
