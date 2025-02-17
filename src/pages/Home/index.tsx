import { useGetRestaurantsQuery } from '../../services/api'
import RestaurantList from '../../componets/RestaurantList'
import Hero from '../../componets/Hero'
import Loader from '../../componets/Loader'
import Footer from '../../Footer'

const Home = () => {
  const { data: restaurants } = useGetRestaurantsQuery()

  if (restaurants) {
    return (
      <>
        <Hero />
        <RestaurantList restaurants={restaurants} />
        <Footer />
      </>
    )
  }
  return <Loader />
}
export default Home
