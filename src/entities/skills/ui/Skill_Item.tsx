import {Skill_List} from "../model/types";
import styled from "@emotion/styled";
import {theme} from "../../../shared/styles/theme";

export const Skill_Item :React.FC<Skill_List> = ({_skills})=>{
    return(
            <Skill_Container>
                {_skills.map((skill,index)=>(
                    <span key={skill.name}>
                        <img src={`./images/${skill.url}`}></img>
                        <p>{skill.name}</p>
                        {_skills.length>1 && !index &&
                        <p style={{paddingInline:'0.5rem'}}>
                            /
                        </p>}
                    </span>
                    ))
                }
            </Skill_Container>
    )
}

const Skill_Container = styled.div`
    width: fit-content;
    padding: 0.5rem;
    padding-block: 0.2rem;
    align-items: center;
    display: flex;
    white-space: nowrap;
    
    img{
        height: 2rem;
        padding-right: 0.5rem;
    }
  
    p{
        font-size: 1rem;
        font-weight: 900;
    }
    span{
        display: flex;
    }
    border-radius: 5px;
    background-color: ${theme.color.white};
    color: ${theme.color.black};
    font-weight: 550;
`