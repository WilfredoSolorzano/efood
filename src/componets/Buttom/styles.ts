import styled from 'styled-components'
import { colors } from '../../styled'
import { Link } from 'react-router-dom'

import { Props } from '.'

export const ButtonContainer = styled(Link)<Props>`
  background-color: ${colors.fuchsia};
  color: ${colors.pink};
  text-decoration: none;
  font-size: ${(props) => (props.type === 'link' ? '14px' : '12px')};
  cursor: ${(props) => (props.type === 'link' ? 'pointer' : 'default')};
  margin-top: 16px;
  margin-bottom: 8px;
  margin-left: 8px;
  padding: 3px 4px;
  font-weight: bold;
  display: inline-block;
`
