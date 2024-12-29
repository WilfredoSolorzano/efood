import Tag from '../Tag'
import { Card, Descricao, Titulo, Infos, ContenNota } from './styles'
import strela from '../../asset/images/logos/strela.png'
import { ButtonLink } from '../Buttom/styles'

type Props = {
  title: string
  nota?: string
  isProductPage: boolean
  description: string
  infos: string[]
  image: string
  detailsRoute?: string
}

const Product = ({
  title,
  nota,
  description,
  infos,
  image,
  isProductPage,
  detailsRoute
}: Props) => (
  <Card isProductPage={isProductPage}>
    <img src={image} alt={title} />
    <Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>
    <ContenNota>
      <Titulo>{title}</Titulo>
      <div className="right-content">
        <span>{nota}</span>
        <img src={strela} alt="estrela" />
      </div>
    </ContenNota>
    <Descricao style={{ whiteSpace: 'pre-line' }}>{description}</Descricao>
    <ButtonLink
      type="link"
      title="Saiba mais"
      to={detailsRoute ?? '/default-route'}
    >
      Saiba mais
    </ButtonLink>
  </Card>
)

export default Product
