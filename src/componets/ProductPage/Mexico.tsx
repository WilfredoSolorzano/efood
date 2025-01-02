import React from 'react'
import Product from '../Product'
import {
  AddToCartButton,
  Container,
  Nav,
  ProductGrid,
  ProductSection
} from './styled'
import HeroDeMexico from '../HeroDetails/HeroMexico'
import Pratos from '../../model/Pratos'
import pozole from '../../asset/images/pratos/mexico/pozole.jpg'
import ChilesRellenos from '../../asset/images/pratos/mexico/ChilesRellenos.jpg'
import enchilada from '../../asset/images/pratos/mexico/enchiladasverdes.jpg'
import Burrito from '../../asset/images/burritomexicano.jpeg'
import churros from '../../asset/images/pratos/mexico/churros.png'
import tresleches from '../../asset/images/pratos/mexico/tresleche.jpg'

const cardapio: Pratos[] = [
  {
    id: 1,
    title: 'Pozole Rojo',
    description:
      'Peça já o melhor da culinária mexicana no conforto da sua casa! Uma tradicional sopa mexicana com carne de porco, milho hominy e um caldo levemente picante, acompanhada de repolho, rabanete e limão.entrega rápida e segura, direto para o conforto da sua casa. Peça agora e sinta os sabores vibrantes do México!',
    infos: ['Destaque!', 'R$ 36,89'],
    image: pozole,
    nota: '4.9'
  },
  {
    id: 2,
    title: 'Chiles Rellenos',
    description:
      'É um prato representativo da culinária mexicana que remete às cores da bandeira pelos ingredientes com que é apresentado, o prato é basicamente pimentões recheados com queijo ou carne, empanados e fritos, acompanhados de molho de tomate caseiro. Peça agora!',
    infos: ['R$ 36,89'],
    image: ChilesRellenos,
    nota: '4.6'
  },
  {
    id: 3,
    title: 'Enchiladas Verdes',
    description:
      'É um prato típico mexicano feito com tortilha de milho, banhada em molho, picante ou não, utilizando pimenta em seu preparo. Alem disso são recheadas com frango desfiado, cobertas com molho verde à base de tomatillos e queijo derretido, servidas com arroz e feijão. Tudo isso com entrega rápida e segura, direto para o conforto da sua casa. Peça agora!',
    infos: ['Oferta especial', 'R$ 29,99'],
    image: enchilada,
    nota: '4.8'
  },
  {
    id: 4,
    title: 'Burrito Mexicano',
    description:
      'O burrito é uma refeição preparada com tortilhas de farinha, enroladas em formato cilíndrico com feijão frito. Os recheios incluem ingredientes como arroz, feijão, alface, tomates, salsa, guacamole, queijo, creme e vegetais, o que se distingue da variante mexicana do prato preenchida com carne e feijão. Entrega rápida e segura, peça agora! ',
    infos: ['Descubra mexico!', 'R$ 25,50'],
    image: Burrito,
    nota: '4.0'
  },
  {
    id: 5,
    title: 'Churros com Doce de Leite',
    description:
      'Uma sobremesa clássica que encanta a todos! Nossos churros são preparados com uma massa levemente crocante por fora e macia por dentro, fritos até atingirem o dourado perfeito. Finalizados com uma camada de açúcar e canela, são acompanhados por um irresistível doce de leite cremoso para mergulhar. Peça agora e desfrute dessa delícia tradicional mexicana!',
    infos: ['Sobremesa', 'R$ 11,99'],
    image: churros,
    nota: '4.9'
  },
  {
    id: 6,
    title: 'Tres Leches',
    description:
      'O Tres Leches é um bolo incrivelmente macio e úmido, embebido em uma combinação deliciosa de três tipos de leite: leite integral, creme de leite e leite condensado. Coberto com chantilly leve e decorado com frutas frescas ou canela, é uma explosão de sabor em cada pedaço. Peça agora e experimente essa iguaria irresistível!',
    infos: ['Melhor da semana', 'R$ 20,18'],
    image: tresleches,
    nota: '4.9'
  }
]

const Mexico = () => {
  return (
    <div style={{ padding: '20px 16px', marginTop: '20px' }}>
      <div>
        <HeroDeMexico />
      </div>

      <Nav>
        <h2>Cardápio Mexicano</h2>
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

export default Mexico
