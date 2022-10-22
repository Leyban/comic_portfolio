import dissectPad from '../../../assets/DissectPad.png';
import dots from '../../../assets/Dots.png';
import { ProjectModalType } from '../../../types';
import './sideQuest.css';

interface SideQuestProps {
    openModal: (modalType: ProjectModalType) => void,
}


const SideQuest: React.FC<SideQuestProps> = ({openModal}) => {
    return (  
        <a href='https://leyban.github.io/Side-Quest-Frontend-V1/' target='_blank' className="sideQuest" rel="noreferrer">
            <span className="germaniaOne bigShadow" >Side Quest</span>
            <img src={dots} alt="dots" className='dots'/>
            <img src={dissectPad} alt="dissect tasks to a million pieces" className='dissectPad'/>
            <div className="title">
                <span className="germaniaOne actual" >Side Quest</span>
                <span className="germaniaOne placeHolder" >Side Quest</span>
            </div>
        </a>
    );
}
 
export default SideQuest;