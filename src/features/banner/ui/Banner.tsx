import React from "react";
import styled from "@emotion/styled";
import {TypingTitle} from "../../../entities/banner";

const Banner_Container = styled.section`
    width: 100%;
    height: 100vh;
    overflow: hidden;
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`


export const Banner :React.FC =()=>{

    return(
        <>
            <Banner_Container className="flex fixed">
                <TypingTitle/>
            </Banner_Container>
        </>
    )
}