import styled from 'styled-components'

export const CarouselContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 20px 0;
  margin-top: 60px;

  @media (max-width: 768px) {
    padding: 10px 0;
    margin-top: 40px;
  }

  @media (max-width: 480px) {
    padding: 5px 0;
    margin-top: 20px;
  }
`

export const SlideImage = styled.img`
  width: 100%;
  height: 472px;
  object-fit: cover;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    height: 350px;
  }

  @media (max-width: 480px) {
    height: 200px; /*
  }
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
  @media (max-width: 768px) {
    font-size: 20px;
    padding: 8px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
    padding: 6px;
  }
`

export const PrevButton = styled(Button)`
  left: 10px;

  @media (max-width: 1000px) {
    display: none;
  }

  @media (max-width: 480px) {
    display: none;
  }
`

export const NextButton = styled(Button)`
  right: 10px;

  @media (max-width: 1000px) {
    display: none;
  }

  @media (max-width: 480px) {
    display: none;
  }
`
