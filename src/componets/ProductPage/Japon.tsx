import React from 'react'
import Product from '../Product'
import { Container, Nav, ProductGrid, ProductSection } from './styled'
import HeroDeJapon from '../HeroDetails/HeroDeJapon'
import Pratos from '../../model/Pratos'
import Sushi from '../../asset/images/pratos/Japon/Sushimin.png'
import Combinado from '../../asset/images/pratos/Japon/Combinado.jpg'
import Yakis from '../../asset/images/pratos/Japon/yakisoba.jpeg'
import tempura from '../../asset/images/pratos/Japon/tempura.jpeg'
import Temppa from '../../asset/images/pratos/Japon/teppanyaki.gif'
import katsu from '../../asset/images/pratos/Japon/katsu.jpeg'
import { ButtonContainer } from '../Buttom/styles'

const cardapio: Pratos[] = [
  {
    id: 1,
    title: 'Sushi japonês',
    description:
      'O verdadeiro sushi japonês em apenas quatro componentes: arroz cozido, vinagre de arroz, algas marinhas e peixe ou vegetais frescos crus.',
    infos: [],
    image: Sushi
  },
  {
    id: 2,
    title: 'Combinado Especial',
    description:
      'Este prato oferece uma seleção variada e cuidadosamente preparada de nigiris, com fatias frescas de peixe sobre arroz temperado.',
    infos: [],
    image: Combinado
  },
  {
    id: 3,
    title: 'Yakissoba de Frango e Legumes',
    description:
      'Uma combinação irresistível de noodles salteados no wok com frango macio e suculento, acompanhados de legumes.',
    infos: [],
    image: Yakis
  },
  {
    id: 4,
    title: 'Tempurá de Camarão',
    description:
      'Uma iguaria japonesa que combina leveza e sabor. Camarões suculentos são envoltos em uma massa delicada e crocante.',
    infos: [],
    image: tempura
  },
  {
    id: 5,
    title: 'Teppanyaki de Salmão',
    description:
      'Delicie-se com uma verdadeira obra-prima da culinária japonesa! Filé de salmão fresco, grelhado à perfeição em chapa quente.',
    infos: [],
    image: Temppa
  },
  {
    id: 6,
    title: 'Katsu Don',
    description:
      'Uma tigela de arroz coberta com filé de porco empanado e frito, com um ovo cremoso e molho que combina o doce e o salgado.',
    infos: [],
    image: katsu
  }
]

const Japon = () => {
  return (
    <div style={{ padding: '0px 30px' }}>
      <div>
        <HeroDeJapon />
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
    </div>
  )
}

export default Japon
