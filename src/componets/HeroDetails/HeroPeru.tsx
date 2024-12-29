import { Imagem, Titulo } from './styled'
import bannerImg from '../../asset/images/heroPais/peru.jpg'
import Tag from '../Tag'
import Button from '../Buttom'

const HeroDePeru = () => (
  <Imagem
    style={{
      backgroundImage: `url(${bannerImg})`,
      width: 'auto',
      height: '525px'
    }}
  >
    <div className="container">
      <Tag size="big">Perú</Tag>
      <div>
        <Titulo id="TituloBrackg">Um lugar cheio de beleza</Titulo>
      </div>
      <div className="tagBotao">
        <Button
          type="link"
          to="/"
          title="Clique aqui para aproveitar esta oferta"
        >
          Aproveita
        </Button>
      </div>
    </div>
  </Imagem>
)

export default HeroDePeru
