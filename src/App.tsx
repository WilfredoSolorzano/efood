import { BrowserRouter as Router, useLocation } from 'react-router-dom'
import Hero from './componets/Hero'
import { GlobalCss } from './styled'
import Carousel from './componets/Carrousel'
import Footer from './Footer'
import Banner from './componets/Banner'
import { useEffect } from 'react'
import Rotas from './Rotas'

const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation()
  const isProductDetailsPage = location.pathname.startsWith('/product-details')

  return (
    <>
      <GlobalCss />
      {isProductDetailsPage && <Banner />}
      {!isProductDetailsPage && <Hero />}
      {!isProductDetailsPage && <Carousel />}
      {children}
      <Footer />
    </>
  )
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Rotas />
      </Layout>
    </Router>
  )
}

export default App
