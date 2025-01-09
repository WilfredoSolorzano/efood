import React from 'react'
import logo from '../asset/images/logos/logo.png'
import facebookIcon from '../asset/images/footer/facebook.png'
import instagramIcon from '../asset/images/footer/instagram.png'
import XIcon from '../asset/images/footer/x.png'
import {
  Container,
  FooterText,
  Links,
  Logo,
  LogoContainer,
  SocialLink
} from './styled'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <Container>
      <div className="container">
        <LogoContainer>
          <Logo src={logo} alt="Logo" />
        </LogoContainer>
        <Links>
          <SocialLink
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={facebookIcon} alt="Facebook" />
          </SocialLink>
          <SocialLink
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagramIcon} alt="Instagram" />
          </SocialLink>
          <SocialLink
            href="https://x.com/?lang=bR"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={XIcon} alt="x" />
          </SocialLink>
        </Links>
        <FooterText>
          <p>
            A efood é uma plataforma para divulgação de estabelecimentos, a
            responsabilidade pela entrega, qualidade dos produtos é toda do
            estabelecimento contratado.
          </p>
          <p>{currentYear} - © E-FOOD Todos os direitos reservados</p>
        </FooterText>
      </div>
    </Container>
  )
}

export default Footer
