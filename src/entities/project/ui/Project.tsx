import styled from "@emotion/styled";
import {media, theme} from "../../../shared/styles/theme";
import {Images, ProjectData} from "./ProjectData";
import {text} from "node:stream/consumers";
import {useEffect, useRef, useState} from "react";
import {gsap} from "gsap";
import {ImageModal} from "./ImageModal";

export const Project :React.FC =()=>{
    const articleRef = useRef<(HTMLElement | null)[]>([]);
    const [imageView,setImageView] = useState<Images[]>([])
    const [title, setTitle] = useState<string>('')
    const animationRef = useRef<gsap.core.Timeline[]>([])

    useEffect(() => {
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: articleRef.current[0],
                start: "top 80%",
                end: "top 30%",
                toggleActions: "play none none none",
                scrub: 2,
            },
            duration: 0.4,
            ease: "power2.inOut",
        });

        articleRef.current.forEach((el) => {
            if (el && !imageView.length) {
                animationRef.current.push(
                    timeline.fromTo(
                        el,
                        {
                            y:30,
                            opacity: 0,
                        },
                        {
                            y:0,
                            opacity: 1,
                        }
                    )
                )
            }else{
                animationRef.current.forEach(timeline=>
                timeline.kill())
            }
        });
    }, [imageView]);

    return(
        <Project_Container id="Project">
            {imageView.length>0 &&
                <ImageModal title={title}
                            images={imageView}
                            onClose={()=>setImageView([])}/>
            }
            <h1>PROJECT</h1>
            <div className="grid">
                {ProjectData.map((data,idx)=>(

                    <article key={data.title} ref={(el)=> {
                        articleRef.current[idx] =el
                    }}><Cover_Img $url={process.env.PUBLIC_URL +`/images/${data.cover}`}/>
                        <section>
                            <h5>{data.title}</h5>
                            <h6>개발기간 : {data.dev_time}</h6>
                            <h6>개발규모 : {data.dev_scale}</h6>
                            <hr></hr>
                            <h4>{data.sub_title}</h4>
                            <ul>
                                {data.content.map((text, idx) => (
                                    <li key={idx}>
                                        {text}
                                    </li>
                                ))}
                            </ul>
                            <a onClick={() => {
                                window.open(data.git_link)
                            }}>
                                <div></div>
                                {data.git_link}
                            </a>
                            <p>{data.use_stack}</p>
                            <div style={{marginTop:'1rem'}}>
                                <button style={{marginRight: '0.5rem'}} onClick={()=>window.open(data.readme_url)}>
                                    <img src={process.env.PUBLIC_URL + '/images/readme.png'}></img>
                                    <>README</>
                                </button>
                                {data.images.length>0 &&
                                    <button onClick={()=> {
                                        setImageView(data.images)
                                        setTitle(data.title)
                                    }}>
                                        <img src={process.env.PUBLIC_URL +'/images/gallery.png'}></img>
                                        <>이미지</>
                                    </button>
                                }
                            </div>
                        </section>
                    </article>
                ))}
            </div>
        </Project_Container>
    )
}
const Project_Container = styled.section`
    width: 100%;
    padding: 7rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    color: ${theme.color.black};
    div {
        article {
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
            border-radius:5px;
            section {
                padding: 1.5rem;
            }
            
            h5 {
                width: fit-content;
                font-size: 1.2rem;
                padding: 0.4rem;
                border-radius: 5px;
                background-color: ${theme.color.black};
                color: ${theme.color.white};
                margin-bottom: 1rem;
                font-weight: 550;
            }
    
            h6 {
                margin-block: 0.4rem;
                color: ${theme.color.black}77;
                font-weight: 550;
            }
    
            hr {
                width: 100%;
                height: 2px;
                background-color: ${theme.color.black}40;
                border: none;
            }
    
            h4 {
                font-size: 1.3rem;
                font-weight: 700;
                margin-block: 1rem;
                line-height: 1.5rem;
            }
            ul {
                li {
                    line-height: 1.5rem;
                    list-style-type: disc; /* 불릿 스타일 */
                    margin-block: 0.1rem;
                    margin-left: 1.2rem;
                }
            }
            a{
                display: flex;
                font-size: 1.2rem;
                align-items: center;
                margin-top: 1rem;
                color: ${theme.color.lightBlue};
                &:hover{
                    color: ${theme.color.blue};
                }
                div{
                    width: 0.25rem;
                    height: 1.4rem;
                    margin:0;
                    border-radius: 0;
                    margin-right: 0.5rem;
                    background-color: ${theme.color.blue};
                }
                
                transition: color ease 0.3s;
            }
            p{
                width: fit-content;
                margin-top: 1rem;
                font-size: 1rem;
                line-height: 1.2rem;
                background-color: ${theme.color.baige};
                border-radius: 5px;
                border:1px solid ${theme.color.orange};
                padding: 0.3rem;
            }
            div{
                display: flex;
                flex-direction: row;
                button{
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    background-color: transparent;
                    padding: 0.3rem;
                    border-radius: 5px;
                    border: 2px solid ${theme.color.black}20;
                    font-weight: 550;
                    cursor: pointer;
                    &:hover{
                        color: ${theme.color.blue}; 
                    }
                    img{
                        height: 1.5rem;
                        margin-right: 0.5rem;
                    }
                }
            }
        }
    }
`

const Cover_Img = styled.div<{$url:string}>`
    width: 100%;
    height: 13rem; /* 원하는 높이 설정 */
    background-image: url(${props=>props.$url}); /* 이미지 URL 설정 */
    background-size: cover; /* 이미지가 부모 요소를 채우도록 설정 */
    background-position: top; /* 이미지를 가운데 정렬 */
    background-repeat: no-repeat; /* 이미지 반복 금지 */
    border-radius: 5px 5px 0 0;
    margin: none;
`