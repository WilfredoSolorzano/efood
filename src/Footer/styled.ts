import styled from 'styled-components'
import fundo from '../asset/images/Vector.png'
import { cores } from '../styled'

export const Container = styled.footer`
  background-image: url(${fundo});
  background-size: cover;
  background-repeat: no-repeat;
  font-size: 14px;
  text-align: center;
  margin-top: 225px;
`

export const Links = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-top: 16px;

  img {
    width: 24px;
    height: 24px;
    transition: transform 0.3s;

    &:hover {
      transform: scale(1.1);
    }
  }
`

export const SocialLink = styled.a`
  text-decoration: none;
`

export const LogoContainer = styled.div`
  margin: 16px 0;
`

export const Logo = styled.img`
  width: 120px;
  height: auto;
  padding: 22px;
`

export const FooterText = styled.div`
  margin-top: 32px;

  p {
    color: ${cores.fuccia};
  }
`
