import { Link } from 'react-router-dom'
import { HeaderBar, Links, LinkItems, LinkCart, Logo } from './styled'
import logo from '../../asset/images/logos/logo.png'
import carrinho from '../../asset/images/logos/carrinho.png'

const Header = () => (
  <HeaderBar>
    <Links>
      <LinkItems>
        <Link to="/">Home</Link>
      </LinkItems>
    </Links>
    <Logo src={logo} alt="efood" />
    <LinkCart href="#">
      0-Producto(s)
      <img src={carrinho} alt="carrinho" />
    </LinkCart>
  </HeaderBar>
)

export default Header
