import styled from 'styled-components'
import { cores } from '../../styled'

export const Imagem = styled.div`
  width: 100%;
  height: 280px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  font-weight: bold;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    background-color: #000;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0.5;
  }

  @media (max-width: 768px) {
    height: 278px;
  }

  @media (max-width: 480px) {
    height: 288px;
  }
    @media (max-width: 480px) {
      padding-top: 130px;
    }
  }
`
export const TextoSuperior = styled.div`
  font-family: 'Roboto', sans-serif;
  font-weight: 100;
  font-size: 32px;
  line-height: 37.5px;
  color: ${cores.branca};
  text-shadow: 2px 2px 4px ${cores.preta};
  position: absolute;
  top: 40px;
  left: 171px;
  z-index: 1;
  opacity: 0.7;

  @media (max-width: 768px) {
    font-size: 28px;
    top: 15px;
    left: 15px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
  }
`

export const TextoInferior = styled.div`
  font-family: 'Roboto', sans-serif;
  font-weight: 900;
  font-size: 32px;
  line-height: 37.5px;
  color: ${cores.branca};
  text-shadow: 2px 2px 4px ${cores.preta};
  position: absolute;
  bottom: 35px;
  left: 171px;
  z-index: 1;

  @media (max-width: 768px) {
    font-size: 28px;
    bottom: 15px;
    left: 15px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
  }
`
