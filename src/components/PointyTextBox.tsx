import leftPointy from '../assets/Left_pointy.svg'
import rightPointy from '../assets/Right_pointy.svg'


interface PointyTextBoxProps {
    text: string;
    className? : string
    position?: 'left' | 'right',
    clickable?: boolean,
    onclick?: () => void
}

const containerStyles: React.CSSProperties = {
    position: 'relative',
    display: 'inline-block',
}
const textStyles: React.CSSProperties = {
    position: 'absolute',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
}


const PointyTextBox: React.FC<PointyTextBoxProps> = ({text, className = 'pointyTextBox', position='right', clickable=false, onclick = () => {}}) => {
    let pointyBoxStyles: React.CSSProperties = {
        display: 'inline-block'
    }
    if(clickable) {
        pointyBoxStyles = { 
            display: 'inline-block',
            cursor: 'pointer'
        }
    }

    return (
        <div className={className} onClick={onclick} style={pointyBoxStyles} >
            <div className="container" style={containerStyles}> 
                {position === 'right' 
                    ? <img src={rightPointy} alt='pointy Box'/> 
                    : <img src={leftPointy} alt='pointy Box'/> 
                }
                <p className='comicNeue' style={textStyles}>{text}</p>
            </div>
        </div>
    );
}
 
export default PointyTextBox;