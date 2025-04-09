import { createGlobalStyle } from 'styled-components'

export const colors = {
  white: '#FFFFFF',
  black: '#111',
  fuchsia: '#E66767',
  pink: '#FFEBD9',
  golden: '#FFB930',
  roseLaor: 'rgb(230, 103, 103)',
  bisque: 'bisque',
  clear: '#FFF8F2',
  gray: '#666'
}
export const breakpoints = {
  desktop: '1024px',
  tablet: '821px',
  mobile: '430px',
  iphone11: '414px'
}

export const GlobalCss = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

    body {
    font-family: 'Roboto',sans-serif;
    line-height: 1.5;
    background-color: ${colors.white};
    color: ${colors.black};

    h2{
        margin: 25px 0;
    }
    @media (max-width: 768px) {
    padding: 12px;
    h2 {
      font-size: 20px;
    }
  }
  }
    .container{
    max-width: 2031.81px;
    width: 100%;
    margin:0;
    }

    .container2{
    max-width: 1024px;
    margin: 0px auto;
    padding: 0px 16px;
    border: 1px solid #000;
    }
`
