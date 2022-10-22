import gears from '../../assets/Gears.png'
import dots from '../../assets/Dots.png'
import aboutText from '../../assets/About.png'
import TextBox from '../../components/TextBox';
import './about.css'
import { useEffect } from 'react';
import observeElement from '../../utils/observeElement';

const About: React.FC = () => {
    useEffect(()=> {
        observeElement('#about .aboutPanel', 0.1)
    },[])
    return (  
        <div className="about" id='about'>
            <div className="aboutPanel">
                <img src={gears} alt="spur gears" className='gears'/>
                <img src={dots} alt="dots" className='dots'/>
                <TextBox text="I'm a full stack developer coming from a mechanical engineering background." className='longText'/>
                <TextBox text="I enjoy challenges..." className='challenge'/>
                <TextBox text="I like learning..." className='learning'/>
                <TextBox text="...and I love new ideas" className='ideas'/>
            </div>
            <img src={aboutText} alt="about" className='aboutTitle'/>
        </div>
    );
}

export default About;