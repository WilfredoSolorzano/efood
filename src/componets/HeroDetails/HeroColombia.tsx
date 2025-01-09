import { Imagem, TextoInferior, TextoSuperior } from './styled'
import bannerImg from '../../asset/images/heroPais/colombia.jpg'

const HeroDeColombia = () => (
  <Imagem
    style={{
      backgroundImage: `url(${bannerImg})`
    }}
  >
    <TextoSuperior>Colombiano</TextoSuperior>
    <TextoInferior>Só os melhores restaurantes</TextoInferior>
  </Imagem>
)

export default HeroDeColombia
