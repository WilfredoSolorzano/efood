import { CategoryPorted, PortedContainer, PortedDish } from './styles'

export type Props = {
  restaurant: Restaurant
}
const PortadaRestaurant = ({ restaurant }: Props) => (
  <PortedContainer style={{ backgroundImage: `url(${restaurant.capa})` }}>
    <div className="container">
      <CategoryPorted>{restaurant.tipo}</CategoryPorted>
      <PortedDish>{restaurant.titulo}</PortedDish>
    </div>
  </PortedContainer>
)

export default PortadaRestaurant
