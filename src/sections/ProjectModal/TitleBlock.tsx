import leftPointy from '../../assets/Left_pointy.svg'

interface TitleBlockProps {
    closeModal: () => void,
    title: string,
    githubLink: string,
    liveLink: string
}
 
const TitleBlock: React.FC<TitleBlockProps> = ({closeModal, title, githubLink, liveLink}) => {
    return (  
    <div className="title">
        <button className='backButton' onClick={closeModal}>
            <img src={leftPointy} alt="pointy box" />
            <p className='comicNeue'>&#60;&#60; back</p>
        </button>
        <h1>{title}</h1>
        <div className="links">
            <a href={githubLink} target='_blank' rel="noreferrer" >
                <div className="whiteBG">
                    <p className='bangers'>Github</p>
                </div>
            </a>
            <a href={liveLink} target='_blank' rel="noreferrer" >
                <div className="whiteBG">
                    <p className='bangers'>Live</p>
                </div>
            </a>
        </div>
    </div>
    );
}
 
export default TitleBlock;