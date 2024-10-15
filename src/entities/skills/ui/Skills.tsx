import styled from "@emotion/styled";
import {media, theme} from "../../../shared/styles/theme";
import {useEffect, useRef, useState} from "react";
import {StrengthData} from "../model/StrengthData";
import {Skill_Item} from "./Skill_Item";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {Experience} from "./Experience";
import {KnowledgeData} from "../model/KnowledgeData";

export const Skills:React.FC= ()=>{
    const sectionRef = useRef<HTMLTableSectionElement|null>(null)
    const strengthRef = useRef<(HTMLLIElement | null)[][]>(Array.from({length:StrengthData.length},()=>[]))
    const knowledgeableRef = useRef<(HTMLLIElement | null)[]>([])
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        strengthRef.current.forEach((elList) => {
            const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: elList[0],
                    start: 'top bottom',
                    end :'top 70%',
                    toggleActions: 'play none none none',
                    scrub: 1,
                },
            });

            elList.forEach((el) => {
                if (el) {
                    timeline.fromTo(
                        el,
                        {
                            opacity: 0,
                            y: 20,
                        },
                        {
                            opacity: 1,
                            y: 0,
                            duration: 0.4,
                        }
                    );
                }
            });

        });

        const timeline2 = gsap.timeline({
            scrollTrigger: {
                trigger: knowledgeableRef.current[0],
                start: 'top bottom',
                end :'top 85%',
                toggleActions: 'play none none none',
                scrub: 1,
            },
        });
        knowledgeableRef.current.forEach((el)=>{
            if(el){
                timeline2.fromTo(
                    el,{
                        opacity:0,
                        y:20,
                    },{
                        opacity:1,
                        y:0,
                        duration:0.4,
                    }
                )
            }
        })



    }, []);

    return(
        <Skills_Container ref={sectionRef} id="Skills">
            <Skill_Wrapper>
                <h2 style={{color:theme.color.red}}>STRENGTH</h2>
                <Grid_Container>
                    {StrengthData.map(({title, lineNum, list},rIdx)=>(
                        <Grid_Wrapper $lineNum={lineNum} key={title}>
                            <h3> {title}</h3>
                            <ul>

                                {list.map(({_skills},cIdx)=> (
                                    <span key={cIdx}>
                                        {lineNum===cIdx+1 &&<li></li>}
                                        <li ref={(el)=> {
                                            strengthRef.current[rIdx][cIdx] = el
                                        }}>
                                            <Skill_Item _skills={_skills}/>
                                        </li>
                                    </span>
                                ))}
                            </ul>
                        </Grid_Wrapper>
                    ))}
                </Grid_Container>
            </Skill_Wrapper>
            <Skill_Wrapper>
                <h2 style={{marginBlock:'1rem', color:theme.color.lightBlue}}>{KnowledgeData.title}</h2>
                <Grid_Wrapper $lineNum={KnowledgeData.lineNum}>
                    <ul>
                        {KnowledgeData.list.map(({_skills},idx)=>
                            <span key={idx}>
                                {KnowledgeData.lineNum === idx + 1 && <li></li>}
                                <li ref={(el)=>{knowledgeableRef.current[idx] =el}}>
                                    <Skill_Item _skills={_skills}/>
                                </li>
                            </span>
                        )}
                    </ul>
                </Grid_Wrapper>
            </Skill_Wrapper>
            <Skill_Wrapper>
                <Experience/>
            </Skill_Wrapper>
        </Skills_Container>
    )
}

const Skills_Container = styled.section`
    width: 100%;
    padding-block:10rem;
    color: ${theme.color.white};
    display: flex;
    flex-direction: column;
    background-color: ${theme.color.black};
    h1{
        margin-left: 5rem;
    }
`

const Skill_Wrapper = styled.section`
    width: 100%;
    padding-inline: 5rem;
    margin-block: 2rem;
    box-sizing: border-box;
`

const Grid_Container = styled.article`
    display: grid;
    grid-template-columns: repeat(2, auto); /* 3열의 그리드 설정 */
    grid-column-gap: 4rem;
    grid-row-gap: 2rem;
    justify-content: left;
    ${media.tablet} {
        grid-template-columns: 1fr; 
    }
    ${media.mobile} {
        grid-template-columns: 1fr; 
    }
}
`
const Grid_Wrapper = styled.div<{$lineNum:number}>`
    grid-auto-flow: dense;
    
    ul{
        display: flex;
        flex-wrap: wrap; /* 줄바꿈 허용 */
        li{
            width: fit-content;
            margin:0.2rem;
            &:nth-of-type(${props=>props.$lineNum}) {
                flex-basis: 100%; //원하는 라인부터 줄넘김
            }
        }
    }
    
    h3{
        margin-block: 1rem;
    }
`
