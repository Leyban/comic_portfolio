import punyTic from '../../../assets/punyTic.png';
import dots from '../../../assets/Dots.png';
import './tictactoe.css'

const TicTacToe: React.FC = () => {
    return (  
        <a href='https://leyban.github.io/advanced-tic-tac-toe/' target='_blank' rel='noreferrer' className="tictactoe spartan">
            <img src={dots} alt="dots" className='dots'/>
            <div className="title">
                <h3>TIC</h3>
                <h3>TAC</h3>
                <h3>TOE</h3>
            </div>
            <img src={punyTic} alt="tic tac toe" className="punyTic" />
            <p>an advanced one</p>
        </a>
    );
}
 
export default TicTacToe;