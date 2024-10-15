import {Introduce} from "../../entities/Introduce";
import {AboutMe} from "../../entities/aboutMe";
import {Skills} from "../../entities/skills";
import {Project} from "../../entities/project";
import {Archiving} from "../../entities/archiving";
import {useRef} from "react";

const Main :React.FC = ()=>{

    return(
        <main>
            <Introduce/>
            <AboutMe/>
            <Skills/>
            <Project/>
            <Archiving/>
        </main>
    )
}
export default Main;