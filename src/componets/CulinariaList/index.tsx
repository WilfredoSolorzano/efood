import Culinarias from '../../model/Culinarias'
import Product from '../Product'
import { Container, List } from './styles'

export type Props = {
  culinaria: Culinarias[]
}

const CulinariaList = ({ culinaria }: Props) => (
  <Container>
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
