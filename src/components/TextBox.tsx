interface TextBoxProps {
    text: string,
    className?: string
}

const containerStyle: React.CSSProperties = {
    backgroundColor: '#D9D9D9',
    overflow: 'hidden',
    border: '3px solid black',
    display: "inline-block",
}
const textStyles: React.CSSProperties = {
    padding: 20,
    backgroundColor: 'white',
    transform: 'translate(-5px, -5px)',
    fontWeight: 600,
    fontSize: '1.1em',
}
 
const TextBox: React.FC<TextBoxProps> = ({text,className='textBox'}) => {
    return (  
        <div className={className} style={containerStyle}>
            <p style={textStyles} className='comicNeue'>{text}</p>
        </div>
    );
}
 
export default TextBox;