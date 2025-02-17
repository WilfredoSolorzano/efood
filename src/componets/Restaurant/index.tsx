import Button from '../Buttom'
import {
  Card,
  Title,
  Description,
  Categories,
  PhotoRestaurant,
  Infos
} from './styles'
import Star from '../../asset/images/logos/strela.png'
import { reduceDescription } from '../Pratos'

type Props = {
  RestaurantTitle: string
  RestaurantRate: number
  RestaurantDetails: string
  RestaurantPhoto: string
  RestaurantCategories: string[]
  RestaurantToLink: string
}

const Restaurant = ({
  RestaurantTitle,
  RestaurantRate,
  RestaurantDetails,
  RestaurantPhoto,
  RestaurantCategories,
  RestaurantToLink
}: Props) => {
  return (
    <Card>
      <PhotoRestaurant src={RestaurantPhoto} alt="" />
      <Categories>
        {RestaurantCategories.map((info) => {
          if (info) {
            return <Button key={info}>{info}</Button>
          }
        })}
      </Categories>
      <div className="ContainerTop">
        <Title>{RestaurantTitle}</Title>
        <Infos>
          <h3>{RestaurantRate}</h3>
          <img src={Star} alt="Estrela amarela" />
        </Infos>
      </div>
      <Description>{reduceDescription(RestaurantDetails)}</Description>
      <Button type="link" to={RestaurantToLink}>
        Saiba mais
      </Button>
    </Card>
  )
}

export default Restaurant
