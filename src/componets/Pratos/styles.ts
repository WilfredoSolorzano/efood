import styled from 'styled-components'
import { breakpoints, colors } from '../../styled'
import { Link } from 'react-router-dom'

export const Card = styled.div`
  background-color: ${colors.fuchsia};
  color: ${colors.clear};
  max-width: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 8px;
`

export const ImagemPratos = styled.img`
  max-width: 304px;
  max-height: 167px;
  height: 100%;
  width: 100%;
  object-fit: cover;

  @media (max-width: ${breakpoints.tablet}) {
    object-fit: fill;
  }
`

export const Title = styled.h3`
  font-size: 16px;
  font-weight: 900;
  margin: 8px 0;
`

export const Description = styled.p`
  font-size: 14px;
  margin-bottom: 8px;
`

export const Button = styled(Link)`
  background-color: ${colors.pink};
  color: ${colors.fuchsia};
  border: none;
  padding: 4px 7px;

  font-weight: 700;
  text-decoration: none;
  text-align: center;
  font-size: 14px;
`
