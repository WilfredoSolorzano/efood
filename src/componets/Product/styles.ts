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
  height: ${(props) => (props.isProductPage ? 'auto' : '398px')};

  ${TagContainer} {
    margin-right: 8px;
    margin-bottom: 6px;
  }

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 12px;
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 8px;

    ${(props) =>
      props.isProductPage
        ? `
        height: auto;
      `
        : `
        height: 390px;
      `}
  }
`

export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 18px;
  display: block;
  margin-top: 0px;
  margin-bottom: 14px;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`
export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;

  @media (max-width: 768px) {
    font-size: 12px;
    line-height: 20px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    line-height: 18px;
  }
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  z-index: 3;

  @media (max-width: 768px) {
    position: static;
    margin-top: 8px;
    text-align: center;
  }
`
export const ContenNota = styled.div`
  display: flex;
  align-items: baseline;
  gap: 5px;

  img {
    width: 16px;
    height: 16px;
    margin-right: 9px;

    @media (max-width: 768px) {
      width: 14px;
      height: 14px;
    }

    @media (max-width: 480px) {
      width: 12px;
      height: 12px;
    }
  }

  .right-content {
    margin-left: auto;
    display: flex;
    align-items: center;
    gap: 5px;

    @media (max-width: 480px) {
      margin-left: 0;
      justify-content: center;
      gap: 5px;
      font-size: 12px;
    }
  }
`
