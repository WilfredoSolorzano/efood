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
`

export const Links = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`

export const LinkItems = styled.li`
  margin-right: 16px;
`

export const Logo = styled.img`
  display: block;
  margin: 0 auto;
  width: 150px;
`

export const LinkCart = styled.a`
  display: flex;
  align-items: center;

  img {
    width: 26px;
    margin-left: 0px;
  }
`
