import { Imagem, Titulo } from './styled'
import bannerImg from '../../asset/images/heroPais/japon.jpg'
import Tag from '../Tag'
import Button from '../Buttom'

const HeroDeJapon = () => (
  <Imagem
    style={{
      backgroundImage: `url(${bannerImg})`,
      width: 'auto'
    }}
  >
    <div className="container">
      <Tag size="big">Japon</Tag>
      <div>
        <Titulo id="TituloBrackg">
          Do Japão para a sua mesa: frescor, tradição e sabor em cada prato.
        </Titulo>
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

export default HeroDeJapon
