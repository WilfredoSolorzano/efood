import styled from 'styled-components'
import { colors } from '../../styled'

export const Card = styled.div`
  background-color: ${colors.white};
  border: solid 1px ${colors.fuchsia};
  color: ${colors.fuchsia};

  .ContainerTop {
    display: flex;
    justify-content: space-between;
    padding: 4px;
    align-items: center;
  }
  position: relative;
`
export const PhotoRestaurant = styled.img`
  width: 100%;
  height: 217px;
  object-fit: cover;
`
export const Title = styled.h3`
  font-size: 18px;
  font-weight: bold;
  line-height: 21.09px;
`
export const Description = styled.p`
  font-size: 14px;
  font-weight: 400;
  margin-right: 8px;
  margin-left: 8px;
`
export const Infos = styled.div`
  h3 {
    font-size: 18px;
    font-weight: 700;
    margin-top: 8px;
    margin-right: 8px;
  }
  img {
    width: 20px;
    height: 20px;
  }
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: auto;
`
export const Categories = styled.div`
  position: absolute;
  top: 0;
  right: 16px;
  padding-top: 2px;
  padding-bottom: 4px;
}

`
