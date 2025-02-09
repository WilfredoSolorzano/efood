import Pratos from '../../model/Pratos'
import Product from '../Product'
import { Container, List } from './styles'

export type Props = {
  title: string
  pratos: Pratos[]
}

const ProductsList = ({ title, pratos }: Props) => (
  <Container>
    <h2>{title}</h2>
    <List>
      {pratos.map((pratos) => (
        <Product
          key={pratos.id}
          description={pratos.description}
          image={pratos.image}
          title={pratos.title}
          isProductPage={true}
          infos={[]}
        />
      ))}
    </List>
  </Container>
)

export default ProductsList
