import styled from "@emotion/styled";
import {media, theme} from "../../../shared/styles/theme";
import {ExperienceData} from "./SkillsData";
import {Skill_Item} from "./Skill_Item";
import {useEffect, useRef} from "react";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

export const Experience :React.FC =()=>{
    const sectionsRef = useRef<(HTMLElement | null)[]>([]);

    useEffect(() => {
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: sectionsRef.current[0],
                start: "top 80%",
                end: "top 30%",
                toggleActions: "play none none none",
                scrub: 2,
            },
            duration: 0.4,
            ease: "power2.inOut",
        });

        sectionsRef.current.forEach((el) => {

            if (el) {
                timeline.fromTo(
                    el,
                    {
                        rotateY: 90,
                        opacity: 0,
                    },
                    {
                        rotateY: 0,
                        opacity: 1,
                    }
                );
            }
        });
    }, []);
    return(
        <Experience_Container>
            <h2>EXPERIENCE</h2>
            <Grid_Container className='grid'>
                {ExperienceData.map(({title,_skills,content},idx)=>(
                    <section key={title} ref={(el)=> {
                        sectionsRef.current[idx] = el
                    }}>
                        <div>
                            <Skill_Item _skills={_skills}/>
                        </div>
                        <ul>
                            {content.map((text)=>(
                                <li>
                                    {text}
                                </li>
                            ))}
                        </ul>
                    </section>
                ))}
            </Grid_Container>
        </Experience_Container>
    )
}

export const Experience_Container =styled.div`
    margin-top: 7rem;
    h2{
        color:${theme.color.neonGreen}
    }
`

const Grid_Container = styled.article`
    margin-top: 3rem;
    section {
        padding: 3rem;
        display: flex;
        flex-direction: column;
        justify-items: center;
        border-radius: 5px;
        border: 1px solid ${theme.color.white};
        perspective: 1000px; 
        transform-style: preserve-3d;
        
        div{
            position: absolute;
            margin: -1.7rem;
            margin-left: -2.3rem;
            transform: rotate(-5deg);
        }
    }
    ul {
        li {
            color: ${theme.color.white};
            line-height: 1.5rem;
            list-style-type: disc; /* 불릿 스타일 */
            margin-block: 0.4rem;
            font-weight: 700;
        }
    }
}
`