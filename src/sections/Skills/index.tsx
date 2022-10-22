import Backend from "./Backend";
import Frontend from "./Frontend";
import './skills.css'

const Skills: React.FC = () => {
    return (  
        <div className="skillsContainer">
            <Frontend />
            <Backend />
        </div>
    );
}
 
export default Skills;