import React from 'react'
import logo from '../asset/images/logos/logo.png'
import facebookIcon from '../asset/images/footer/facebook.jpeg'
import instagramIcon from '../asset/images/footer/instagram.avif'
import XIcon from '../asset/images/footer/x.jpg'
import {
  Container,
  FooterText,
  Links,
  Logo,
  LogoContainer,
  SocialLink,
  ScrollToTopButton
} from './styled'
import Button from '../componets/Buttom'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

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
        <ScrollToTopButton>
          <Button
            type="button"
            title="Voltar ao topo"
            onClick={handleScrollToTop}
          >
            ↑
          </Button>
        </ScrollToTopButton>
      </div>
    </Container>
  )
}

export default Footer
