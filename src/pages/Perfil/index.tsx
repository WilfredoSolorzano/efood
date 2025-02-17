import { useParams } from 'react-router-dom'
import { useGetRestaurantSelectedQuery } from '../../services/api'
import Header from '../../componets/Header'
import Apresentacao from '../../componets/HeroInicio'
import FoodList from '../../componets/PratosList'
import Footer from '../../Footer'
import Loader from '../../componets/Loader'

type RestaurantParams = {
  id: string
}

const Perfil = () => {
  const { id } = useParams() as RestaurantParams
  const { data: restaurantFood } = useGetRestaurantSelectedQuery(id)

  if (restaurantFood) {
    return (
      <>
        <Header />
        <Apresentacao restaurant={restaurantFood} />
        <FoodList restaurant={restaurantFood} />
        <Footer />
      </>
    )
  }
  return <Loader />
}

export default Perfil
