import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
	*::-webkit-scrollbar {
    width: .5rem;
		height: .5rem;
  }
  *::-webkit-scrollbar-track {
    background: transparent;
  }
	*::-webkit-scrollbar-corner{
		display: none;
	}
  *::-webkit-scrollbar-thumb {
    background-color: #00875F;
    border-radius: 10px;
    border: 3px solid transparent;
  }
  * {
	  margin: 0;
	  padding: 0;
	  border: 0;
	  font-size: 100%;
	  box-sizing: border-box;
	  -webkit-font-smoothing: antialiased;
	  -moz-osx-font-smoothing: grayscale;
  }
	:focus {
		outline: 0;
		box-shadow: 0 0 0 2px #00875F;
	}
  body {
	  background: #121214;
    color: #C4C4CC;
		-webkit-font-smoothing: antialiased;
  }
	body, input, textarea, button {
		font-family: 'Roboto', sans-serif;
		font-weight: 400;
		font-size: 1rem;
	}
`
