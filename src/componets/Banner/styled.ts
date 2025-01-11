import styled from 'styled-components'
import { cores } from '../../styled'
import fundo from '../../asset/images/Vector.png'

export const HeaderBar = styled.header`
  background-image: url(${fundo});
  background-size: cover;
  background-repeat: no-repeat;
  height: 186px;
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 280px;

  a {
    color: ${cores.fuccia};
    font-weight: bold;
    text-decoration: none;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 16px;
    gap: 20px;
  }
`

export const Links = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    margin-bottom: 16px;
  }
`

export const LinkItems = styled.li`
  margin-left: 100px;
  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 8px;
  }
  @media (max-width: 768px) {
    position: absolute;
    left: 35px;
  }
`

export const Logo = styled.img`
  width: 125px;
  height: 56px;
  display: block;
  margin: 0;

  @media (max-width: 768px) {
    margin-bottom: 16px;
    width: 120px;
  }
`

export const LinkCart = styled.a`
  display: flex;
  align-items: center;
  margin: 0;

  img {
    width: 26px;
    margin-left: 0px;

    @media (max-width: 768px) {
      width: 22px;
    }
  }

  @media (max-width: 768px) {
    justify-content: center;
    margin-top: 16px;
  }
`
