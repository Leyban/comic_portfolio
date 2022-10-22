import dots from '../../../assets/Dots.png';
import './landingPages.css'

const LandingPages:React.FC = () => {
    return (  
        <div className="landingPages">
            <img src={dots} alt="dots" className='dots'/>
            <h2 className='bangers'>Landing Pages</h2>
            <div className="cardsContainer">
                <a href='https://leyban.github.io/easybank-landing-page/' rel="noreferrer" target='_blank' className="easybank card">
                    <div className="container">
                        <img src={dots} alt="dots" className='dots'/>
                        <h3 className='bangers title'>EASYBANK</h3>
                        <h1 className='bangers bigShadow top'>EASYBANK</h1>
                        <h1 className='bangers bigShadow bottom'>EASYBANK</h1>
                    </div>
                    <h1 className="montserrat">1</h1>
                </a>
                <a href='https://leyban.github.io/clipboard-landing-page/' rel="noreferrer" target='_blank' className="clipboard card">
                    <div className="container">
                        <img src={dots} alt="dots" className='dots'/>
                        <h3 className='bangers title'>CLIPBOARD</h3>
                        <h1 className='bangers bigShadow top'>CLIPBOARD</h1>
                        <h1 className='bangers bigShadow bottom'>CLIPBOARD</h1>
                    </div>
                    <h1 className="montserrat">2</h1>
                </a>
                <a href='https://leyban.github.io/fylo-dark-theme-landing-page/' rel="noreferrer" target='_blank' className="fylo card">
                    <div className="container">
                        <img src={dots} alt="dots" className='dots'/>
                        <h3 className='bangers title'>FYLO</h3>
                        <h1 className='bangers bigShadow top'>FYLO</h1>
                        <h1 className='bangers bigShadow bottom'>FYLO</h1>
                    </div>
                    <h1 className="montserrat">3</h1>
                </a>
                <a href='https://leyban.github.io/crowdfunding-page/' rel="noreferrer" target='_blank' className="crowdfund card">
                    <div className="container">
                        <img src={dots} alt="dots" className='dots'/>
                        <h3 className='bangers title'>CROWDFUND</h3>
                        <h1 className='bangers bigShadow top'>CROWDFUND</h1>
                        <h1 className='bangers bigShadow bottom'>CROWDFUND</h1>
                    </div>
                    <h1 className="montserrat">4</h1>
                </a>
            </div>
        </div>
    );
}
 
export default LandingPages;