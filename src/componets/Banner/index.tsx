import { Link } from 'react-router-dom'
import { HeaderBar, Links, LinkItems, LinkCart, Logo } from './styled'
import logo from '../../asset/images/logos/logo.png'

const Header = () => (
  <HeaderBar>
    <Links>
      <LinkItems>
        <Link to="/">Restaurantes</Link>
      </LinkItems>
    </Links>
    <Logo src={logo} alt="efood" />
    <LinkCart href="#">0-producto(s) no carrinho</LinkCart>
  </HeaderBar>
)

export default Header
