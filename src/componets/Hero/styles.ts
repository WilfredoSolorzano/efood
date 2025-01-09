import styled from 'styled-components'
import { cores } from '../../styled'
import vector from '../../asset/images/Vector.png'

export const HeroContainer = styled.div`
  background-image: url(${vector});
  background-size: cover;
  background-repeat: no-repeat;
  margin-bottom: 80px;
  height: 384px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  @media (max-width: 768px) {
    height: 300px;
  }

  @media (max-width: 480px) {
    height: 250px;
  }
`

export const Logo = styled.img`
  width: 126px;
  margin-top: 40px;
  top: 40px;
  left: 621px;

  @media (max-width: 768px) {
    width: 100px;
    margin-top: 30px;
  }

  @media (max-width: 480px) {
    width: 80px;
    margin-top: 20px;
  }
`

export const Text = styled.h1`
  width: 539px;
  height: 84px;
  position: absolute;
  top: 160px;
  font-family: 'Roboto', sans-serif;
  font-size: 36px;
  font-weight: 900;
  line-height: 42.19px;
  text-align: center;
  color: ${cores.fuccia};
  text-decoration: none;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;

  @media (max-width: 768px) {
    width: 80%;
    font-size: 28px; /* Reduce el tamaño del texto en tablets */
    line-height: 36px;
    top: 140px;
  }

  @media (max-width: 480px) {
    width: 90%;
    font-size: 20px; /* Reduce el tamaño del texto en móviles */
    line-height: 28px;
    top: 120px;
  }
`
