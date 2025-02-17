import styled from 'styled-components'

import { breakpoints, cores } from '../../styled'

export const PortadaContainer = styled.div`
  @media (max-width: ${breakpoints.mobile}) {
    height: 100%;
  }
  height: 280px;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  .container {
    position: relative;
    max-width: 1024px;
    margin: 0 auto;
    z-index: 1;

    @media (max-width: ${breakpoints.desktop}) {
      padding: 0 10px;
    }
  }
  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    content: '';
  }
`
export const CategoriaPortada = styled.p`
  color: ${cores.branca};
  font-size: 32px;
  font-weight: 100;
  padding-top: 25px;
`
export const PortadaPrato = styled.p`
  color: ${cores.branca};
  font-size: 32px;
  font-weight: 900;
  padding-top: 156.5px;
`
