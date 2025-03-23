import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Pedido } from '../../componets/PratosList'

type CartState = {
  items: Restaurant[]
  pedido: Pedido[]
  isOpen: boolean
  isCart: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false,
  isCart: true,
  pedido: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Pedido>) => {
      const p = state.pedido.find((p) => p.id === action.payload.id)

      state.pedido.push(action.payload)

      if (p) {
        alert('Pedido já está no carrinho')
      }
    },
    removeItem: (state, action: PayloadAction<number>) => {
      state.pedido = state.pedido.filter((p) => p.id !== action.payload)
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    },
    closeAndFinish: (state) => {
      state.isOpen = false
      state.pedido = []
    }
  }
})

export const { open, close, addItem, removeItem, closeAndFinish } =
  cartSlice.actions
export default cartSlice.reducer
