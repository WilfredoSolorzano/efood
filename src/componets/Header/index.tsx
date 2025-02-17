import logo from '../../asset/images/logos/logo.png'
import Carrinho from '../../asset/images/logos/carrinho.png'
import { HeaderStyle, Branding, LinkRestaurantes, TextCart } from './styles'

const Header = () => {
  return (
    <HeaderStyle>
      <div className="container">
        <LinkRestaurantes href="/">Restaurantes</LinkRestaurantes>
        <Branding src={logo} alt="Logo do restaurante" />
        <TextCart>
          0 produto(s) no carrinho
          <img src={Carrinho} alt="Ícone do carrinho" />
        </TextCart>
      </div>
    </HeaderStyle>
  )
}

export default Header
