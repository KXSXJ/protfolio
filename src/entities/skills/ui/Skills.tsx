import styled from "@emotion/styled";
import {theme} from "../../../shared/styles/theme";
import {useEffect, useRef, useState} from "react";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

export const Skills:React.FC= ()=>{
    const [text,setText] = useState<string>('SKILLS')
    const sectionRef = useRef<HTMLTableSectionElement|null>(null)


    return(
        <Skills_Container ref={sectionRef}>
            <h1>{text}</h1>
            <Skill_Wrapper>
                <h2>STRENGTH</h2>
            </Skill_Wrapper>
            <Skill_Wrapper  style={{justifyContent:'right'}}>
                <h2>KNOWLEDGEABLE</h2>
            </Skill_Wrapper>
        </Skills_Container>
    )
}

const Skills_Container = styled.section`
    width: 100%;
    padding-block: 4rem;
    color: ${theme.color.white};
    align-items: center;
    display: flex;
    flex-direction: column;
    background-color: ${theme.color.black};
    height: 100vh;
`

const Skill_Wrapper = styled.div`
    width: 100%;
    height: 40rem;
    margin-top: 2rem;
    padding: 2rem;
    display: flex;
    box-sizing: border-box;
`