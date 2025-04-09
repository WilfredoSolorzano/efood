import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Pedido } from '../../componets/PratosList'

type CartState = {
  items: Restaurant[]
  pedido: Pedido[]
  isOpen: boolean
  isCart: boolean
  isAddress: boolean
  isPayment: boolean
  isConfirmed: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false,
  isCart: true,
  isAddress: false,
  isPayment: false,
  isConfirmed: false,
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
      state.isCart = true
      state.isConfirmed = false
      state.isAddress = false
      state.isPayment = false
      state.pedido = []
    },
    startCheckout: (state) => {
      state.isCart = false
      state.isConfirmed = false
      state.isAddress = true
      state.isPayment = false
    },
    payment: (state) => {
      state.isConfirmed = false
      state.isAddress = false
      state.isPayment = true
      state.isCart = false
    },
    confirmed: (state) => {
      state.isConfirmed = true
      state.isAddress = false
      state.isPayment = false
      state.isCart = false
    },
    backtoCart: (state) => {
      state.isAddress = false
      state.isPayment = false
      state.isConfirmed = false
      state.isCart = true
    }
  }
})

export const {
  open,
  close,
  addItem,
  removeItem,
  closeAndFinish,
  startCheckout,
  payment,
  confirmed,
  backtoCart
} = cartSlice.actions
export default cartSlice.reducer
