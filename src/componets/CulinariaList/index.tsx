import Culinarias from '../../model/Culinarias'
import Product from '../Product'
import { Container, List } from './styles'

export type Props = {
  title: string
  culinaria: Culinarias[]
}

const CulinariaList = ({ title, culinaria }: Props) => (
  <Container>
    <h2>{title}</h2>
    <List>
      {culinaria.map((culinaria) => (
        <>
          <Product
            key={culinaria.id}
            description={culinaria.description}
            image={culinaria.image}
            infos={culinaria.infos}
            nota={culinaria.nota}
            title={culinaria.title}
            isProductPage={false}
            detailsRoute={culinaria.detailsRoute}
          />
        </>
      ))}
    </List>
  </Container>
)

export default CulinariaList
