import { useDispatch, useSelector } from 'react-redux'
import {
  Overlay,
  CartContainer,
  AddCartButton,
  Sidebar,
  ItemCart,
  ImageItem,
  InfosItem,
  DeleteItemButton,
  InfosCart,
  CartStage
} from './style'
import { RootReducer } from '../../store'
import { close, removeItem } from '../../store/reducers/cart'
import { priceFormat } from '../PratosList'

const Cart = () => {
  const { isOpen, pedido } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const openCart = () => {
    dispatch(close())
  }

  const getTotalPrice = () => {
    return pedido.reduce((acumulator, actualValue) => {
      return (acumulator += actualValue.preco)
    }, 0)
  }

  const itemRemovido = (id: number) => {
    if (typeof id === 'number') {
      dispatch(removeItem(id))
    } else {
      console.error('O ID não é número:', id)
    }
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={openCart} />
      <Sidebar>
        <CartStage>
          <ul>
            {pedido.map((p) => (
              <ItemCart key={p.id}>
                <ImageItem src={p.foto} alt="" />
                <InfosItem>
                  <h3>{p.nome}</h3>
                  <span>{priceFormat(p.preco)}</span>
                </InfosItem>
                <DeleteItemButton
                  type="button"
                  onClick={() => itemRemovido(p.id)}
                />
              </ItemCart>
            ))}
          </ul>
          <InfosCart>
            <p>Valor total</p>
            <span>{priceFormat(getTotalPrice())}</span>
          </InfosCart>
          <AddCartButton
            onClick={() => alert('Função deshabilitada temporalmente')}
          >
            Continuar com a entrega
          </AddCartButton>
        </CartStage>
      </Sidebar>
    </CartContainer>
  )
}
export default Cart
