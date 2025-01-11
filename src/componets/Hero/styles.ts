import styled from 'styled-components'
import { cores } from '../../styled'
import vector from '../../asset/images/Vector.png'

export const HeroContainer = styled.div`
  background-image: url(${vector});
  background-color: #e66767;
  background-size: cover;
  background-repeat: no-repeat;
  height: 384px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  text-align: center;
  margin-bottom: 80px;

  @media (max-width: 768px) {
    height: 300px;
  }

  @media (max-width: 480px) {
    height: 250px;
  }
`

export const Text = styled.h1`
  width: 539px;
  height: 84px;
  position: absolute;
  top: 236px;
  font-family: Roboto;
  font-size: 36px;
  font-weight: 900;
  line-height: 42.19px;
  text-align: center;
  color: ${cores.fuccia};
  transition: opacity 0.5s ease;

  @media (max-width: 768px) {
    width: 80%;
    font-size: 28px;
    line-height: 36px;
    top: 200px;
  }

  @media (max-width: 480px) {
    width: 90%;
    font-size: 20px;
    line-height: 28px;
    top: 180px;
  }
`

export const Logo = styled.img`
  width: 126px;
  margin-top: 40px;
  position: absolute;
  top: 40px;
  left: 50%;
  transform: translateX(-50%);

  @media (max-width: 768px) {
    width: 100px;
  }

  @media (max-width: 480px) {
    width: 80px;
  }
`
