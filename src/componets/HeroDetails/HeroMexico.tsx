import { Imagem, Titulo } from './styled'
import bannerImg from '../../asset/images/heroPais/mexico.jpg'
import Tag from '../Tag'
import Button from '../Buttom'

const HeroDeMexico = () => (
  <Imagem
    style={{
      backgroundImage: `url(${bannerImg})`,
      width: 'auto',
      height: '525px'
    }}
  >
    <div className="container">
      <Tag size="big">Mexico</Tag>
      <div>
        <Titulo id="TituloBrackg">O México é um mundo em si</Titulo>
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

export default HeroDeMexico
