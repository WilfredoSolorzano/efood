import { Imagem, Titulo } from './styled'
import bannerImg from '../../asset/images/heroPais/brasil.avif'
import Tag from '../Tag'
import Button from '../Buttom'

const HeroDeBrasil = () => (
  <Imagem
    style={{
      backgroundImage: `url(${bannerImg})`,
      width: 'auto'
    }}
  >
    <div className="container">
      <Tag size="big">Brasil</Tag>
      <div>
        <Titulo id="titulo">
          Não há problema que não possa ser resolvido com um bom prato
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

export default HeroDeBrasil
