import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { cores } from '../../styled'

export const ButtonContainer = styled.button`
  border: 2px solid ${cores.branca};
  color: ${cores.fuccia};
  background-color: transparent;
  font-size: 14px;
  font-weight: bold;
  padding: 8px 16px;
  border-radius: 8px;
`

export const ButtonLink = styled(Link)`
  border: 2px solid ${cores.branca};
  color: ${cores.textBotoes};
  background-color: ${cores.fuccia};
  font-size: 14px;
  font-weight: bold;
  padding: 4px 10px;
  text-decoration: none;
  text-align: center;
  border-radius: 8px;
  position: absolute;
  bottom: 0px;
`
