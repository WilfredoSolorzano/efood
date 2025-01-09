import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { cores } from '../../styled'

export const ButtonContainer = styled.button`
  color: ${cores.fuccia};
  background-color: transparent;
  font-size: 14px;
  font-weight: bold;
  padding: 8px 16px;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 12px;
    padding: 6px 12px;
  }

  @media (max-width: 480px) {
    font-size: 10px;
    padding: 4px 10px;
  }
`

export const ButtonLink = styled(Link)`
  color: ${cores.textBotoes};
  background-color: ${cores.fuccia};
  font-size: 14px;
  font-weight: bold;
  padding: 4px 10px;
  text-decoration: none;
  line-height: 16px;
  text-align: center;
  position: absolute;
  bottom: 5px;
  left: 6px;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 12px;
    padding: 6px 12px;
  }

  @media (max-width: 480px) {
    font-size: 10px;
    padding: 4px 10px;
  }
`
