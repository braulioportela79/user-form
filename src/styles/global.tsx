import { createGlobalStyle } from "styled-components";

export const ThemeColors = {
  colors: {
    white: "#FFFFFF",
    black: "#000000",
    lightGrey: "#c5c5c5",
    darkGrey: "#8C98A9",
    purple: "#5357B1",
    green: "#00AE63",
  },
};

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }

    button {
        cursor: pointer;
        background: transparent;
        border: none;
    }

    ul, ol {
        padding: 0;
        margin: 0;
        list-style: none;
    }

    li {
        list-style: none;
    }

    input {
		outline: none;
	}

	a {
		text-decoration: none;
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	p {
		margin: 0;
		padding: 0;
	}
`;
