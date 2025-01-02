import styled from 'styled-components'
import { cores } from '../../styled'
import { Descricao } from '../Product/styles'

export const Nav = styled.nav`
  padding: 16px;
  background-color: ${cores.branca};
  border-radius: 16px;
  margin-bottom: -150px;

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
    font-weight: bold;
  }

  @media (max-width: 768px) {
    padding: 12px;
    h2 {
      font-size: 15px;
    }
  }
`

export const ProductSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${cores.colorFundo};

  .right-content {
    display: none;
  }

  @media (max-width: 768px) {
    padding: 8px;
  }
`

export const AddToCartButton = styled.button`
  margin-top: 16px;
  background-color: ${cores.fuccia};
  color: ${cores.branca};
  font-size: 16px;
  font-weight: bold;
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: ${cores.colorBody};
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 10px 20px;
  }
`
export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, auto);
  gap: 45px;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`
export const Container = styled.div`
  max-width: 1024px;
  height: auto;
  margin: auto;
  background-color: ${cores.branca};
  padding: 20px;

  @media (max-width: 768px) {
    padding: 12px;
  }
`
