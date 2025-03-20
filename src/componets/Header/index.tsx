import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { open } from '../../store/reducers/cart'
import logo from '../../asset/images/logos/logo.png'
import Carrinho from '../../asset/images/logos/carrinho.png'
import { HeaderStyle, Branding, LinkRestaurantes, TextCart } from './styles'

const Header = () => {
  const dispatch = useDispatch()
  const { pedido } = useSelector((state: RootReducer) => state.cart)
  const openCart = () => {
    dispatch(open())
  }
  return (
    <HeaderStyle>
      <div className="container">
        <LinkRestaurantes href="/">Restaurantes</LinkRestaurantes>
        <Branding src={logo} alt="Logo do restaurante" />
        <TextCart onClick={openCart}>
          {pedido.length} produto(s) no carrinho
          <img src={Carrinho} alt="Ícone do carrinho" />
        </TextCart>
      </div>
    </HeaderStyle>
  )
}

export default Header
