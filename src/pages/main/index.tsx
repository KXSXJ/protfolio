import {Introduce} from "../../entities/Introduce";
import {AboutMe} from "../../entities/aboutMe";
import {Skills} from "../../entities/skills";
import {Project} from "../../entities/project";

const Main :React.FC = ()=>{
    return(
        <main>
            <Introduce/>
            <AboutMe/>
            <Skills/>
            <Project/>
        </main>
    )
}
export default Main;