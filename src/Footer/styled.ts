import styled from 'styled-components'
import fundo from '../asset/images/Vector.png'
import { cores } from '../styled'

export const Container = styled.footer`
  background-image: url(${fundo});
  background-size: cover;
  background-repeat: no-repeat;
  font-size: 14px;
  text-align: center;
  margin-top: 195px;
  padding: 16px;

  @media (max-width: 1000px) {
    padding: 12px;
  }

  @media (max-width: 480px) {
    margin-top: 153px;
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
    color: ${cores.fuccia};
  }
`
export const ScrollToTopButton = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;

  button {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    background-color: ${cores.textBotoes};
    color: ${cores.fuccia};
    border: none;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      background-color: ${cores.fuccia};
      color: ${cores.textBotoes};
      transform: scale(1.1);
    }
  }

  @media (max-width: 1000px) {
    bottom: 15px;
    right: 15px;

    button {
      width: 40px;
      height: 40px;
      font-size: 20px;
    }
  }

  @media (max-width: 480px) {
    bottom: 10px;
    right: 10px;

    button {
      width: 30px;
      height: 30px;
      font-size: 18px;
    }
  }
`
