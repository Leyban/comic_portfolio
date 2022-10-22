import logo from '../../../assets/logos/logo';
import PointyTextBox from '../../../components/PointyTextBox';
import TextBox from '../../../components/TextBox';
import Border from '../Border';
import border from '../borderDimensions';
import './frontend.css'
import { useEffect } from 'react'
import observeElement from '../../../utils/observeElement';
import useWindowDimensions from '../../../utils/useWindowDimensions';

const Frontend:React.FC = () => {
    const {width: windowWidth } = useWindowDimensions()
    useEffect(()=> {
        observeElement('.skillsContainer .frontend')
    },[])
    return (  
        <div className="frontend">
            {windowWidth >= 1170 ? <Border {...border.frontendBG} /> : <Border {...border.frontendBGsmol} />}
            <PointyTextBox position='left' text='Frontend' />
            <div className="chipsContainer">
                <div className="chip">
                    <Border {...border.html} />
                    <img src={logo.html} alt='html logo' className='htmlLogo' />
                    <TextBox text='HTML' />
                </div>
                <div className="chip">
                    <Border {...border.css} />
                    <img src={logo.css} alt='css logo' className='cssLogo' />
                    <TextBox text='CSS' />
                </div>
                <div className="chip">
                    <Border {...border.javascript} />
                    <img src={logo.javascript} alt='javascript logo' className='javascriptLogo' />
                    <TextBox text='Javascript' />
                </div>
                <div className="chip">
                    <Border {...border.typescript} />
                    <img src={logo.typescript} alt='typescript logo' className='typescriptLogo' />
                    <TextBox text='Typescript' />
                </div>
                <div className="chip">
                    <Border {...border.react} />
                    <img src={logo.react} alt='react logo' className='reactLogo' />
                    <TextBox text='React' />
                </div>
                <div className="chip">
                    <Border {...border.sass} />
                    <img src={logo.sass} alt='html logo' className='sassLogo' />
                    <TextBox text='SASS' />
                </div>
                <div className="chip">
                    <Border {...border.figma} />
                    <img src={logo.figma} alt='figma logo' className='figmaLogo' />
                    <TextBox text='Figma' />
                </div>
            </div>
        </div>
    );
}
 
export default Frontend;