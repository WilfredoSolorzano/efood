import styled from 'styled-components'

export const CarouselContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 20px 0;
  margin-top: 60px;
`

export const SlideImage = styled.img`
  width: 100%;
  height: 472px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`
export const Button = styled.button`
  position: absolute;
  top: 120%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  border: none;
  color: white;
  font-size: 24px;
  padding: 10px;
  cursor: pointer;
  z-index: 10;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
`

export const PrevButton = styled(Button)`
  left: 10px;
`

export const NextButton = styled(Button)`
  right: 10px;
`
