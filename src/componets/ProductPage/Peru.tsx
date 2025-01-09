import React from 'react'
import Product from '../Product'
import { Container, Nav, ProductGrid, ProductSection } from './styled'
import HeroDePeru from '../HeroDetails/HeroPeru'
import Pratos from '../../model/Pratos'
import lomosaltado from '../../asset/images/pratos/peru/lomosaltado.jpg'
import ajidegallina from '../../asset/images/pratos/peru/AjideGallina.jpg'
import chaufa from '../../asset/images/pratos/peru/chaufa.jpg'
import Ceviche from '../../asset/images/pratos/peru/cevichemini.jpg'
import suspiro from '../../asset/images/pratos/peru/suspiro.jpg'
import alfajores from '../../asset/images/pratos/peru/alfajore.jpg'
import { ButtonContainer } from '../Buttom/styles'

const cardapio: Pratos[] = [
  {
    id: 1,
    title: 'Lomo saltado',
    description:
      'É um prato feito com carne bovina,Além da carne, a receita leva tomates, cebolas, pimentões e o molho shoyu.',
    infos: [],
    image: lomosaltado
  },
  {
    id: 2,
    title: 'Ají de Gallina',
    description:
      'Um prato cremoso e reconfortante feito com peito de frango desfiado em um molho à base de ají amarillo, pão e leite.',
    infos: [],
    image: ajidegallina
  },
  {
    id: 3,
    title: 'Arroz Chaufa',
    description:
      'A versão peruana do arroz frito, feito com tiras de frango ou carne, legumes frescos e temperos únicos, tudo salteado com molho de soja.',
    infos: [],
    image: chaufa
  },
  {
    id: 4,
    title: 'Ceviche',
    description:
      'O prato tem cubos de peixe fresco marinados no suco de limão, temperados com cebola roxa, pimenta e coentro, milho e batata-doce.',
    infos: [],
    image: Ceviche
  },
  {
    id: 5,
    title: 'Suspiro Limeño',
    description:
      'Uma sobremesa doce e delicada, feita com um creme à base de leite condensado e gemas, coberto com merengue e com vinho do Porto.',
    infos: [],
    image: suspiro
  },
  {
    id: 6,
    title: 'Alfajores Peruanos',
    description:
      'É um biscoitos macios recheados com doce de leite e polvilhados com açúcar de confeiteiro, perfeitos para acompanhar um café ou chá.',
    infos: [],
    image: alfajores
  }
]

const Peru = () => {
  return (
    <div style={{ padding: '0px 30px' }}>
      <div>
        <HeroDePeru />
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

export default Peru
