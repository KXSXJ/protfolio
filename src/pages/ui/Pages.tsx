import { Header } from "../../widgets/header";
import {Contents} from "../../widgets/contents"
import React from 'react';
import styled from "@emotion/styled";
import {BackGround} from "../../entities/background";

const Container = styled.div`
    width: 100%;
    overflow-x: hidden;
    overflow-y: auto;
`;
export const Pages :React.FC =()=> {
    return (
        <Container>
            <BackGround/>
            <Header/>
            <Contents/>
        </Container>
    );
}

