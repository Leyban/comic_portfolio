import './sideQuestModal.css'


interface SideQuestModalProps {
    closeModal: () => void
}
 
const SideQuestModal: React.FC<SideQuestModalProps> = ({closeModal}) => {

    return (  
        <div className="sideQuestModal">
            <button onClick={closeModal}>back</button>
            <div className="title">Side Quest</div>
            <div className="stack">lotso</div>
            <div className="features">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam earum vitae perspiciatis assumenda error adipisci. Reiciendis voluptatibus dolorum totam sint vitae quos omnis sunt! A rem aspernatur architecto at error?</div>
        </div>
    );
}
 
export default SideQuestModal;