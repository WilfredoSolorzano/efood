import React from 'react'
import Product from '../Product'
import { Container, Nav, ProductGrid, ProductSection } from './styled'
import HeroDeItalia from '../HeroDetails/HeroDeItalia'
import Pratos from '../../model/Pratos'
import Fettuccine from '../../asset/images/pratos/Italia/Fettucine.jpg'
import Ravioli from '../../asset/images//pratos/Italia/Ravioli.jpg'
import Margherita from '../../asset/images//pratos/Italia/margherita.jpg'
import quatroQuijo from '../../asset/images/pratos/Italia/quattro.jpg'
import RisotoLimao from '../../asset/images/pratos/Italia/risotosiciliano.jpg'
import cogumelo from '../../asset/images/pratos/Italia/cogumelo.jpeg'
import { ButtonContainer } from '../Buttom/styles'

const cardapio: Pratos[] = [
  {
    id: 1,
    title: 'Fettuccine Alfredo',
    description:
      'É um prato feito de fettuccine com queijo parmesão e manteiga. O queijo derrete, formando uma cobertura leve e rica.',
    infos: [],
    image: Fettuccine
  },
  {
    id: 2,
    title: 'Ravioli recheado com ricota e espinafre',
    description:
      'O Ravioli recheado com ricota e espinafre é um clássico da cozinha italiana, servido com um molho de tomate rústico.',
    infos: [],
    image: Ravioli
  },
  {
    id: 3,
    title: 'Margherita',
    description:
      'A margherita é um tipo de pizza tradicional de Nápoles,feita com molho de tomate, mozzarella fresca e folhas de manjericão.',
    infos: [],
    image: Margherita
  },
  {
    id: 4,
    title: 'Quattro Formaggi',
    description:
      'É uma variante da pizza com quatro queijos italianos, composto por quijos mussarela, gorgonzola, fontina e parmesão.',
    infos: [],
    image: quatroQuijo
  },
  {
    id: 5,
    title: 'Risoto de Limão Siciliano',
    description:
      'E uma receita sofisticada e refrescante que combina a cremosidade característica do risoto com o toque cítrico do limão siciliano.',
    infos: [],
    image: RisotoLimao
  },
  {
    id: 6,
    title: 'Risoto de Cogumelos',
    description:
      'É uma ótima forma de unir os sabores e aromas dos cogumelos à cremosidade e maciez do arroz arbóreo cozido com  cogumelos.',
    infos: [],
    image: cogumelo
  }
]

const Italia = () => {
  return (
    <>
      <div>
        <HeroDeItalia />
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

export default Italia
