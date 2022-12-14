import { ProjectModalType } from "../../types";
import SideQuestModal from "./SideQuestModal";
import './projectModal.css'

interface ProjectModalProps {
    closeModal: () => void,
    modalType: ProjectModalType
}
 
const ProjectModal: React.FC<ProjectModalProps> = ({closeModal, modalType}) => {
    return (  
        <div className="projectModal">
            <div className="background" onClick={closeModal}></div>
            {modalType === "sideQuest" && <SideQuestModal closeModal={closeModal} />}
        </div>
    );
}
 
export default ProjectModal;