import React from 'react'
import Product from '../Product'
import {
  AddToCartButton,
  Container,
  Nav,
  ProductGrid,
  ProductSection
} from './styled'
import HeroDeBrasil from '../HeroDetails/HeroBrasil'
import Pratos from '../../model/Pratos'
import feijoada from '../../asset/images/pratos/brasil/feijoada.jpeg'
import picanha from '../../asset/images/pratos/brasil/picanha.jpeg'
import Mignon from '../../asset/images/Mignon .jpg'
import Acaraje from '../../asset/images/pratos/brasil/acaraje.jpg'
import Brigadeiro from '../../asset/images/pratos/brasil/brigadero.jpeg'
import Pudim from '../../asset/images/pratos/brasil/Pudim.jpg'

const cardapio: Pratos[] = [
  {
    id: 1,
    title: 'Feijoada',
    description:
      'Um clássico da culinária brasileira, preparado com feijão preto, carnes defumadas e embutidos, acompanhado de arroz branco, farofa, couve refogada e laranja. Uma combinação rica e saborosa que é a cara do Brasil.',
    infos: ['Aproveite', 'R$ 54,90'],
    image: feijoada,
    nota: '4.9'
  },
  {
    id: 2,
    title: 'Picanha na Brasa',
    description:
      'Apreciada por sua suculência, a picanha é grelhada no ponto perfeito, servida com arroz, vinagrete e mandioca frita. Um prato que celebra o melhor do churrasco brasileiro.',
    infos: ['R$ 74,20'],
    image: picanha,
    nota: '4.6'
  },
  {
    id: 3,
    title: 'Mignon Recheado',
    description:
      'O mignon recheado é um prato muito consumido na região central do Brasil com fetuccine verde e blend de queijos, alem de estar recheio com tomates secos e rúcula.',
    infos: ['R$ 62,80'],
    image: Mignon,
    nota: '4.8'
  },
  {
    id: 4,
    title: 'Acarajé',
    description:
      'O acarajé é uma especialidade gastronômica das culinárias africana e afro-brasileira. Bolinho de feijão-fradinho frito no azeite de dendê, recheado com vatapá, camarão seco e uma pitada de pimenta. Um verdadeiro tesouro da Bahia que traz tradição e sabor em cada mordida. ',
    infos: ['Oferta da semana', 'R$ 12,80'],
    image: Acaraje,
    nota: '4.0'
  },
  {
    id: 5,
    title: 'Brigadeiro',
    description:
      'Um doce irresistível feito com leite condensado, chocolate e manteiga, coberto com granulado. Cremoso e perfeito para fechar a refeição com chave de ouro.',
    infos: ['Sobremesa', 'R$ 37,50'],
    image: Brigadeiro,
    nota: '4.9'
  },
  {
    id: 6,
    title: 'Pudim',
    description:
      'A sobremesa brasileira por excelência! Um pudim de leite macio, caramelizado na medida certa, que derrete na boca e encanta todos os paladares.',
    infos: ['Sobremesa', 'R$ 32,10'],
    image: Pudim,
    nota: '4.9'
  }
]

const Brasil = () => {
  return (
    <div style={{ padding: '20px 16px', marginTop: '20px' }}>
      <div>
        <HeroDeBrasil />
      </div>

      <Nav>
        <h2>Cardápio Brasileiro</h2>
        <Container>
          <ProductGrid>
            {cardapio.map((prato) => (
              <ProductSection key={prato.id}>
                <Product
                  title={prato.title}
                  description={prato.description}
                  image={prato.image}
                  infos={prato.infos}
                  nota={prato.nota}
                  isProductPage={true}
                />
                <AddToCartButton>Adicionar ao carrinho</AddToCartButton>
              </ProductSection>
            ))}
          </ProductGrid>
        </Container>
      </Nav>
    </div>
  )
}

export default Brasil
