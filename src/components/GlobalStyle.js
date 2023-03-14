import { createGlobalStyle } from "styled-components";
import 'modern-normalize'; /* bring in normalize.css styles */

export const GlobalStyle = createGlobalStyle`
  body {
    height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 40px;
        color: rgba(255,255,255, 1);
        margin: 0;
        background-color: rgba(226,135,67, 0.8);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  }

  li {
    list-style: none;
  }
    `;