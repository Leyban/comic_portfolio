import dots from '../../../assets/Dots.png';
import punyCalc from '../../../assets/punyCalc.png';
import './calculator.css';

const Calculator: React.FC = () => {
    return (  
        <a href='https://leyban.github.io/Calculator-App/' target='_blank' className="calculator" rel="noreferrer">
            <img src={dots} alt="dots" className='dots'/>
            <h3 className='spartan'>Calculator</h3>
            <img src={punyCalc} alt="calculator" className='punyCalc'/>
            <p className='spartan'>an ordinary one</p>
        </a>
    );
}
 
export default Calculator;