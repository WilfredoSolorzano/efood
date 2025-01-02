import React from 'react'
import Product from '../Product'
import {
  AddToCartButton,
  Container,
  Nav,
  ProductGrid,
  ProductSection
} from './styled'
import HeroDeItalia from '../HeroDetails/HeroDeItalia'
import Pratos from '../../model/Pratos'
import Fettuccine from '../../asset/images/pratos/Italia/Fettucine.jpg'
import Ravioli from '../../asset/images//pratos/Italia/Ravioli.jpg'
import Margherita from '../../asset/images//pratos/Italia/margherita.jpg'
import quatroQuijo from '../../asset/images/pratos/Italia/quattro.jpg'
import RisotoLimao from '../../asset/images/pratos/Italia/risotosiciliano.jpg'
import cogumelo from '../../asset/images/pratos/Italia/cogumelo.jpeg'

const cardapio: Pratos[] = [
  {
    id: 1,
    title: 'Fettuccine Alfredo',
    description:
      'É um prato feito de fettuccine com queijo parmesão e manteiga. À medida que o queijo derrete, ele emulsifica os líquidos para formar uma cobertura leve e rica sobre a massa.Peça agora e viva essa experiência gastronômica única!',
    infos: ['Massas Caseiras', 'R$ 45,20'],
    image: Fettuccine,
    nota: '4.9'
  },
  {
    id: 2,
    title: 'Ravioli recheado com ricota e espinafre',
    description:
      'O Ravioli recheado com ricota e espinafre é um clássico da cozinha italiana, servido com um molho de tomate rústico ou um leve molho de manteiga e sálvia, o ravioli oferece uma combinação perfeita de texturas: a suavidade do recheio contrasta com a leve firmeza da massa. É um prato que encanta tanto pela simplicidade quanto pelo requinte, ideal para quem aprecia uma refeição clássica e reconfortante',
    infos: ['Massas Caseiras', 'R$ 35,82'],
    image: Ravioli,
    nota: '4.6'
  },
  {
    id: 3,
    title: 'Margherita',
    description:
      'A margherita é um tipo de pizza tradicional de Nápoles,feita com molho de tomate, mozzarella fresca e folhas de manjericão, Os ingredientes usados foram escolhidos de forma que as cores fizessem referência à bandeira da Itália: branco representado pela mozarela Fior di Latte, verde pelo manjericão e vermelho pelo molho de tomates (a pizza original não leva tomate em sua composição, como foi adotada pelo mundo.',
    infos: ['Pizzas Deliciosas', 'P/ R$ 35,82', 'M/R$ 55,22', 'G/ R$ 72,00'],
    image: Margherita,
    nota: '4.8'
  },
  {
    id: 4,
    title: 'Quattro Formaggi',
    description:
      'É uma variante da pizza com quatro queijos italianos, composto por quijos mussarela, gorgonzola, fontina e parmesão, todos derretíveis. São derretidos à base de molho de tomate (rossa), ou também há receitas sem tomate (bianca).Entregues no conforto da sua casa. Peça já e saboreie a Itália sem sair de casa!',
    infos: ['Pizzas Deliciosas', 'P/ R$ 35,82', 'M/R$ 55,22', 'G/ R$ 72,00'],
    image: quatroQuijo,
    nota: '4.0'
  },
  {
    id: 5,
    title: 'Risoto de Limão Siciliano',
    description:
      'E uma receita sofisticada e refrescante que combina a cremosidade característica do risoto com o toque cítrico do limão siciliano, é uma escolha elegante e leve, perfeita para acompanhar frutos do mar ou ser apreciada como prato principal.Entregues no conforto da sua casa. Peça já',
    infos: ['Risotos Incríveis', 'R$ 55,82'],
    image: RisotoLimao,
    nota: '4.9'
  },
  {
    id: 6,
    title: 'Risoto de Cogumelos',
    description:
      'É uma ótima forma de unir os sabores e aromas dos cogumelos à cremosidade e maciez do arroz arbóreo cozido com uma seleção de cogumelos salteados em vinho branco, garantindo uma experiência completa e deliciosa, entregues no conforto da sua casa. Peça já e saboreie a Itália sem sair de casa!',
    infos: ['Risotos Incríveis', 'R$ 51,22'],
    image: cogumelo,
    nota: '4.9'
  }
]

const Italia = () => {
  return (
    <div style={{ padding: '20px 16px', marginTop: '20px' }}>
      <div>
        <HeroDeItalia />
      </div>

      <Nav>
        <h2>Cardápio Italiano</h2>
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

export default Italia
