import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    html, body {
      min-height: 100vh;
      background-color: hsl(240, 78%, 98%);
      background-image:  url('/bg-top.svg'),
       url('/bg-bottom.svg');
      background-repeat: no-repeat;
      background-position: right top, left bottom;
      @media (max-width: 515px) {
        background-position: 180px -32px, 0 bottom ;

      }
    }
    #root {
      font-family: 'Barlow Semi Condensed', sans-serif;
      font-weight: 700;
      max-width: 1200px;
      padding: 60px 20px;
      text-align: center;
      margin: 0 auto;
    }
  `;
