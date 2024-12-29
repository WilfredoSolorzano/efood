import styled from 'styled-components'
import { cores } from '../../styled'
import vector from '../../asset/images/Vector.png'

export const HeroContainer = styled.div`
  background-image: url(${vector});
  background-size: cover;
  background-repeat: no-repeat;
  margin-bottom: 30px;
  height: 384px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`

export const Logo = styled.img`
  width: 126px;
  margin-top: 40px;
  top: 40px;
  left: 621px;
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
`
