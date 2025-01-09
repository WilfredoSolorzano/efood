import styled from 'styled-components'
import { cores } from '../../styled'
import { Descricao, Titulo } from '../Product/styles'
import { ButtonContainer } from '../Buttom/styles'

export const Nav = styled.nav`
  padding: 16px;
  background-color: ${cores.branca};
  border-radius: 16px;

  h2 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 16px;
    color: ${cores.fuccia};
  }
  a {
    display: none;
  }
  ${Descricao} {
    font-size: 14px;
    line-height: 22px;
    text-align: justify;
  }
  ${Titulo} {
    font-size: 16px;
    line-height: 19px;
  }
  ${ButtonContainer} {
    width: 304px;
    height: 24px;
    background-color: ${cores.colorFundo};
    color: ${cores.fuccia};
    font-size: 14px;
    font-weight: bold;
    border: none;
    cursor: pointer;

    @media (max-width: 768px) {
      font-size: 14px;
      padding: 10px 20px;
    }
  }

  @media (max-width: 768px) {
    padding: 12px;
    h2 {
      font-size: 15px;
    }
  }
  @media (max-width: 768px) {
    padding: 15px;
    height: auto;
  }

  @media (max-width: 480px) {
    padding: 10px;
    height: auto;
  }
`

export const ProductSection = styled.div`
  width: 320px;
  height: 338px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${cores.fuccia};
  padding-bottom: 12px;

  #context-card {
    width: 318px;
    height: 336px;
    background-color: ${cores.fuccia};
    border: 1px solid ${cores.fuccia};
    position: relative;
    color: ${cores.branca};
    padding: 6px;

    .right-content {
      display: none;
    }
      @media (max-width: 768px) {
      text-align: justify;
  }

  @media (max-width: 768px) {
    padding: 8px;
  }
`
export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, auto);
  gap: 25px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
    justify-items: center;
  }
`
export const Container = styled.div`
  max-width: 1024px;
  height: 708px;
  margin: auto;
  background-color: ${cores.branca};
  padding-top: 50px;

  @media (max-width: 768px) {
    margin-left: -36px;
    padding: 16px;
  }
`
