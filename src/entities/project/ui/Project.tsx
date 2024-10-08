import styled from "@emotion/styled";
import {media, theme} from "../../../shared/styles/theme";
import {ProjectData} from "./ProjectData";
import {text} from "node:stream/consumers";

export const Project :React.FC =()=>{
    return(
        <Project_Container>
            <h1>PROJECT</h1>
            <div className="grid" style={{borderRadius:'20px', marginTop:'3rem'}}>

                {ProjectData.map((data)=>(
                    <article key={data.title}>
                        <Cover_Img $url={`./images/${data.cover}`}/>
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
                                <button style={{marginRight: '0.5rem'}}>
                                    <img src={'./images/readme.png'}></img>
                                    <>README</>
                                </button>
                                <button>
                                    <img src={'./images/gallery.png'}></img>
                                    <>이미지</>
                                </button>
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