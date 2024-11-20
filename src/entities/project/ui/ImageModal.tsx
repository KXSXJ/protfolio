import styled from "@emotion/styled";
import {theme} from "../../../shared/styles/theme";
import {useEffect, useRef, useState} from "react";
import {Images} from "./ProjectData";

interface ProjectProps{
    title:string,
    images: Images[],
    onClose:()=>void,
}
export const ImageModal :React.FC<ProjectProps> = ({title,images,onClose})=>{
    const modalBackground = useRef<HTMLTableSectionElement|null>(null);
    const [pageNum, setPageNum] = useState<number>(0)

    const pageHandler =(direct:number)=>{
        if(direct){
            if(pageNum === images.length-1){
                setPageNum(0)
            }else{
                setPageNum((prev)=>prev+1)
            }
        }else{
            if(pageNum === 0){
                setPageNum(images.length-1)
            }else{
                setPageNum((prev)=>prev-1)
            }
        }

    }


    return(
        <Modal_Container  ref={modalBackground} onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
            if (e.target === modalBackground.current) {
                onClose();
            }
        }}>
            <Modal_Content_Container>
                <span>
                    <h4>{title} ({pageNum+1})</h4>
                    <i className="bi bi-x-lg" onClick={onClose}></i>
                </span>
                <div>
                <i className="fi fi-bs-angle-left" onClick={()=>pageHandler(0)}></i>
                    <img src={process.env.PUBLIC_URL +`/images/project/${images[pageNum].url}`} alt={'projectImg'}></img>
                    <i className="fi fi-bs-angle-right" onClick={()=>pageHandler(1)}></i>
                </div>
                <h5>
                {images[pageNum].title}
                </h5>
                <p>
                    {images[pageNum].content}
                </p>
            </Modal_Content_Container>
        </Modal_Container>
    )
}

const Modal_Container = styled.section`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9998;
    background-color: rgba(0, 0, 0, 0.3);
`

const Modal_Content_Container = styled.div`
    width: 40rem;
    height: 38rem;
    background-color: ${theme.color.white};
    border-radius: 5px;
    box-sizing: border-box;
    padding-block: 2rem;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);

    h4{
        font-size: 1.3rem;
        font-weight: 550;
        margin-left: 7.5%;
    }
    span{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        i{
            color: ${theme.color.black}77;
            font-size: 1rem;
            &:hover{
                color: ${theme.color.black};
            }
        };
        margin-inline: 1rem;

    }
    div{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        img{
            margin-top: 1rem;
            width: 80%;
            max-height: 28rem;
            border-radius: 5px;
        }
        cursor: pointer;
        &:hover{
            i{
                color: ${theme.color.black}77;
            }
        }
    }
    i{
        color: transparent;
        font-size: 3rem;
    }
    h5{
        font-size: 1.2rem;
        margin-top: 1rem;
        font-weight: 550;
        margin-inline: 10%;
    }
    p{
        font-size: 0.9rem;
        margin-inline: 10%;
        line-height: 1.2rem;
    }
  
`