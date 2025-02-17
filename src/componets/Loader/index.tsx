import { SyncLoader } from 'react-spinners'
import { Container } from './styles'
import { cores } from '../../styled'

const Loader = () => {
  return (
    <>
      <Container>
        <SyncLoader color={cores.fuccia} />
      </Container>
    </>
  )
}

export default Loader
