import { createGlobalStyle } from 'styled-components'

export const cores = {
  branca: '#f4f4f4',
  preta: '#333',
  fuccia: '#E66767',
  textBotoes: '#FFEBD9',
  colorBody: 'rgb(230, 103, 103)',
  colorFundo: 'bisque'
}

export const GlobalCss = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

    body {
    font-family: 'Roboto',sans-serif;
    line-height: 1.6;
    background-color: ${cores.branca};
    color: ${cores.preta};

    h2{
    color: ${cores.fuccia};
    margin: 25px 0;
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
