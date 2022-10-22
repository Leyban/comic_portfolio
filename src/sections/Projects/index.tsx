import projectBoom from '../../assets/ProjectsBoom.png';
import projectText from '../../assets/ProjectsText.png';
import stars from '../../assets/Stars.png';
import TextBox from '../../components/TextBox';
import observeElement from '../../utils/observeElement';
import Calculator from './Calculator';
import LandingPages from './LandingPages';
import './projects.css';
import SideQuest from './SideQuest';
import TicTacToe from './TicTacToe';
import { useEffect } from 'react'
import { ProjectModalType } from '../../types';

interface ProjectsProps {
    openModal: (modalType: ProjectModalType) => void,
}

const Projects: React.FC<ProjectsProps> = ({openModal}) => {
    useEffect(()=> {
        observeElement('#projects .projectsTitle')
    }, [])

    return (  
        <div className="projects" id='projects'>
            <div className="titlePanel">
                <div className="textBoxContainer">
                    <TextBox text='Here are some of the stuff that kept me busy' />
                </div>
            </div>

            <div className="projectsContainer">
                <SideQuest openModal = {openModal} />
                <Calculator />
                <TicTacToe />
                <div className="filler">
                    <h2 className='bangers'>More on the way!</h2>
                </div>
                <LandingPages />
            </div>            

            <div className="projectsTitle">
                <img src={stars} alt="stars" className='starsPlaceHolder'/>
                <img src={stars} alt="stars" className='stars'/>
                <img src={projectBoom} alt="boom" className='projectBoom'/>
                <img src={projectText} alt="projects" className='projectText'/>
            </div>
        </div>
    );
}
 
export default Projects;