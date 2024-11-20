import {useEffect, useState} from "react";
import styled from "@emotion/styled";
export const CustomLoading = ({content=''})=>{
    const [isMount, setIsMount] = useState(false) //blink 현상 방지를 위한 mount 속도조절

    useEffect(() => {
        setTimeout(()=>{
            setIsMount(true)
        },100)
    }, []);

    return(
        isMount &&
        <Modal_Bg_container>
            <img src={process.env.PUBLIC_URL +`/images/spinner.gif`} alt={'Loading'}/>
            <p>{content ? content : 'Loading..'}</p>
        </Modal_Bg_container>

    )
}



const Modal_Bg_container = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 9998;
    background-color: rgba(0, 0, 0, 0.7);
    img{
        width: 2rem;
        height: 2rem;
        margin-block: 1rem;
    }
`