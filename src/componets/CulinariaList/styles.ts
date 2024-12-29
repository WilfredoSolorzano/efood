import styled from 'styled-components'
import { cores } from '../../styled'

export const Container = styled.section`
  max-width: 1024px;
  height: 1290px;
  margin: auto;
  background-color: ${cores.branca};
`
export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
`
export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
`
