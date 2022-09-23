import { createGlobalStyle } from 'styled-components'
import { AppRoutes } from './Routes'

const GlobalStyle = createGlobalStyle``

const App = () => {
  return (
    <>
      <GlobalStyle />
      <AppRoutes />
    </>
  )
}

export default App
