import styled from 'styled-components'
import { cores } from '../../styled'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div<{ isProductPage?: boolean }>`
  width: 474px;
  background-color: ${cores.branca};
  border: 1px solid ${cores.fuccia};
  position: relative;
  margin-bottom: 10px;
  color: ${cores.fuccia};
  height: ${(props) => (props.isProductPage ? 'auto' : '415px')};

  ${TagContainer} {
    margin-right: 8px;
  }
`
export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 18px;
  display: block;
  margin-top: 16px;
  margin-bottom: 8px;
`
export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  z-index: 3;
`
export const ContenNota = styled.div`
  display: flex;
  align-items: baseline;
  gap: 5px;

  img {
    width: 16px;
    height: 16px;
    margin-right: 9px;
  }

  .right-content {
    margin-left: auto;
    display: flex;
    align-items: center;
    gap: 5px;
  }
`
