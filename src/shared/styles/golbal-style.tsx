import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";
import { media } from "./theme";

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');

    ${reset}

    :focus {
        outline: none;
        border: none;
    }

    
    div[role="button"] {
        cursor: pointer;
    }
    html{
        font-family: "Open Sans", sans-serif;
        color: ${({ theme }) => theme.color.white};
        scroll-behavior: smooth;
        ${media.laptop} {
            font-size: 14px; 
        }

        ${media.tablet} {
            font-size: 11px;
        }

        ${media.mobile} {
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
        height: 100vh;
        position: fixed;
        z-index: 0;
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
    h1{
        font-size: 4rem;
        min-font-size: 100px;
        font-weight: 600;

    }
    h2{
        font-size: 3rem;
        font-weight: 600;
    }
    h3{
        font-size: 2rem;
        font-weight: 600;
    }
    
    p{
        font-size: 1.5rem;
        padding-block: 0.1rem;
        line-height: 2rem;
    }
    a{
        font-size: 1.5rem;
        padding-block: 0.1rem;
        cursor: pointer;
        margin-left: 0.2rem;
    }
    i{
        font-size: 1.6rem;
        margin-inline: 0.4rem;
    }
`;
