import styled from "@emotion/styled";
import {media, theme} from "../../../shared/styles/theme";
import {archivingData} from "../model/archivingData";

export const Archiving:React.FC =()=>{
    return(
        <Archiving_Container id="Archiving">
            <h1>Archiving</h1>
            <div className="grid">
                {archivingData.map((data)=>(
                    <article onClick={() => {
                        window.open(data.url)
                    }} key={data.target}>
                        <h3>{data.title}</h3>
                        <span>
                            <img src={`./images/${data.imageUrl}`}></img>
                            <h4>{data.target}</h4>
                        </span>
                        <ul>
                            {data.list.map((item) => (
                                <li key={item}>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </article>
                ))}
            </div>
        </Archiving_Container>
    )
}

const Archiving_Container = styled.section`
    width: 100%;
    padding: 8rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    background-color: ${theme.color.black};
    
    div{
        grid-template-columns: repeat(2,1fr);
        ${media.tablet} {
            grid-template-columns: 1fr;
        }
        ${media.mobile} {
            grid-template-columns: 1fr;
        }
    }


    

    article{
        padding: 3rem;
        background-color: ${theme.color.white};
        color: ${theme.color.black};
        border-radius: 5px;
        cursor: pointer;
        
        span{
            display: flex;
            flex-direction: row;
            align-items: center;
            margin-block: 1rem;
            img{
                height: 3rem;
                margin-right: 0.5rem;
            }
            
            h4{
                font-size: 1.8rem;
                font-weight: 550;
            }
        }
        
        
        ul {
            margin-top: 2rem;
            li {
                font-size: 1.4rem;
                line-height: 1.5rem;
                list-style-type: disc; /* 불릿 스타일 */
                margin-block: 0.4rem;
                margin-left: 1.5rem;
                font-weight: 550;
                
                ${media.tablet}{
                    font-size: 1.2rem;
                }
            }
        }
        &:hover{
            transform: scale(1.05); 
        }
      
    }
`