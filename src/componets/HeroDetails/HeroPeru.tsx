import { Imagem, TextoInferior, TextoSuperior } from './styled'
import bannerImg from '../../asset/images/heroPais/peru.jpg'

const HeroDePeru = () => (
  <Imagem
    style={{
      backgroundImage: `url(${bannerImg})`
    }}
  >
    <TextoSuperior>Peruano</TextoSuperior>
    <TextoInferior>Só os melhores restaurantes</TextoInferior>
  </Imagem>
)

export default HeroDePeru
