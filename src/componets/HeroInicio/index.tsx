import { CategoriaPortada, PortadaContainer, PortadaPrato } from './styles'

export type Props = {
  restaurant: Restaurant
}
const PortadaRestaurant = ({ restaurant }: Props) => (
  <PortadaContainer style={{ backgroundImage: `url(${restaurant.capa})` }}>
    <div className="container">
      <CategoriaPortada>{restaurant.tipo}</CategoriaPortada>
      <PortadaPrato>{restaurant.titulo}</PortadaPrato>
    </div>
  </PortadaContainer>
)

export default PortadaRestaurant
