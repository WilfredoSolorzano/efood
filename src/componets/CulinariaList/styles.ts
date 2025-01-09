import styled from 'styled-components'
import { cores } from '../../styled'

export const Container = styled.section`
  max-width: 1024px;
  height: 1290px;
  margin: auto;
  background-color: ${cores.branca};

  @media (max-width: 768px) {
    padding: 15px;
    height: auto;
  }

  @media (max-width: 480px) {
    padding: 10px;
    height: auto;
  }
`
export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px 80px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  @media (max-width: 480px) {
    gap: 20px;
  }
`
export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 15px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    margin-bottom: 10px;
  }
`
