import React from 'react'
import Product from '../Product'
import { Container, Nav, ProductGrid, ProductSection } from './styled'
import { ButtonContainer } from '../Buttom/styles'
import HeroDeColombia from '../HeroDetails/HeroColombia'
import Pratos from '../../model/Pratos'
import ajiaco from '../../asset/images/pratos/colombia/ajiaco.jpg'
import lechona from '../../asset/images/pratos/colombia/Lechona.jpg'
import tamal from '../../asset/images/pratos/colombia/tamal.jpeg'
import arepa from '../../asset/images/pratos/colombia/arepa.jpg'
import Paisa from '../../asset/images/pratos/colombia/BandejaPaisamin.jpg'
import flan from '../../asset/images/pratos/colombia/flan.jpeg'

const cardapio: Pratos[] = [
  {
    id: 1,
    title: 'Ajiaco colombiano',
    description:
      'O ajiaco colombiano é feito com frango, diferentes tipos de batata, cebola, espiga e creme de leite, alcaparras, abacate, arroz.',
    image: ajiaco,
    infos: []
  },
  {
    id: 2,
    title: 'Lechona',
    description:
      'Prato tradicional colombiano que consiste em um porco inteiro assado e recheado com cebola, ervilha, arroz, ervas frescas e temperos diversos.',
    image: lechona,
    infos: []
  },
  {
    id: 3,
    title: 'Tamale Tolimense',
    description:
      'Comtem uma massa gerealmente recheados com carne, principalmente porco e frango, mas alguns deles têm linguiça, bacon, berinjela.',
    image: tamal,
    infos: []
  },
  {
    id: 4,
    title: 'Arepas recheadas',
    description:
      'Saõ pães feitos de milho e servidos com recheios tradicionais na Colômbia e na Venezuela, com diversos ingredientes. ',
    image: arepa,
    infos: []
  },
  {
    id: 5,
    title: 'Bandeja Paisa',
    description:
      'reúne o melhor da culinária da Colômbia: arroz, feijão, arepas, torresmo e mais. É uma refeição  que reflete a riqueza da culinária de Antioquia ',
    image: Paisa,
    infos: []
  },
  {
    id: 6,
    title: 'Flan de Arequipe',
    description:
      'É uma sobremesa tradicional colombiana, famosa por sua textura cremosa e sabor irresistível. Feito com ovos, leite e arequipe.',
    image: flan,
    infos: []
  }
]

const Brasil = () => {
  return (
    <>
      <div>
        <HeroDeColombia />
      </div>
      <Nav>
        <Container>
          <ProductGrid>
            {cardapio.map((prato) => (
              <ProductSection key={prato.id}>
                <Product
                  title={prato.title}
                  description={prato.description}
                  image={prato.image}
                  isProductPage={true}
                  infos={[]}
                  customClass="context-card"
                />
                <ButtonContainer>Adicionar ao carrinho</ButtonContainer>
              </ProductSection>
            ))}
          </ProductGrid>
        </Container>
      </Nav>
    </>
  )
}

export default Brasil
