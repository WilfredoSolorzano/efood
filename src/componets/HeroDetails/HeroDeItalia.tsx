import { Imagem, Titulo } from './styled'
import bannerImg from '../../asset/images/heroPais/italia.jpg'
import Tag from '../Tag'

const HeroDeBrasil = () => (
  <Imagem
    style={{
      backgroundImage: `url(${bannerImg})`,
      width: 'auto',
      height: '525px'
    }}
  >
    <div className="container">
      <Tag size="big">Italia</Tag>
      <div>
        <Titulo></Titulo>
      </div>
      <div className="tagBotao"></div>
    </div>
  </Imagem>
)

export default HeroDeBrasil
