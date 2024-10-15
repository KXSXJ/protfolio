import styled from "@emotion/styled";
import {theme} from "../../shared/styles/theme";

export const Footer :React.FC = ()=>{
    return(
        <Footer_Container>
            © 2024. Kang Seung Jae. All rights reserved.
        </Footer_Container>
    )
}
const Footer_Container= styled.footer`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-block: 5rem;
    background-color: ${theme.color.black};
`
