import styled from "@emotion/styled";
import {media, theme} from "../../../shared/styles/theme";
import {useEffect, useRef} from "react";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

export const AboutMe :React.FC = ()=>{
    // const sectionRef = useRef<HTMLTableSectionElement|null>(null)
    // gsap.registerPlugin(ScrollTrigger);
    // useEffect(() => {
    //     const config = {
    //         scrollTrigger: {
    //             trigger: sectionRef.current as HTMLTableSectionElement,
    //             start: 'bottom 40%',
    //             end: 'bottom 10%',
    //             toggleActions: "play none none none",
    //             scrub: true,
    //             markers:true
    //         },
    //         backgroundColor:theme.color.black,
    //         duration: 1// 애니메이션 지속 시간
    //     };
    //     gsap.to(sectionRef.current,
    //         config)
    // },[])
    return(
        <AboutMe_Container >
            <h1>ABOUT ME</h1>
            <br/>
            <br/>
            <Grid_Box>
                <Info_Box>
                    <Icon_Wrapper>
                        <i className="fi fi-rc-cake-birthday"></i>
                    </Icon_Wrapper>
                    <div style={{marginLeft: '1rem'}}>
                        <h4>생년월일</h4>
                        <h5>2000.03.03</h5>
                    </div>
                </Info_Box>
                <Info_Box>
                    <Icon_Wrapper>
                        <i className="bi bi-pencil"></i>
                    </Icon_Wrapper>
                    <div style={{marginLeft: '1rem'}}>
                        <h4>학력</h4>
                        <h5>동양미래대학교</h5>
                        <h6>컴퓨터 정보공학과</h6>
                    </div>
                </Info_Box>
                <Info_Box>
                    <Icon_Wrapper>
                        <i className="bi bi-envelope"></i>
                    </Icon_Wrapper>
                    <div style={{marginLeft: '1rem'}}>
                        <h4>이메일</h4>
                        <h5>dysj12@gmail.com</h5>
                    </div>
                </Info_Box>
                <Info_Box>
                    <Icon_Wrapper>
                        <i className="bi bi-telephone"></i>
                    </Icon_Wrapper>
                    <div style={{marginLeft: '1rem'}}>
                        <h4>연락처</h4>
                        <h5>010-4488-6977</h5>
                    </div>
                </Info_Box>
            </Grid_Box>
            <hr></hr>
            <p>꾸준한 성장과 프론트 기반 지식 확장 및 지식에 대한 열망이 있습니다. </p>

        </AboutMe_Container>
    )
}

const AboutMe_Container = styled.div`
    width: 100%;
    padding-block: 4rem;
    color: ${theme.color.black};
    display: flex;
    flex-direction: column;
    align-items: center;
    h1{
        font-weight: 750;
    }
    p{
        margin-top: 1rem;
        color: ${theme.color.black}77;
        font-weight: 700;
        ${media.tablet} {
            font-size: 1.2rem;
        }

        ${media.mobile} {
            font-size: 1rem;
        }
    }
    hr{
        width: 50rem;
        height: 2px;
        margin-block: 2rem;
        background-color: ${theme.color.black}40;
        border:none;
        ${media.laptop} {
            width: 50rem;
        }

        ${media.tablet} {
            width: 40rem;
        }

        ${media.mobile} {
            width: 35rem;
        }
    }
`

const Info_Box = styled.div`
    width:20rem;
    height:5rem;
    padding: 1rem;
    display: flex;
    flex-direction: row;
    box-sizing: border-box;
    border-radius: 5px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* 그림자 효과 */
    align-items: center;
    h4{
        font-size: 1.2rem;
        font-weight: 700;
    }
    h5{
        color: inherit;
        margin-top: 0.3rem;
        font-weight: 550;
    }
    h6{
        color: inherit;
        font-size: 0.8rem;
        margin-top: 0.1rem;
        font-weight: 550;
    }
    //
    //cursor: pointer;
`
const Icon_Wrapper = styled.div`
    width: 3rem;
    height: 3rem;
    background-color: ${theme.color.black};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    i{
        color: ${theme.color.white};
    }
`

const Grid_Box = styled.div`
    display: grid;
    justify-content: center; /* 가운데 정렬 */
    grid-template-columns: repeat(2, 1fr); /* 기본 2줄 */
    grid-gap: 1rem;

    div {
        margin: 0.1rem;
    }

    /* 모바일 모드: 화면 너비 600px 이하일 때 1줄씩 */
    ${media.mobile} {
        grid-template-columns: 1fr; /* 1줄 */
    }
`;
