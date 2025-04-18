import styled from 'styled-components'
import { AddCartButton, SubmitCartButton } from '../Cart/style'
import { breakpoints, colors } from '../../styled'

export const DeliverContainer = styled.div`
  display: none;
  &.show {
    display: block;
  }

  .CEPNumber {
    display: flex;
    column-gap: 34px;
  }

  .buttomContainer {
    margin-top: 24px;
  }

  color: ${colors.pink};
  h2 {
    font-weight: 700;
    font-size: 16px;
    margin-bottom: 16px;
  }
  label {
    font-weight: 700;
    font-size: 14px;
  }
  &.show {
    display: block;
  }
  ${AddCartButton} {
    margin-top: 8px;
  }
`

export const Field = styled.div`
  display: block;
  width: 100%;
  input {
    width: 100%;
    padding: 8px;
    background-color: ${colors.pink};
    border: 1px solid ${colors.pink};
    margin: 8px 0;
  }
`

export const PaymentContainer = styled.div`
  p {
    font-size: 16px;
    font-weight: 700;
  }
  label {
    font-weight: 700;
    font-size: 14px;
  }
  color: ${colors.pink};
  display: none;
  &.show {
    display: block;
  }
  .buttomContainer {
    margin-top: 24px;
    ${SubmitCartButton} {
      margin-bottom: 8px;
    }
  }
  .fieldContainer {
    display: flex;
    column-gap: 34px;
    #cardNumber {
      width: 228px;
    }
    #mesVencimento {
      width: 155px;
    }
  }
  @media (max-width: ${breakpoints.tablet}) {
    .fieldContainer {
      display: block;
      column-gap: 34px;
      #cardNumber {
        width: 100%;
      }
      #mesVencimento {
        width: 100%;
      }
    }
  }
`

export const ConfirmedContainer = styled.div`
  color: ${colors.pink};
  display: none;
  &.show {
    display: block;
  }
  .buttomContainer {
    margin-top: 24px;
  }
  p {
    font-size: 14px;
    font-weight: 400;

    line-height: 22px;
  }
  h2 {
    font-size: 16px;
    font-weight: 700;
    line-height: 18.75px;
    margin-bottom: 8px;
  }
`
export const ErrorMessage = styled.small`
  color: ${colors.fuchsia};
  font-size: 0.75rem;
  margin-top: 4px;
  display: block;
`
