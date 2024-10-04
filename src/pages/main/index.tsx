import {Introduce} from "../../entities/Introduce";
import {AboutMe} from "../../entities/aboutMe";
import {Skills} from "../../entities/skills";

const Main :React.FC = ()=>{
    return(
        <main>
            <Introduce/>
            <AboutMe/>
            <Skills/>
        </main>
    )
}
export default Main;