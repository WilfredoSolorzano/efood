import { cores } from '../../styled'
import { Props } from '.'
import { styled } from 'styled-components'

export const TagContainer = styled.div<Props>`
  background-color: ${cores.fuccia};
  color: ${cores.textBotoes};
  font-size: ${(props) => (props.size === 'big' ? '14px' : '12px')};
  font-weight: bold;
  padding: ${(props) => (props.size === 'big' ? '8px 16px' : '4px 6px')};
  display: inline-block;
`
