import React from "react";
import styled from "@emotion/styled";
import {TypingTitle} from "../../../entities/banner";
import {theme} from "../../../shared/styles/theme";

const Banner_Container = styled.section`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`


export const Banner :React.FC =()=>{

    return(
        <>
            <Banner_Container>
                <TypingTitle/>
            </Banner_Container>

        </>
    )
}