import React, {useEffect, useRef, useState} from "react";
import styled from "@emotion/styled";
import {theme} from "../../../shared/styles/theme";

export const Navigation :React.FC=()=>{
    const [screenMode, setScreenMode] = useState<string>("pc");
    const [showNavList, setShowNavList] = useState<boolean>(false)
    const navRef = useRef<HTMLElement>(null)

    useEffect(() => {
        const handleResize = ()=>{
            let state = window.innerWidth > 880 ? "pc" : window.innerWidth > 420 ? "tablet" : "mobile"
            setScreenMode(state)
        }
        window.addEventListener("resize", handleResize);

        handleResize(); // 처음 로드 시에도 창 크기 체크

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            // Navigation_Container 내부에서 클릭된 경우 무시
            if (navRef.current && !navRef.current?.contains(event.target as Node)) {
                setShowNavList(false); // 바깥 클릭 시 상태 변경 (닫기)
            }
        };
        // 이벤트 리스너 추가
        window.addEventListener("click", handleClickOutside);

        return () => {
            // 이벤트 리스너 제거
            window.removeEventListener("click", handleClickOutside);
        };
    }, []);

    useEffect(() => {
        const handleScroll = (e: Event) => {
            e.preventDefault();
            const target = document.querySelector((e.target as HTMLAnchorElement).getAttribute('href') || '');
            if (target) {
                const screenHeight = window.innerHeight;
                // 각 모드별로 다른 offset 적용
                const offset = target.id === "About" ? screenHeight * 0.5 : target.id === "Project" ? 20 : 50;
                window.scrollTo({
                    top: target.getBoundingClientRect().top + window.scrollY - offset,
                    behavior: "smooth",
                });
            }
        };
        // 스크롤 이벤트 한 번만 등록
        const links = document.querySelectorAll('a[href^="#"]');
        links.forEach((link) => {
            link.addEventListener("click", handleScroll);
        });

        return () => {
            links.forEach((link) => {
                link.removeEventListener("click", handleScroll);
            });
        };
    }, [screenMode, showNavList]);


    const navList_Handler = ()=>{
        if(screenMode==="pc") {
            setShowNavList(false)
            return
        }
        setShowNavList((prev)=>!prev)
    }

    return(
        <Navigation_Container ref={navRef} onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
            if (e.target === navRef.current) {
                setShowNavList(false);
            }
        }}>
            <span>
                <h3>
                    KSJ's Portfolio
                </h3>
                <Nav_wrapper $screenMode={screenMode}
                             $showNavList={showNavList}
                             onClick={navList_Handler}>
                    {screenMode === "pc" ?
                        <ul>
                            <li>
                                <a href={"#About"}>
                                    About Me
                                </a>
                            </li>
                            <li>
                                <a href={"#Skills"}>
                                    Skills
                                </a>
                            </li>
                            <li>
                                <a href={"#Project"}>
                                    Project
                                </a>
                            </li>
                            <li>
                                <a href={"#Archiving"}>
                                    Archiving
                                </a>
                            </li>
                        </ul>
                        :
                        <div className="iconWrapper">
                            <div className="iconWrapper__iconLine"/>
                            {!showNavList && <div className="iconWrapper__iconLine"/>}
                            <div className="iconWrapper__iconLine"/>
                        </div>
                    }

                </Nav_wrapper>
            </span>

            {(screenMode !== 'pc' && showNavList) &&
                <ul>
                    <li>
                        <a href={"#About"}>
                            About Me
                        </a>
                    </li>
                    <li>
                        <a href={"#Skills"}>
                            Skills
                        </a>
                    </li>
                    <li>
                        <a href={"#Project"}>
                            Project
                        </a>
                    </li>
                    <li>
                        <a href={"#Archiving"}>
                            Archiving
                        </a>
                    </li>
                </ul>
            }

        </Navigation_Container>

    )
}

interface screenState {
    $showNavList: boolean,
    $screenMode: string,
}


const Nav_wrapper = styled.div<screenState>`
    ul {
        font-size: 1.5rem;
        color: ${theme.color.white};
        display: flex;
        flex-direction: row;

        li {
            padding-inline: 2rem;
            align-items: center;
            white-space: nowrap;

            &:hover {
                a {
                    color: ${theme.color.white}77;
                }

                background-color: transparent;

            }

            transition: color ease 0.3s;
            cursor: pointer;
        }
    }

    .iconWrapper {
        padding: 6px;

        &__iconLine {
            width: 1.2rem;
            height: 1px;
            background-color: ${theme.color.white};
            margin-block: 0.25rem;
            transition: transform 0.3s ease-out;

        }
        height: 1.2rem;
        width: 1.2rem;
        cursor: pointer;
        ${props=>props.$showNavList && `
             &__iconLine:nth-of-type(1) {
                position: absolute;
                margin-top: 0.6rem;
                transition: transform 0.3s ease-out; 
                transform: rotate(45deg);
            }
            &__iconLine:nth-of-type(2) {
                position: absolute;
                margin-top: 0.6rem;
                transition: transform 0.3s ease-out; 
                transform: rotate(-45deg);
            }
        `}
        &:hover .iconWrapper__iconLine{
            background-color: ${theme.color.white}77;
        }

    }

    border: ${(props)=> props.$screenMode ==="pc" ? "none" :`1px solid ${theme.color.white}`};
    border-radius: 5px;
    &:hover{
        border-color:${theme.color.white}77;
    }
    transition: background-color ease 0.3s, border ease 0.3s;
`
const Navigation_Container= styled.nav`
    width: 100%;
    padding: 1.5rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${theme.color.black};
    opacity: 0.95;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9997;
    span{    
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
    ul {
        width: 100%;
        font-size: 1.5rem;
        color: ${theme.color.white};
        li {
            width: 100%;
            padding-inline: 2rem;
            text-align: center;
            padding-block: 0.8rem;
            margin-block: 0.1rem;
            align-items: center;
            
            &:hover {
                background-color: ${theme.color.gray}40;
            }

            transition: background-color ease 0.3s;
            cursor: pointer;
        }
    }
    border-bottom: 1px solid ${theme.color.white}77;
`

