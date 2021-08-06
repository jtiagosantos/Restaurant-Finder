import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        ::-webkit-scrollbar {
            width: 12px;               
            height: 12px;
        }

        *::-webkit-scrollbar-track {
            background: #ccc;        
        }

        *::-webkit-scrollbar-thumb {
            background-color: rgba(0, 0, 0, 0.7);    
            border-radius: 8px;       
        }
    }

    html, body, #root {
        height: 100%;
    }
`;