import { Imagem, Titulo } from './styled'
import bannerImg from '../../asset/images/heroPais/colombia.jpg'
import Tag from '../Tag'
import Button from '../Buttom'

const HeroDeColombia = () => (
  <Imagem
    style={{
      backgroundImage: `url(${bannerImg})`,
      width: 'auto',
      height: '525px'
    }}
  >
    <div className="container">
      <Tag size="big">Colombia</Tag>
      <div>
        <Titulo>Sabor nas mãos certas</Titulo>
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

export default HeroDeColombia
