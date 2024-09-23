import {useState, useEffect, useRef} from 'react';
import styled from "@emotion/styled";
import React from "react";
import {theme} from "../../../shared/styles/theme";

const Blink_Text = styled.h1`
    font-weight: 550;
    display: flex;
    position: relative;
    z-index: 2;
    color: ${theme.color.white};
    margin-left: 2px;
    margin-top: -4px;
    font-size: 2.5vw;
    
    
    animation: blink-caret 1s step-end infinite;
    @keyframes blink-caret {
        from, to { color: transparent; }
        50% { color:  ${theme.color.white} }
    }
`
const Write_Text = styled.h1`
    color: ${theme.color.white};
    font-size: 2.5vw;
    font-weight: 550;
    display: flex;
    position: relative;
    z-index: 1;
`



export const TypingTitle:React.FC = () => {
    const intervalRef = useRef<NodeJS.Timeout>()
    const [title, setTitle] = useState('');
    const [count, setCount] = useState(0);
    const completionWord = '주니어 개발자 강승재의 포트폴리오 입니다.';
    

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setTitle((prevTitleValue) => {
                let result =  prevTitleValue ? prevTitleValue + completionWord[count] : completionWord[0];
                setCount(count + 1);
                return result;
            });
        }, 80);

        return () => {
            if(intervalRef.current){
                clearInterval(intervalRef.current);
            }
        };
    });
    useEffect(() => {
        if(count >= completionWord.length){
            clearInterval(intervalRef.current);
        }
    }, [count]);

    

    return (
        <>
            <Write_Text>{title}</Write_Text>
            <Blink_Text>|</Blink_Text>
        </>
    );
};