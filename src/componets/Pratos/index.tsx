import { Card, Title, Description, ImagemPratos, Button } from './styles'

export type Props = {
  FoodPhoto: string
  FoodTitle: string
  FoodDescription: string
  FoodPhotoAlt: string
}
export const reduceDescription = (description: string) => {
  if (description.length > 128) {
    return description.slice(0, 121) + '...'
  }
  return description
}
const Pratos = ({
  FoodPhoto,
  FoodTitle,
  FoodDescription,
  FoodPhotoAlt
}: Props) => {
  return (
    <Card>
      <ImagemPratos src={FoodPhoto} alt={FoodPhotoAlt} />
      <Title>{FoodTitle}</Title>
      <Description>{reduceDescription(FoodDescription)}</Description>
      <Button to={''}>Adicionar ao carrinho</Button>
    </Card>
  )
}

export default Pratos
