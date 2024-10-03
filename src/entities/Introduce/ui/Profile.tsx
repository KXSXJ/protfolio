import styled from "@emotion/styled";
import {theme} from "../../../shared/styles/theme";
import {useEffect, useRef} from "react";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

export const Profile :React.FC =()=>{
    const FigRef = useRef<HTMLElement|null>(null)

    gsap.registerPlugin(ScrollTrigger);
    useEffect(() => {
        const config = {
            scrollTrigger: {
                trigger: FigRef.current as HTMLElement,
                start: 'top 60%',
                end: 'top 10%',
                toggleActions: "play none none none",
                scrub: true,
            },
            opacity: 1, // 애니메이션 목표값: opacity 1
            duration: 1, // 1초 동안 애니메이션 지속
        };

        gsap.to(
            FigRef.current,
            config
        );


    }, []);
    return(
        <Container className="flex" ref={FigRef}>

        </Container>
    )
}

const Container = styled.figure`
    width: 100%;
    margin-top: 1rem;
    align-items: unset;
    justify-content: left;
    background-color: transparent;
    margin-left: 2rem;
    display: flex;
    opacity: 0;
`
