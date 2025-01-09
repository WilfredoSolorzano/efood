import React from 'react'
import Product from '../Product'
import { Container, Nav, ProductGrid, ProductSection } from './styled'
import HeroDeMexico from '../HeroDetails/HeroMexico'
import Pratos from '../../model/Pratos'
import pozole from '../../asset/images/pratos/mexico/pozole.jpg'
import ChilesRellenos from '../../asset/images/pratos/mexico/ChilesRellenos.jpg'
import enchilada from '../../asset/images/pratos/mexico/enchiladasverdes.jpg'
import Burrito from '../../asset/images/pratos/mexico/burritomexicanomini.jpeg'
import churros from '../../asset/images/pratos/mexico/churros.png'
import tresleches from '../../asset/images/pratos/mexico/tresleche.jpg'
import { ButtonContainer } from '../Buttom/styles'

const cardapio: Pratos[] = [
  {
    id: 1,
    title: 'Pozole Rojo',
    description:
      'Uma tradicional sopa mexicana com carne de porco, milho hominy e um caldo levemente picante, repolho, rabanete e limão.',
    infos: [],
    image: pozole
  },
  {
    id: 2,
    title: 'Chiles Rellenos',
    description:
      'O prato é basicamente pimentões recheados com queijo ou carne, empanados e fritos, acompanhados de molho de tomate caseiro.',
    infos: [],
    image: ChilesRellenos
  },
  {
    id: 3,
    title: 'Enchiladas Verdes',
    description:
      'É um prato típico mexicano feito com tortilha de milho, banhada em molho, picante ou não, utilizando pimenta em seu preparo.',
    infos: [],
    image: enchilada
  },
  {
    id: 4,
    title: 'Burrito Mexicano',
    description:
      'O burrito é uma refeição preparada com tortilhas de farinha, enroladas em formato cilíndrico com feijão frito.',
    infos: [],
    image: Burrito
  },
  {
    id: 5,
    title: 'Churros com Doce de Leite',
    description:
      'Uma sobremesa clássica que encanta a todos! Nossos churros são preparados com uma massa levemente crocante por fora e macia.',
    infos: [],
    image: churros
  },
  {
    id: 6,
    title: 'Tres Leches',
    description:
      'O Tres Leches é um bolo incrivelmente macio e úmido, embebido em uma combinação deliciosa de três tipos de leite.',
    infos: [],
    image: tresleches
  }
]

const Mexico = () => {
  return (
    <div style={{ padding: '0px 30px' }}>
      <div>
        <HeroDeMexico />
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

export default Mexico
