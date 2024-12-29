import { HeroContainer, Logo, Text } from './styles'
import logo from '../../asset/images/logos/logo.png'

const Hero = () => {
  return (
    <HeroContainer>
      <Logo src={logo} alt="Logo" />
      <Text>Viva experiências gastronômicas no conforto da sua casa</Text>
    </HeroContainer>
  )
}

export default Hero
