import logo from '../../../assets/logos/logo';
import PointyTextBox from '../../../components/PointyTextBox';
import TextBox from '../../../components/TextBox';
import './sideQuestModal.css';
import cache from '../../../assets/sideQuestModal/Cache.png';
import crud from '../../../assets/sideQuestModal/CRUD.png';
import recursive from '../../../assets/sideQuestModal/Recursive.png';
import serverIcons from '../../../assets/sideQuestModal/ServerIcons.png';
import breadcrumbs from '../../../assets/sideQuestModal/Breadcrumbs.png';
import FeatureBox from '../../../components/FeatureBox';
import TitleBlock from '../TitleBlock';

interface SideQuestModalProps {
    closeModal: () => void
}
 
const SideQuestModal: React.FC<SideQuestModalProps> = ({closeModal}) => {

    return (  
        <div className="sideQuestModal modalStory">
            <TitleBlock 
                closeModal={closeModal} 
                title='Side Quest'
                githubLink='https://github.com/Leyban/Side-Quest-Frontend-V1'
                liveLink='https://leyban.github.io/Side-Quest-Frontend-V1/'
            />
            <div className="stack">
                <PointyTextBox text='Project Stack' />
                <div className="iconTray">
                    <div className="iconContainer">
                        <TextBox text='React' />
                        <img src={logo.react} alt="react logo" />
                        <img src={logo.react} alt="react logo" className='shadow'/>
                    </div>
                    <div className="iconContainer">
                        <TextBox text='GraphQL' />
                        <img src={logo.graphql} alt="graphql logo" />
                        <img src={logo.graphql} alt="graphql logo" className='shadow'/>
                    </div>
                    <div className="iconContainer">
                        <TextBox text='Node' />
                        <img src={logo.node} alt="node logo" />
                        <img src={logo.node} alt="node logo" className='shadow'/>
                    </div>
                    <div className="iconContainer">
                        <TextBox text='Apollo' />
                        <img src={logo.apollo} alt="apollo logo" />
                        <img src={logo.apollo} alt="apollo logo" className='shadow'/>
                    </div>
                    <div className="iconContainer">
                        <TextBox text='MongoDB' />
                        <img src={logo.mongo} alt="mongo logo" />
                        <img src={logo.mongo} alt="mongo logo" className='shadow'/>
                    </div>
                </div>
            </div>
            <div className="features">
                <PointyTextBox position='left' text='Features' />
                <div className="featuresTray">
                    <FeatureBox 
                        title='Crud App' 
                        description='Create, Read, Update, and Delete tasks.'
                        img={crud}
                        position='left'
                    />
                    <FeatureBox 
                        title='Recursive Components' 
                        description='Each task is an individual document in the database and can be called and rendered by its parent'
                        img={recursive}
                        position='right'
                    />
                    <FeatureBox 
                        title='Cached Response' 
                        description="Utilizes Apollo Client's Cache system"
                        img={cache}
                        position='left'
                    />
                    <FeatureBox 
                        title='GraphQl Server' 
                        description="The server is a NodeJS Express app that uses GraphQL through Apollo Server. It also uses MongoDB for its database"
                        img={serverIcons}
                        position='right'
                    />
                    <FeatureBox 
                        title='Breadcrumb Navigation' 
                        description="Never get lost in your rabbit hole of tasks"
                        img={breadcrumbs}
                        position='left'
                    />
                </div>
            </div>
        </div>
    );
}
 
export default SideQuestModal;