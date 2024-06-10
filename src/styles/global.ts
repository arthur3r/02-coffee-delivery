import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  :focus {
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.purple};
    border-radius: 6px;
  }

  body {
    -webkit-font-smoothing: antialiased;
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme['base-text']};
  }
  
  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-weight: 400;
  }

  ::-webkit-scrollbar {
      width: 8px;
      height: 8px;
    }
    
    ::-webkit-scrollbar-track {
      background: ${({ theme }) => theme['base-button']};
      border-radius: 10px;
    }
    
    ::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.purple};
      border-radius: 10px;
    }
    
    ::-webkit-scrollbar-thumb:hover {
      background: ${({ theme }) => theme['purple-dark']};
    }
`
