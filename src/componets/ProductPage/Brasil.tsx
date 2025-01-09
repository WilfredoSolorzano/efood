import React from 'react'
import Product from '../Product'
import { Container, Nav, ProductGrid, ProductSection } from './styled'
import { ButtonContainer } from '../Buttom/styles'
import HeroDeBrasil from '../HeroDetails/HeroBrasil'
import Pratos from '../../model/Pratos'
import feijoada from '../../asset/images/pratos/brasil/feijoada.jpeg'
import picanha from '../../asset/images/pratos/brasil/picanha.jpeg'
import Mignon from '../../asset/images/pratos/brasil/Mignon2.jpg'
import Acaraje from '../../asset/images/pratos/brasil/acaraje.jpg'
import Brigadeiro from '../../asset/images/pratos/brasil/brigadero.jpeg'
import Pudim from '../../asset/images/pratos/brasil/Pudim.jpg'

const cardapio: Pratos[] = [
  {
    id: 1,
    title: 'Feijoada',
    description:
      'Um clássico da culinária brasileira, preparado com feijão preto, carnes defumadas e embutidos, acompanhado de arroz branco.',
    image: feijoada,
    infos: []
  },
  {
    id: 2,
    title: 'Picanha na Brasa',
    description:
      'Apreciada por sua suculência, a picanha é grelhada no ponto perfeito, servida com arroz, vinagrete e mandioca frita.',
    image: picanha,
    infos: []
  },
  {
    id: 3,
    title: 'Mignon Recheado',
    description:
      'O mignon recheado é um prato muito consumido na região central do Brasil com fetuccine verde e blend de queijos.',
    image: Mignon,
    infos: []
  },
  {
    id: 4,
    title: 'Acarajé',
    description:
      'O acarajé é uma especialidade gastronômica das culinárias africana e afro-brasileira. Bolinho de feijão-fradinho frito no azeite de dendê. ',
    image: Acaraje,
    infos: []
  },
  {
    id: 5,
    title: 'Brigadeiro',
    description:
      'Um doce feito com leite condensado, chocolate e manteiga, coberto com granulado.',
    image: Brigadeiro,
    infos: []
  },
  {
    id: 6,
    title: 'Pudim',
    description:
      'A sobremesa brasileira por excelência! Um pudim de leite macio, caramelizado na medida certa,encanta todos os paladares.',
    image: Pudim,
    infos: []
  }
]

const Brasil = () => {
  return (
    <div style={{ padding: '0px 30px' }}>
      <div>
        <HeroDeBrasil />
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

export default Brasil
