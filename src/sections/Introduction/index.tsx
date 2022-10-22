import introBg from '../../assets/introBg.png'
import banBoom from '../../assets/Ban Boom.png'
import banText from '../../assets/Ban Text.png'
import bird from '../../assets/Bird.svg'
import plane from '../../assets/Plane.svg'
import fullStackDev from '../../assets/Full Stack Dev.svg'
import PointyTextBox from '../../components/PointyTextBox'
import './introduction.css'
import {useEffect} from 'react'
import observeElement from '../../utils/observeElement'

const Introduction:React.FC = () => {
    useEffect(()=> {
        observeElement('.introduction')
    }, [])

    return (  
        <div className="introduction">
            <img src={introBg} alt="background boom bg" className='background'/>
            <div className="banBoomContainer">
                <img src={banBoom} alt="boom" className='banBoomPlaceHolder'/>
                <img src={banBoom} alt="boom" className='banBoom'/>
                <img src={banText} alt="ban" className='banText'/>
            </div>
            <img src={fullStackDev} alt="its a full stack dev" className='fullStackDev'/>
            <img src={plane} alt="its a plane" className='plane'/>
            <img src={bird} alt="its a bird" className='bird'/>
            <div className="nav">
                <a href="#about"><PointyTextBox text='About' /></a>
                <a href="#projects"><PointyTextBox text='Projects' /></a>
                <a href="#contact"><PointyTextBox text='Contact' /></a>
                <a href="https://github.com/Leyban" target='_blank' rel="noreferrer"><PointyTextBox text='Github' /></a>
            </div>
        </div>
    );
}
 
export default Introduction;