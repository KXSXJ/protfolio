import {useState, useEffect, useRef} from 'react';
import styled from "@emotion/styled";
import React from "react";
import {theme} from "../../../shared/styles/theme";
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const TypingTitle:React.FC = () => {
    const intervalRef = useRef<NodeJS.Timeout>()
    const [title, setTitle] = useState('');
    const [count, setCount] = useState(0);
    const completionWord = '주니어 개발자 강승재의 포트폴리오 입니다.';
    const textRef = useRef<HTMLDivElement|null>(null);
    const startTriggerRef = useRef<HTMLDivElement|null>(null);


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

    gsap.registerPlugin(ScrollTrigger);
    useEffect(() => {
        const config = {
            scrollTrigger: {
                trigger: startTriggerRef.current as HTMLDivElement,
                start: "top 20%",
                toggleActions: "play none none none",
                scrub: 1,
            },
            x: 1200,
            duration: 1,
            opacity:0,
        }
        gsap.to(textRef.current as HTMLDivElement,config)


    }, []);


    return (
        <TextContainer ref={startTriggerRef}>
            <div className="text" ref={textRef}>
                <div>{title}</div>
                <div className="text__blink">|</div>
            </div>
        </TextContainer>
    );
};

const TextContainer = styled.section`
    display: flex;
    position: fixed;
    z-index: 9999;
    color: ${theme.color.white};
    font-weight: 700;
    font-size: 4.5vw;
    white-space: nowrap;
    @keyframes blink-caret {
        from, to { color: transparent; }
        50% { color:  ${theme.color.white} }
    }
    

    .text{
        display: flex;
        &__border {
            -webkit-text-stroke: 0.02em ${theme.color.blue}77;
        }

        &__blink{
            margin-top: -0.5vw;
            animation: blink-caret 1s step-end infinite;
        }
    }

    }
`