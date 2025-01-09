import { Imagem, TextoInferior, TextoSuperior } from './styled'
import bannerImg from '../../asset/images/heroPais/mexico.jpg'

const HeroDeMexico = () => (
  <Imagem
    style={{
      backgroundImage: `url(${bannerImg})`
    }}
  >
    <TextoSuperior>Mexicano</TextoSuperior>
    <TextoInferior>Só os melhores restaurantes</TextoInferior>
  </Imagem>
)

export default HeroDeMexico
