import { createGlobalStyle } from 'styled-components'

export const cores = {
  branca: '#FFFFFF',
  preta: '#111',
  fuccia: '#E66767',
  textBotoes: '#FFEBD9',
  dourado: '#FFB930',
  colorBody: 'rgb(230, 103, 103)',
  colorFundo: 'bisque',
  Claro: '#FFF8F2'
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
    background-color: ${cores.branca};
    color: ${cores.preta};

    h2{
    color: ${cores.fuccia};
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
