import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
	--off-white: #faf9f6; //bg
	--deep-slate: #1e1e2e; //bg dark
	--soft-indigo: #6c63ff; //primary
	--gentle-rose: #ff8fa3; //secondary
	--sky-blue: #4cc9f0; //accent 
	--black: #2d2d2d; //text
	--light-gray: #e6e6e6; //text
	--muted-gray: #a1a1aa; //neutral
	--muted-gray-transparent: #a1a1aab9; //neutral transparent
   --soft-green:	#73d957; //success
	--coral-red: #ff6b6b; //warning
	--entry-mask: linear-gradient( to bottom, var(--muted-gray-transparent), var(--muted-gray)
  );
}

*, *:before, *:after {
 box-sizing: inherit;  
}

*:focus {
	outline: none;
}

html {
	height: 100%;
	box-sizing: border-box;
}

body {
	height: 100%;
	background-color: var(--off-white);
	color: var(--black);
	margin: 0;
	padding: 0;
	font-family: "Roboto", 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	font-weight: 400;
	font-size: 16px;
}

img {
	display: block;
	width: 100%;
	height: auto;
}

a {
	text-decoration: none;
	color: inherit;
}

ul, ol {
  padding: 0;
	margin: 0;
	list-style: none;
}

h1,h2,h3,h4,h5,h6,p {
	margin: 0;
	padding: 0;
	font-weight: normal;
	line-height: 1.4;
	color: inherit
}

button {
	all: unset;
	display: inline-block;
	cursor: pointer;
	color: inherit;
	user-select: none;
	-webkit-tap-highlight-color: transparent;

	&:hover {
		color: var(--soft-indigo)
	}
}
 
.italic { 
	font-style: italic;
}

.maskIsHidden {
	background: var(--entry-mask)
}

.editor-image-container {
	display: flex;
	flex-wrap: wrap;
	flex-direction: row; 
}

.editor-image-container img {

}
`;

export default GlobalStyle;
