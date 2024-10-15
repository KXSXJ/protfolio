import React from "react";
import styled from "@emotion/styled";
import Main from "../pages/main";
import Header from "../pages/header";
import {Footer} from "../pages/footer";

export const PortFolio:React.FC =()=>{
    return(
        <Container>
            <Header/>
            <Main/>
            <Footer/>
        </Container>
    )

}
const Container = styled.div`
    width: 100%;
    overflow-x: hidden;
    overflow-y: auto;
`;