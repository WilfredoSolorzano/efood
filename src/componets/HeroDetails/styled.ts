import styled from 'styled-components'
import { TagContainer } from '../Tag/styles'
import { cores } from '../../styled'

export const Imagem = styled.div`
  max-width: 2025px;
  width: 100%;
  height: 60%;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  font-weight: bold;

  .container {
    position: relative;
    padding-top: 340px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
  .tagBotao {
    position: absolute;
    bottom: -52px;
    z-index: 1;
  }
  #titulo {
    color: ${cores.branca};
  }
  #TituloBrackg {
    background-color: ${cores.fuccia};
    color: ${cores.branca};
  }

  ${TagContainer} {
    position: absolute;
    top: 32px;
    right: 35px;
    z-index: 2;
  }
`
export const Titulo = styled.h2`
  color: ${cores.fuccia};
  font-size: 26px;
  max-width: 450px;
`
