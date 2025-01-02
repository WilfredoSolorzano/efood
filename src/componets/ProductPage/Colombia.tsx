import React from 'react'
import Product from '../Product'
import {
  AddToCartButton,
  Container,
  Nav,
  ProductGrid,
  ProductSection
} from './styled'
import HeroDeColombia from '../HeroDetails/HeroColombia'
import Pratos from '../../model/Pratos'
import ajiaco from '../../asset/images/pratos/colombia/ajiaco.jpg'
import lechona from '../../asset/images/pratos/colombia/Lechona.jpg'
import tamal from '../../asset/images/pratos/colombia/tamal.jpeg'
import arepa from '../../asset/images/pratos/colombia/arepa.jpg'
import Paisa from '../../asset/images/BandejaPaisa.jpg'
import flan from '../../asset/images/pratos/colombia/flan.jpeg'

const cardapio: Pratos[] = [
  {
    id: 1,
    title: 'Ajiaco colombiano',
    description:
      'O ajiaco colombiano é feito com frango, diferentes tipos de batata, cebola, espiga e alguns acompanhantes como creme de leite, alcaparras, abacate, arroz e a inevitável guasca.Entrega rápida, pratos bem embalados e sabores que transportam você para o coração da Colômbia. Peça agora e viva essa experiência gastronômica única!',
    infos: ['Sabor inesquecível', 'R$ 40,25'],
    image: ajiaco,
    nota: '4.9'
  },
  {
    id: 2,
    title: 'Lechona',
    description:
      'A lechona é um prato tradicional colombiano que consiste em um porco inteiro assado e recheado com cebola, ervilha, arroz, ervas frescas e temperos diversos. A carne de porco é assada por muito tempo até que a carne fique macia e suculenta. Entrega rápida, pratos bem embalados e sabores que transportam você.Peça agora!',
    infos: ['R$ 56,95'],
    image: lechona,
    nota: '4.6'
  },
  {
    id: 3,
    title: 'Tamale Tolimense',
    description:
      'Os tamales são um prato que comtem uma massa gerealmente recheados com carne, principalmente porco e frango, mas alguns deles têm linguiça, bacon, berinjela ou abóbora.Entrega rápidas. Peça agora e saboreie o melhor da Colômbia!',
    infos: ['Economise Hoje', 'R$ 26,95'],
    image: tamal,
    nota: '4.8'
  },
  {
    id: 4,
    title: 'Arepas recheadas',
    description:
      'As arepas saõ pães feitos à base de milho e servidos com variados e generosos recheios são supertradicionais na Colômbia e na Venezuela.Podem ser recheadas com diversos ingredientes, como queijo, presunto, abacate, ovos mexidos, carne desfiada e muitos outros. Entrega rápidas. Peça agora',
    infos: ['Destaque da semana', 'México'],
    image: arepa,
    nota: '4.0'
  },
  {
    id: 5,
    title: 'Bandeja Paisa',
    description:
      'A bandeja paisa reúne o melhor da culinária da Colômbia: arroz, feijão, arepas, torresmo e mais. É uma refeição completa que reflete a riqueza da culinária de Antioquia e é perfeita para quem busca uma experiência gastronômica autêntica da Colômbia. Entrega rápidas. Peça agora!',
    infos: ['Mais vendido', 'R$ 65,90'],
    image: Paisa,
    nota: '4.9'
  },
  {
    id: 6,
    title: 'Flan de Arequipe',
    description:
      'É uma sobremesa tradicional colombiana, famosa por sua textura cremosa e sabor irresistível. Feito com ovos, leite e o delicioso arequipe (uma versão colombiana do doce de leite), o flan é cozido em banho-maria para garantir sua consistência suave e perfeita.Peça agora!',
    infos: ['Sobremesa', 'R$ 15,20'],
    image: flan,
    nota: '4.9'
  }
]

const Colombia = () => {
  return (
    <div style={{ padding: '20px 16px', marginTop: '20px' }}>
      <div>
        <HeroDeColombia />
      </div>

      <Nav>
        <h2>Cardápio Colombiano</h2>
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

export default Colombia
