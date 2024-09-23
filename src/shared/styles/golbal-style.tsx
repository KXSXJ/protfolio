import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";
import { media } from "./theme";

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');

    ${reset}
    ::-webkit-scrollbar { 
        display: none !important;
    }
    :focus {
        outline: none;
        border: none;
    }
    body{
        font-family: "Open Sans", sans-serif;
    }
    
    div[role="button"] {
        cursor: pointer;
    }
    html{
        font-family: "Montserrat", sans-serif;
        color: ${({ theme }) => theme.color.gray};
        scroll-behavior: smooth;
        ${media.mobile}{
            font-size: 8px;
        }
    }
    .flex{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .fixed{
        width: 100%;
        top: 0;
        left: 0;
        height: 100vh;
        position: fixed;
    }
    .pageView{
        width: 100%;
        height: 100vh;
    }

    .pc-only{
        ${media.mobile}{
            display: none;
        }
    }
    .mobile-only{
        display: none;
        ${media.mobile}{
            display: block;
        }
    }
`;
