import styled from 'styled-components'
import fundo from '../asset/images/Vector.png'
import { colors } from '../styled'

export const Container = styled.footer`
  background-image: url(${fundo});
  background-size: cover;
  background-repeat: no-repeat;
  font-size: 10px;
  text-align: center;
  margin-top: 160px;
  padding: 16px;

  @media (max-width: 1000px) {
    padding: 12px;
  }

  @media (max-width: 480px) {
    margin-top: 3px;
    padding: 8px;
  }
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
    color: ${colors.fuchsia};
  }
`
