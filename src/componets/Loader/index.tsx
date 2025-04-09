import { SyncLoader } from 'react-spinners'
import { Container } from './styles'
import { colors } from '../../styled'

const Loader = () => {
  return (
    <>
      <Container>
        <SyncLoader color={colors.fuchsia} />
      </Container>
    </>
  )
}

export default Loader
