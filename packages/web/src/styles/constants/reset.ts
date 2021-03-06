import { css } from "styled-components";

const reset = css`
  html {
    box-sizing: border-box;
    font-size: 16px;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ol,
  ul {
    margin: 0;
    padding: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
    box-sizing: border-box;
    font-weight: normal;
    font-smoothing: antialiaseit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ol,
  ul {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  body {
    @font-face {
      font-family: 'Inter';
      font-style:  normal;
      font-weight: 100;
      src: url("/fonts/Inter-Thin.woff2") format("woff2"),
           url("/fonts/Inter-Thin.woff") format("woff");
    }

    @font-face {
      font-family: 'Inter';
      font-style:  italic;
      font-weight: 100;
      src: url("/fonts/Inter-ThinItalic.woff2") format("woff2"),
           url("/fonts/Inter-ThinItalic.woff") format("woff");
    }
    
    @font-face {
      font-family: 'Inter';
      font-style:  normal;
      font-weight: 200;
      src: url("/fonts/Inter-ExtraLight.woff2") format("woff2"),
           url("/fonts/Inter-ExtraLight.woff") format("woff");
    }

    @font-face {
      font-family: 'Inter';
      font-style:  italic;
      font-weight: 200;
      src: url("/fonts/Inter-ExtraLightItalic.woff2") format("woff2"),
           url("/fonts/Inter-ExtraLightItalic.woff") format("woff");
    }
    
    @font-face {
      font-family: 'Inter';
      font-style:  normal;
      font-weight: 300;
      src: url("/fonts/Inter-Light.woff2") format("woff2"),
           url("/fonts/Inter-Light.woff") format("woff");
    }

    @font-face {
      font-family: 'Inter';
      font-style:  italic;
      font-weight: 300;
      src: url("/fonts/Inter-LightItalic.woff2") format("woff2"),
           url("/fonts/Inter-LightItalic.woff") format("woff");
    }
    
    @font-face {
      font-family: 'Inter';
      font-style:  normal;
      font-weight: 400;
      src: url("/fonts/Inter-Regular.woff2") format("woff2"),
           url("/fonts/Inter-Regular.woff") format("woff");
    }

    @font-face {
      font-family: 'Inter';
      font-style:  italic;
      font-weight: 400;
      src: url("/fonts/Inter-Italic.woff2") format("woff2"),
           url("/fonts/Inter-Italic.woff") format("woff");
    }
    
    @font-face {
      font-family: 'Inter';
      font-style:  normal;
      font-weight: 500;
      src: url("/fonts/Inter-Medium.woff2") format("woff2"),
           url("/fonts/Inter-Medium.woff") format("woff");
    }

    @font-face {
      font-family: 'Inter';
      font-style:  italic;
      font-weight: 500;
      src: url("/fonts/Inter-MediumItalic.woff2") format("woff2"),
           url("/fonts/Inter-MediumItalic.woff") format("woff");
    }
    
    @font-face {
      font-family: 'Inter';
      font-style:  normal;
      font-weight: 600;
      src: url("/fonts/Inter-SemiBold.woff2") format("woff2"),
           url("/fonts/Inter-SemiBold.woff") format("woff");
    }

    @font-face {
      font-family: 'Inter';
      font-style:  italic;
      font-weight: 600;
      src: url("/fonts/Inter-SemiBoldItalic.woff2") format("woff2"),
           url("/fonts/Inter-SemiBoldItalic.woff") format("woff");
    }
    
    @font-face {
      font-family: 'Inter';
      font-style:  normal;
      font-weight: 700;
      src: url("/fonts/Inter-Bold.woff2") format("woff2"),
           url("/fonts/Inter-Bold.woff") format("woff");
    }

    @font-face {
      font-family: 'Inter';
      font-style:  italic;
      font-weight: 700;
      src: url("/fonts/Inter-BoldItalic.woff2") format("woff2"),
           url("/fonts/Inter-BoldItalic.woff") format("woff");
    }
    
    @font-face {
      font-family: 'Inter';
      font-style:  normal;
      font-weight: 800;
      src: url("/fonts/Inter-ExtraBold.woff2") format("woff2"),
           url("/fonts/Inter-ExtraBold.woff") format("woff");
    }

    @font-face {
      font-family: 'Inter';
      font-style:  italic;
      font-weight: 800;
      src: url("/fonts/Inter-ExtraBoldItalic.woff2") format("woff2"),
           url("/fonts/Inter-ExtraBoldItalic.woff") format("woff");
    }
    
    @font-face {
      font-family: 'Inter';
      font-style:  normal;
      font-weight: 900;
      src: url("/fonts/Inter-Black.woff2") format("woff2"),
           url("/fonts/Inter-Black.woff") format("woff");
    }

    @font-face {
      font-family: 'Inter';
      font-style:  italic;
      font-weight: 900;
      src: url("/fonts/Inter-BlackItalic.woff2") format("woff2"),
           url("/fonts/Inter-BlackItalic.woff") format("woff");
    }
    
    @font-face {
      font-family: 'Inter var';
      font-weight: 100 900;
      font-style: normal;
      font-named-instance: 'Regular';
      src: url("/fonts/Inter-upright.var.woff2") format("woff2 supports variations(gvar)"),
           url("/fonts/Inter-upright.var.woff2") format("woff2-variations"),
           url("/fonts/Inter-upright.var.woff2") format("woff2");
    }
    @font-face {
      font-family: 'Inter var';
      font-weight: 100 900;
      font-style: italic;
      font-named-instance: 'Italic';
      src: url("/fonts/Inter-italic.var.woff2") format("woff2 supports variations(gvar)"),
           url("/fonts/Inter-italic.var.woff2") format("woff2-variations"),
           url("/fonts/Inter-italic.var.woff2") format("woff2");
    }
    
    @font-face {
      font-family: 'Inter var experimental';
      font-weight: 100 900;
      font-style: oblique 0deg 10deg;
      src: url("/fonts/Inter.var.woff2") format("woff2-variations"),
           url("/fonts/Inter.var.woff2") format("woff2");
    }    
  }  
`;

export default reset;
