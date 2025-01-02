import React from 'react'
import Product from '../Product'
import {
  AddToCartButton,
  Container,
  Nav,
  ProductGrid,
  ProductSection
} from './styled'
import HeroDePeru from '../HeroDetails/HeroPeru'
import Pratos from '../../model/Pratos'
import lomosaltado from '../../asset/images/pratos/peru/lomosaltado.jpg'
import ajidegallina from '../../asset/images/pratos/peru/AjideGallina.jpg'
import chaufa from '../../asset/images/pratos/peru/chaufa.jpg'
import Ceviche from '../../asset/images/ceviche.jpg'
import suspiro from '../../asset/images/pratos/peru/suspiro.jpg'
import alfajores from '../../asset/images/pratos/peru/alfajore.jpg'

const cardapio: Pratos[] = [
  {
    id: 1,
    title: 'Lomo saltado',
    description:
      'É um prato feito com carne bovina, ele faz parte da culinária chifa, que mistura as técnicas tradicionais chinesas com ingredientes peruanos. Além da carne, a receita leva tomates, cebolas, pimentões e o molho shoyu, que traz mais sabor ao prato. A pimenta aji amarillo, muito utilizada na culinária peruana em geral, também pode ser acrescentada. Faça seu pedido agora e embarque nessa viagem gastronômica!',
    infos: ['Melhor oferta', 'R$ 48,25'],
    image: lomosaltado,
    nota: '4.9'
  },
  {
    id: 2,
    title: 'Ají de Gallina',
    description:
      'Um prato cremoso e reconfortante feito com peito de frango desfiado em um molho à base de ají amarillo, pão e leite, servido com arroz branco e batatas cozidas. Uma delícia que aquece o coração!. Com entrega rápida e sabores autênticos, levamos o melhor do Peru até você. Faça seu pedido!',
    infos: ['R$ 37,92'],
    image: ajidegallina,
    nota: '4.6'
  },
  {
    id: 3,
    title: 'Arroz Chaufa',
    description:
      'A versão peruana do arroz frito, feito com tiras de frango ou carne, legumes frescos e temperos únicos, tudo salteado com molho de soja. Uma mistura saborosa de influências chinesas e peruanas.Faça seu pedido agora e embarque nessa viagem gastronômica!',
    infos: ['Coisa Boa', 'R$ 35,99'],
    image: chaufa,
    nota: '4.8'
  },
  {
    id: 4,
    title: 'Ceviche',
    description:
      'O prato mais icônico do Peru! Cubos de peixe fresco marinados no suco de limão, temperados com cebola roxa, pimenta e coentro, acompanhados de milho e batata-doce. Uma explosão de frescor e sabor. Com ingredientes frescos e um toque de paixão pela gastronomia peruana! Faça seu pedido agora',
    infos: ['Destaque da semana', 'R$ 40,22'],
    image: Ceviche,
    nota: '4.0'
  },
  {
    id: 5,
    title: 'Suspiro Limeño',
    description:
      'Uma sobremesa doce e delicada, feita com um creme à base de leite condensado e gemas, coberto com merengue levemente aromatizado com vinho do Porto. Um verdadeiro suspiro em cada colherada. Com entrega rápida e sabores autênticos, levamos o melhor do Peru até você. Faça seu pedido ',
    infos: ['Sobremesa', 'R$ 22,00'],
    image: suspiro,
    nota: '4.9'
  },
  {
    id: 6,
    title: 'Alfajores Peruanos',
    description:
      'É um biscoitos macios recheados com doce de leite e polvilhados com açúcar de confeiteiro, perfeitos para acompanhar um café ou chá. Preparados com ingredientes frescos e um toque de paixão. levamos o melhor do Peru até você. Faça seu pedido agora e embarque nessa viagem gastronômica!',
    infos: ['Sobremesa', 'Oferta Delisiosa', 'R$ 12,99'],
    image: alfajores,
    nota: '4.9'
  }
]

const Peru = () => {
  return (
    <div style={{ padding: '20px 16px', marginTop: '20px' }}>
      <div>
        <HeroDePeru />
      </div>

      <Nav>
        <h2>Cardápio Peruano</h2>
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

export default Peru
