import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";
import { media } from "./theme";

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz@0,14..32;1,14..32&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
    ${reset}

    :focus {
        outline: none;
        border: none;
    }

    
    div[role="button"] {
        cursor: pointer;
    }
    html{
        font-family: "Roboto", sans-serif;
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
    .grid{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 3rem;
        justify-content: start;
        ${media.tablet} {
            grid-template-columns: 1fr;
        }
        ${media.mobile} {
            grid-template-columns: 1fr;
        }
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
        font-weight: 750;

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
