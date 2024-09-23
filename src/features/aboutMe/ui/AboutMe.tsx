import React, {useEffect, useRef} from "react";
import styled from "@emotion/styled";
import {theme} from "../../../shared/styles/theme";
import {Profile} from "../../../entities/profile";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {css} from "@emotion/react";


export const AboutMe:React.FC=()=>{
    const startTriggerRef = useRef<HTMLTableSectionElement|null>(null);
    const textRef = useRef<HTMLHeadingElement|null>(null);
    const textRef2 = useRef<HTMLParagraphElement|null>(null);

    gsap.registerPlugin(ScrollTrigger);
    useEffect(() => {
        const config = {
            scrollTrigger: {
                trigger: startTriggerRef.current as HTMLTableSectionElement,
                start: 'top 80%',
                end: 'top 20%',
                toggleActions: "play none none none", // 첫 번째 "play" 이후 다른 트리거는 사용 안 함
                scrub: true, // 스크롤에 따라 애니메이션이 자연스럽게 진행됨
            },
            opacity: 1, // 애니메이션 목표값: opacity 1
            background: `linear-gradient(to top,${theme.color.black} 50%,transparent) 50%`,
            duration: 1, // 1초 동안 애니메이션 지속
        };

        gsap.to(
            startTriggerRef.current,
            config
        );

        const headConfig = {
            ease: 'none',
            scrollTrigger: {
                trigger: textRef.current as HTMLParagraphElement,
                start:'top 20%',
                end : 'top 10%',
                toggleActions: "play none none none", // 첫 번째 "play" 이후 다른 트리거는 사용 안 함
                scrub: true,
            },
            x: 0,
            duration: 1,
            color:theme.color.white,
        };
        gsap.to(
            textRef.current as HTMLHeadingElement,
            headConfig,
        )
        gsap.to(
            textRef2.current as HTMLParagraphElement,
            headConfig,
        )
    }, []);

    return(
        <Introduce_Container className="pageView" ref={startTriggerRef}>
            <Introduce_Title ref={textRef}>About Me</Introduce_Title>
            <Introduce_subTitle ref={textRef2}>Frontend Developer</Introduce_subTitle>
            <article className="wrapper">
                <Profile/>
            </article>
        </Introduce_Container>
    )

}


const Introduce_Container= styled.section`
    height: 100vh;
    padding: 2rem 0;
    box-sizing: border-box;
    position: absolute;
    z-index: 1;
    opacity: 0.5;
    background-color: linear-gradient(to top,${theme.color.black} 30%,transparent 70%);
    .wrapper{
        width: 100vw;
        margin: 2rem 0;
        box-sizing: border-box;
        height: 300px;
        position: absolute;
        color: ${theme.color.white};
        background-color: white;
    }
`

const commonStyles = css`
    position: relative;
    z-index: 1;
    color: transparent;
    margin-left: 5vw;
    font-weight: 600;
    x: -1500;
`;

const Introduce_Title = styled.h1`
    font-size: 4vw;
    ${commonStyles}
`;

const Introduce_subTitle = styled.p`
    font-size: 2vw;
    ${commonStyles}
`;