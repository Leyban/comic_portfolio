import dissectPad from '../../../assets/DissectPad.png';
import dots from '../../../assets/Dots.png';
import { ProjectModalType } from '../../../types';
import './sideQuest.css';

interface SideQuestProps {
    openModal: (modalType: ProjectModalType) => void,
}


const SideQuest: React.FC<SideQuestProps> = ({openModal}) => {
    return (  
        <div onClick={() => openModal('sideQuest')} className="sideQuest">
            <span className="germaniaOne bigShadow" >Side Quest</span>
            <img src={dots} alt="dots" className='dots'/>
            <img src={dissectPad} alt="dissect tasks to a million pieces" className='dissectPad'/>
            <div className="title">
                <span className="germaniaOne actual" >Side Quest</span>
                <span className="germaniaOne placeHolder" >Side Quest</span>
            </div>
        </div>
    );
}
 
export default SideQuest;