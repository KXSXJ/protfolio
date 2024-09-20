import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {theme} from "../../../shared/styles/theme";
import './BackGroundStyled.scss'
export const BackGround = () => {
    const [bgColor, setBgColor] = useState<string>(theme.color.black);

    useEffect(() => {
        window.addEventListener("scroll", () => {
             setBgColor(theme.color.black);
        });
    }, []);

    return (
        <Container bgColor={bgColor}>
            {bgColor === theme.color.black && (
                <>
                    <div className="stars" />
                    <div className="stars2" />
                    <div className="stars3" />
                </>
            )}
        </Container>
    );
};

const Container = styled.div<{ bgColor: string }>`
  background-color: ${({ bgColor }) => bgColor};
  transition: 0.2s;
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
`;

