import React from 'react'
import Product from '../Product'
import {
  AddToCartButton,
  Container,
  Nav,
  ProductGrid,
  ProductSection
} from './styled'
import HeroDeJapon from '../HeroDetails/HeroDeJapon'
import Pratos from '../../model/Pratos'
import Sushi from '../../asset/images/Sushi.png'
import Combinado from '../../asset/images/pratos/Japon/Combinado.jpg'
import Yakis from '../../asset/images/pratos/Japon/yakisoba.jpeg'
import tempura from '../../asset/images/pratos/Japon/tempura.jpeg'
import Temppa from '../../asset/images/pratos/Japon/teppanyaki.gif'
import katsu from '../../asset/images/pratos/Japon/katsu.jpeg'

const cardapio: Pratos[] = [
  {
    id: 1,
    title: 'Sushi japonês',
    description:
      'O verdadeiro sushi japonês consiste em apenas quatro componentes: arroz cozido, vinagre de arroz, algas marinhas e peixe ou vegetais frescos crus. E as habilidades de um mestre de sushi são medidas pela qualidade dos ingredientes que ele escolhe e pela forma como os combina.Entrega rápida, embalagens impecáveis e uma experiência gastronômica que vai surpreender você. Peça agora!',
    infos: ['Sabor incrível', 'R$ 50,19'],
    image: Sushi,
    nota: '4.9'
  },
  {
    id: 2,
    title: 'Combinado Especial',
    description:
      'Uma experiência completa para os amantes da culinária japonesa! Este prato oferece uma seleção variada e cuidadosamente preparada de nigiris, com fatias frescas de peixe sobre arroz temperado; hossomakis, enrolados com alga nori e recheios delicados; e sashimis, cortes precisos de peixes frescos que derretem na boca. Um equilíbrio perfeito entre sabor, textura e tradição. Peça agora!',
    infos: ['Oferta', 'R$ 119,99'],
    image: Combinado,
    nota: '4.6'
  },
  {
    id: 3,
    title: 'Yakissoba de Frango e Legumes',
    description:
      'Uma combinação irresistível de noodles salteados no wok com frango macio e suculento, acompanhados de uma variedade de legumes frescos como cenoura, brócolis e repolho. Tudo isso é envolvido em um molho especial que equilibra o doce e o salgado, garantindo um sabor autêntico e reconfortante.Entrega rápida, embalagens impecáveis e uma experiência gastronômica que vai surpreender você. Peça agora!',
    infos: ['R$ 35'],
    image: Yakis,
    nota: '4.8'
  },
  {
    id: 4,
    title: 'Tempurá de Camarão',
    description:
      'Uma iguaria japonesa que combina leveza e sabor. Camarões suculentos são envoltos em uma massa delicada e crocante, fritos até atingirem a perfeição dourada. Acompanhado de um molho especial para mergulhar, o Tempurá de Camarão é uma experiência deliciosa que harmoniza texturas leves com o sabor marcante do camarão. Perfeito como entrada ou prato principal.Peça agora!',
    infos: ['Peça agora', 'R$ 33,20'],
    image: tempura,
    nota: '4.0'
  },
  {
    id: 5,
    title: 'Teppanyaki de Salmão',
    description:
      'Delicie-se com uma verdadeira obra-prima da culinária japonesa! Filé de salmão fresco, grelhado à perfeição em chapa quente, garantindo uma textura macia por dentro e levemente crocante por fora. Acompanhado de legumes frescos, como brócolis, cenoura e abobrinha,tudo é temperado com um molho especial.Peça agora e leve o Japão para a sua mesa!',
    infos: ['Mais vendido da semana', 'R$ 66,98'],
    image: Temppa,
    nota: '4.9'
  },
  {
    id: 6,
    title: 'Katsu Don',
    description:
      'E para completar sua experiência, uma tigela de arroz coberta com filé de porco empanado e frito, finalizado com um ovo cremoso e molho especial que combina o doce e o salgado na medida certa.Não perca a chance de experimentar esta delícia. Peça agora e leve o Japão para a sua mesa!',
    infos: ['Economia hoje', 'R$ 25'],
    image: katsu,
    nota: '4.9'
  }
]

const Japon = () => {
  return (
    <div style={{ padding: '20px 16px', marginTop: '20px' }}>
      <div>
        <HeroDeJapon />
      </div>

      <Nav>
        <h2>Cardápio Japones</h2>
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
                  isProductPage={false}
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

export default Japon
