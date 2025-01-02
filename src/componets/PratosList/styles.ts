import styled from 'styled-components'
import { cores } from '../../styled'

export const Container = styled.section`
  max-width: 1024px;
  height: 1290px;
  margin: auto;
  background-color: ${cores.branca};

  @media (max-width: 768px) {
    height: auto;
  }

  @media (max-width: 480px) {
    height: auto;
  }
`
export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`
export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 20px;
    text-align: center;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`
