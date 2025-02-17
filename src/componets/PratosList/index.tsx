import { useState } from 'react'
import Pratos from '../Pratos'
import { Button, PratosDescription, PratosImage, PratosTitle } from './styles'
import {
  Container,
  List,
  Modal,
  ModalContent,
  ModalContainer,
  CloseIcon
} from './styles'
import close from '../../asset/images/logos/close.jpg'

export type Props = {
  restaurant: Restaurant
}

export const priceFormat = (price: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price)
}

const PratosList = ({ restaurant }: Props) => {
  const [showModal, setShowModal] = useState(false)
  const [foodTitle, setfoodTitle] = useState('')
  const [foodDescription, setfoodDescription] = useState('')
  const [foodPhoto, setfoodPhoto] = useState('')
  const [foodPhotoAlt, setfoodPhotoAlt] = useState('')
  const [foodServe, setfoodServe] = useState('')
  const [foodPrice, setfoodPrice] = useState(0)

  return (
    <>
      <Container>
        <List>
          {restaurant.cardapio.map((food) => (
            <li
              key={food.id}
              onClick={() => {
                setShowModal(true)
                setfoodTitle(food.nome)
                setfoodDescription(food.descricao)
                setfoodServe(food.porcao)
                setfoodPrice(food.preco)
                setfoodPhotoAlt(food.nome)
                setfoodPhoto(food.foto)
              }}
            >
              <Pratos
                key={food.id}
                FoodPhoto={food.foto}
                FoodTitle={food.nome}
                FoodDescription={food.descricao}
                FoodPhotoAlt={food.nome}
              />
            </li>
          ))}
        </List>
      </Container>
      <Modal className={showModal ? 'visible' : ''}>
        <ModalContent>
          <PratosImage src={foodPhoto} alt={foodPhotoAlt} />
          <ModalContainer>
            <PratosTitle>{foodTitle}</PratosTitle>
            <PratosDescription>
              {foodDescription}
              <p>Serve: {foodServe}</p>
            </PratosDescription>
            <Button>Adicionar ao carrinho - {priceFormat(foodPrice)}</Button>
          </ModalContainer>
          <CloseIcon
            onClick={() => setShowModal(false)}
            src={close}
            alt="Icone de fechar"
          />
        </ModalContent>
        <div onClick={() => setShowModal(false)} className="overlay"></div>
      </Modal>
    </>
  )
}

export default PratosList
