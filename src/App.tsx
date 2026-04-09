import { BrowserRouter } from 'react-router-dom'
import { GlobalCss } from './styled'
import Rotas from './routes'
import { Provider } from 'react-redux'
import { store } from './store'
import { SpeedInsights } from '@vercel/speed-insights/react'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCss />
        <Rotas />
        <SpeedInsights />
      </BrowserRouter>
    </Provider>
  )
}

export default App
