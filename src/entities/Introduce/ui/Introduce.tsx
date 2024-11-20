import {media, theme} from "../../../shared/styles/theme";
import styled from "@emotion/styled";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useEffect, useRef} from "react";
import {keyframes} from "@emotion/react";

export const Introduce :React.FC = ()=>{
    const textRef = useRef<HTMLHeadingElement|null>(null)
    const subTextRef = useRef<HTMLParagraphElement|null>(null)
    const sectionRef = useRef<HTMLTableSectionElement|null>(null)
    const textRef2 = useRef<HTMLHeadingElement|null>(null)
    const subTextRef2 = useRef<HTMLParagraphElement|null>(null)
    const contentRef = useRef<HTMLDivElement|null>(null)
    const moreViewRef = useRef<HTMLDivElement|null>(null)
    const gideTextRef = useRef<HTMLDivElement|null>(null)

    gsap.registerPlugin(ScrollTrigger);
    useEffect(() => {
        const config = {
            scrollTrigger: {
                trigger: sectionRef.current as HTMLTableSectionElement,
                start: 'center 200%',
                end : 'center 130%',
                toggleActions: "play none none none",
                scrub: true,
            },
            fontSize:'9rem',
            duration: 2, // 1초 동안 애니메이션 지속

        };

        gsap.timeline()
           .to(textRef.current,
            config)
            .to(subTextRef.current, {
                ...config,
                fontSize:'2.7rem'
            })
            .to(subTextRef.current,
            {scrollTrigger:{
                    trigger:sectionRef.current as HTMLTableSectionElement,
                    start: 'center 130%',
                    end : 'center 80%',
                    toggleActions: "play none none none",
                    scrub: true,
                },
                opacity:0,
                duration:1,
            })
            .to(textRef.current,
            {scrollTrigger:{
                    trigger:sectionRef.current as HTMLTableSectionElement,
                    start: 'center 110%',
                    end : 'center 70%',
                    toggleActions: "play none none none",
                    scrub: true,
                },
                opacity:0,
                duration:1,
            })

        const config2 ={
            scrollTrigger:{
                trigger: sectionRef.current as HTMLTableSectionElement,
                start: 'center 75%',
                end : 'center 40%',
                toggleActions: "play none none none",
                scrub: true,
            },
            opacity:1,
            y: '-10rem'
        }

        gsap.fromTo(textRef2.current,
            {y:0},
            {...config2,
            }
        )
        gsap.fromTo(subTextRef2.current,
            {y:0},
            {...config2,
                scrollTrigger:{
                ...config2.scrollTrigger,
                    start: 'center 65%',
                    end : 'center 30%',
                },
            })
        gsap.fromTo(moreViewRef.current,
            {y:0},
            {...config2,
                scrollTrigger:{
                    ...config2.scrollTrigger,
                    start: 'center 20%',
                    end : 'center 0%',

                },
                y:0,
                duration:2,
            })

        gsap.to(moreViewRef.current,
            {scrollTrigger:{
                    trigger:sectionRef.current as HTMLTableSectionElement,
                    start : 'bottom 68%',
                    end : 'bottom 60%',
                    toggleActions: "play none none none",
                    scrub: true,
                },
                y:'-4rem',
                opacity:0
            }
        )
        gsap.to(contentRef.current,
            {scrollTrigger:{
                    trigger:sectionRef.current as HTMLTableSectionElement,
                    start : 'bottom 60%',
                    end : 'bottom -40%',
                    toggleActions: "play none none none",
                    scrub: true,
                },
                y:`-65vh`,
                zIndex:0
            }
        )
        gsap.to(gideTextRef.current,
            {scrollTrigger:{
                    trigger:sectionRef.current as HTMLTableSectionElement,
                    start : 'bottom 70%',
                    end : 'bottom 45%',
                    toggleActions: "play none none none",
                    scrub: true,
                },
                opacity:0
            })

    }, []);
    return(
        <Introduce_container>
            <section ref={sectionRef}>
                <Gide_Text ref={gideTextRef}>
                    ↓ 스크롤하여 진행해주세요!
                </Gide_Text>

                <Introduce_TextWrapper ref={contentRef}>
                    <h1 ref={textRef}>안녕하세요!</h1>
                    <p ref={subTextRef}>FE개발자 강승재입니다.</p>
                    <h1 ref={textRef2} style={{opacity: 0}}>FE개발자 강승재</h1>
                    <p ref={subTextRef2} style={{opacity: 0, fontSize: '1.5rem'}}>
                        변화를 두려워하지 않는 개발자입니다. <br/>
                        변화하는 트렌드에 맞춰 지속적으로 성장하고 싶습니다.
                    </p>
                    <div className="moreView" ref={moreViewRef}>
                        <a href={"#About"}>
                            더 알아보기 ↓
                        </a>

                    </div>
                </Introduce_TextWrapper>
            </section>

        </Introduce_container>
    )
}


const Introduce_container = styled.div`
    width: 100%;
    padding-top: 5rem;
    height: auto;
    background-color: ${theme.color.black};
    
    section {
        width: 100%;
        height: 350vh;
        ${media.mobile}{
            height: 320vh;
        }
    }
    position: relative;
    z-index: 2;
`

const Introduce_TextWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    position: fixed;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: -5rem;
    z-index: 2;
    h1{
        font-size: 5rem;
        white-space: nowrap;
    }
    p{
        margin-top: 1rem;
        font-size: 2rem;
        text-align: center;
    }
    .moreView{
        a{
            font-size: 1.2rem;
            
        }
        
        padding:1rem;
        padding-inline: 1.5rem;
        border: 1px solid ${theme.color.white}77;
        border-radius: 30px;
        margin-top: -5rem;
        opacity: 0;
        &:hover{
            color: ${theme.color.white}77;
            border-color: ${theme.color.white}77 ;
        }
    }
`

const floating = keyframes`
  0% {
    transform: translate(-50%, -50%) translateY(0);
  }
  50% {
    transform: translate(-50%, -50%) translateY(-0.5rem);
  }
  100% {
    transform: translate(-50%, -50%) translateY(0);
  }
`;

const Gide_Text = styled.h3`
    display: flex;
    position: fixed;
    font-size:1rem;
    top: 25%;       /* 화면의 세로 중앙 */
    left: 50%;      /* 화면의 가로 중앙 */
    transform: translate(-50%, -50%);  /* 중앙에서 정확히 정렬 */
    animation: ${floating} 3s ease-in-out infinite; /* 둥둥 떠다니는 애니메이션 */
`
