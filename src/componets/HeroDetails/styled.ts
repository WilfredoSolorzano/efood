import styled from 'styled-components'
import { TagContainer } from '../Tag/styles'
import { cores } from '../../styled'

export const Imagem = styled.div`
  max-width: 2025px;
  width: 100%;
  height: 525px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  font-weight: bold;

  @media (max-width: 768px) {
    height: 278px;
  }

  @media (max-width: 480px) {
    height: 288px;
  }

  .container {
    position: relative;
    padding-top: 340px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    @media (max-width: 768px) {
      flex-direction: column;
      padding-top: 200px;
      align-items: center;
    }

    @media (max-width: 480px) {
      padding-top: 130px;
    }
  }
  .tagBotao {
    position: absolute;
    bottom: -52px;
    z-index: 1;

    @media (max-width: 768px) {
      position: static; /* Centra el botón en pantallas pequeñas */
      margin-top: 20px;
    }
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

    @media (max-width: 768px) {
      top: 20px;
      right: 20px;
    }

    @media (max-width: 480px) {
      top: 15px;
      right: 15px;
    }
  }
`
export const Titulo = styled.h2`
  color: ${cores.fuccia};
  font-size: 26px;
  max-width: 450px;
  @media (max-width: 768px) {
    font-size: 20px; /* Reduce el tamaño en tablets */
    max-width: 90%;
    text-align: center; /* Centra el texto en tablets */

    @media (max-width: 480px) {
    font-size: 18px; /* Reduce aún más el tamaño en móviles */
  }
`
