import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from 'react-router-dom'
import Hero from './componets/Hero'
import { GlobalCss } from './styled'
import Home from './pages/Home'
import Carousel from './componets/Carrousel'
import Footer from './Footer'
import Banner from './componets/Banner'
import PeruDetails from './pages/Peru'
import ColombiaDetails from './pages/Colombia'
import MexicoDetails from './pages/Mexico'
import BrasilDetails from './pages/Brasil'
import ItaliaDetails from './pages/Italia'
import JaponDetails from './pages/Japon'

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
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product-details/peru" element={<PeruDetails />} />
          <Route
            path="/product-details/colombia"
            element={<ColombiaDetails />}
          />
          <Route path="/product-details/mexico" element={<MexicoDetails />} />
          <Route path="/product-details/brasil" element={<BrasilDetails />} />
          <Route path="/product-details/italia" element={<ItaliaDetails />} />
          <Route path="/product-details/japon" element={<JaponDetails />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
