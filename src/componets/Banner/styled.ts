import styled from 'styled-components'
import { cores } from '../../styled'
import fundo from '../../asset/images/Vector.png'

export const HeaderBar = styled.header`
  background-image: url(${fundo});
  background-size: cover;
  background-repeat: no-repeat;
  padding: 24px;
  border-radius: 16px;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    color: ${cores.fuccia};
    font-weight: bold;
    text-decoration: none;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 16px;
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
  margin-right: 16px;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 8px;
  }
`

export const Logo = styled.img`
  display: block;
  margin: 0 auto;
  width: 150px;

  @media (max-width: 768px) {
    margin-bottom: 16px;
    width: 120px;
  }
`

export const LinkCart = styled.a`
  display: flex;
  align-items: center;

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
