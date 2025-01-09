import { Imagem, TextoInferior, TextoSuperior } from './styled'
import bannerImg from '../../asset/images/heroPais/japon.jpg'

const HeroDeJapon = () => (
  <Imagem
    style={{
      backgroundImage: `url(${bannerImg})`
    }}
  >
    <TextoSuperior>Japones</TextoSuperior>
    <TextoInferior>Só os melhores restaurantes</TextoInferior>
  </Imagem>
)

export default HeroDeJapon
