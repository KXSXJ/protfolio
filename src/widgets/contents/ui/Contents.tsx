import React from 'react';
import styled from "@emotion/styled";
import {AboutMe} from "../../../features/aboutMe";

const Content_Container = styled.main`
    width: 100%;
    height: 100%;
    display: block;
    position: relative;
    z-index: 1;
`

export const Contents:React.FC =()=>{
    return(
        <Content_Container>
            <AboutMe/>
        </Content_Container>
    )
}