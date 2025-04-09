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
  CartStage,
  EmptyCartMessage
} from './style'
import { RootReducer } from '../../store'
import { close, removeItem, startCheckout } from '../../store/reducers/cart'
import { priceFormat } from '../../util'
import Checkout from '../Checkout'

const Cart = () => {
  const { isOpen, pedido, isAddress, isCart } = useSelector(
    (state: RootReducer) => state.cart
  )
  const dispatch = useDispatch()

  const openCart = () => {
    dispatch(close())
  }

  const checkoutActive = () => {
    if (getTotalPrice() > 0) {
      dispatch(startCheckout())
    } else {
      alert('Não há itens no carrinho')
    }
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
          {isCart ? (
            <>
              {pedido.length > 0 ? (
                <>
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
                  <AddCartButton onClick={checkoutActive}>
                    Continuar com a entrega
                  </AddCartButton>
                </>
              ) : (
                <EmptyCartMessage>
                  Não há itens no carrinho ainda
                </EmptyCartMessage>
              )}
            </>
          ) : (
            <Checkout checkoutStart={isAddress} priceTotal={getTotalPrice()} />
          )}
        </CartStage>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
