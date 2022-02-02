import styled, {createGlobalStyle} from "styled-components";
import BACK from './images/back.jpg'

export const GlobalStyle = createGlobalStyle`
    html{
        height:100%
    }
    
    body{
        background-image: url(${BACK});
        background-size: cover;
        margin:0;
        padding: 0;
        display: flex;
        justify-content: center;
        background-attachment: fixed;
    }

    *{
        box-sizing: border-box;
        font-family: 'cairo' , 'sans-serif'
    }
      .container {
    padding-left: 15px;
    padding-right: 15px;
    margin-left: auto;
    margin-right: auto;
  }
  /* Small */
  @media (min-width: 768px) {
    .container {
      width: 750px;
    }
  }
  /* Medium */
  @media (min-width: 992px) {
    .container {
      width: 970px;
    }
  }
  /* Large */
  @media (min-width: 1200px) {
    .container {
      width: 1170px;
    }
  }
`

export const Wrapper = styled.div`
    
    display:flex;
    flex-direction:column;
    align-items:center;

    > p {
        color: #fff;
    }

    .score{
        color:#fff;
        font-size: 2rem;
        margin: 0;
    }

    h1{
        background-size:100%;
        background-image: linear-gradient(270deg ,#009688 ,#4caf50);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        -moz-background-clip: text;
        -moz-text-fill-color: transparent;
        filter: drop-shadow(2px 2px #0085a3);
        font-size:70px;
        margin : 20px;
        text-align: center;

    }
    .start, .next {
        cursor: pointer;
        background: linear-gradient(180deg, #4caf50, #009688);
        border: 2px solid #d38558;
        box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
        height: 40px;
        margin: 20px 0;
        padding: 0 40px;
        border:none;
    }
    .start {
        max-width: 200px;

`