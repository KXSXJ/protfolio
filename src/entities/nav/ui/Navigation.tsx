import React, {useEffect, useState} from "react";
import styled from "@emotion/styled";
import {theme} from "../../../shared/styles/theme";

export const Navigation :React.FC=()=>{
    const [screenMode, setScreenMode] = useState<string>("pc");
    const [showNavList, setShowNavList] = useState<boolean>(false)
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

    const navList_Handler = ()=>{
        if(screenMode==="pc") {
            setShowNavList(false)
            return
        }
        setShowNavList((prev)=>!prev)
    }

    return(
        <Navigation_Container>
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
                                About Me
                            </li>
                            <li>
                                Skills
                            </li>
                            <li>
                                Project
                            </li>
                            <li>
                                Archiving
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
                        About Me
                    </li>
                    <li>
                        Skills
                    </li>
                    <li>
                        Project
                    </li>
                    <li>
                        Archiving
                    </li>
                </ul>
            }

        </Navigation_Container>

    )
}

interface screenState {
    $showNavList:boolean,
    $screenMode:string,
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
                color: ${theme.color.white}77;
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
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
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

