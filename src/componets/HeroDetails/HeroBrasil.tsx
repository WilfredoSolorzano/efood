import { Imagem, TextoInferior, TextoSuperior } from './styled'
import bannerImg from '../../asset/images/heroPais/brasil.png'

const HeroDeBrasil = () => (
  <Imagem
    style={{
      backgroundImage: `url(${bannerImg})`
    }}
  >
    <TextoSuperior>Brasileiro</TextoSuperior>
    <TextoInferior>Só os melhores restaurantes</TextoInferior>
  </Imagem>
)

export default HeroDeBrasil
