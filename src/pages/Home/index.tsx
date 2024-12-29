import CulinariaList from '../../componets/CulinariaList'
import Culinarias from '../../model/Culinarias'
import Sushi from '../../asset/images/Sushi.png'
import Trattoria from '../../asset/images/Trattoria.png'
import Mignon from '../../asset/images/Mignon .jpg'
import Burrito from '../../asset/images/burritomexicano.jpeg'
import Paisa from '../../asset/images/BandejaPaisa.jpg'
import Ceviche from '../../asset/images/ceviche.jpg'

export const cardapio: Culinarias[] = [
  {
    id: 1,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    image: Sushi,
    infos: ['Destaque da semana', 'Japonesa'],
    nota: '4.9',
    title: 'Hioki Sushi ',
    detailsRoute: '/product-details/japon'
  },
  {
    id: 2,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: Trattoria,
    infos: ['Italiana'],
    nota: '4.6',
    title: 'La Dolce Vita Trattoria',
    detailsRoute: 'product-details/italia'
  },
  {
    id: 3,
    description:
      'A rica culinária brasileira! Experimente pratos autênticos como feijoada, picanha na brasa, acarajé e sobremesas como brigadeiro e pudim. Um convite aos sabores do Brasil, no conforto da sua casa. Entrega rápida, pratos bem servidos e uma experiência inesquecível. Peça agora!',
    image: Mignon,
    infos: ['Brasil'],
    nota: '4.8',
    title: 'Sabor Brasil Restaurante',
    detailsRoute: '/product-details/brasil'
  },
  {
    id: 4,
    description:
      'Celebra a autêntica cozinha mexicana. Desfrute de pratos tradicionais como tacos al pastor, enchiladas, mole poblano e deliciosas sobremesas, Leve o sabor do México para a sua mesa com nossa entrega rápida e porções generosas. Peça agora!',
    image: Burrito,
    infos: ['Destaque da semana', 'Mexico'],
    nota: '4.0',
    title: 'El Sazón Mexicano',
    detailsRoute: '/product-details/mexico'
  },
  {
    id: 5,
    description:
      'Traz o melhor da culinária tradicional da Colômbia para você! Desfrute de pratos como bandeja paisa, ajiaco, lechona e sobremesas deliciosas como obleas e bolo três leches,  proporcionando uma experiência única. Entrega rápidas. Peça agora e saboreie o melhor da Colômbia!',
    image: Paisa,
    infos: ['Mais vendido', 'Colombia'],
    nota: '4.9',
    title: 'Colombian Flavors',
    detailsRoute: '/product-details/colombia'
  },
  {
    id: 6,
    description:
      'A melhor seleção da culinária tradicional do Peru para você! Desfrute de pratos icônicos como ceviche, lomo saltado, ají de gallina e sobremesas deliciosas como suspiro limeño e alfajores.Entrega rápida, explosão de sabores autênticos. Faça seu pedido agora e descubra o melhor do Peru!',
    image: Ceviche,
    infos: ['Melhor da semana', 'Peruana'],
    nota: '4.9',
    title: 'Tempero Peruano',
    detailsRoute: '/product-details/peru'
  }
]

const Home = () => (
  <>
    <CulinariaList title={'Cardapio Internacional'} culinaria={cardapio} />
  </>
)

export default Home
