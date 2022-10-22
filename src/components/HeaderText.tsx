interface HeaderTextProps {
    text: string,
    className?: string
}

const shadowStyle: React.CSSProperties = {
    position: 'absolute',
    top: 2,
    left: 2
}
const containerStyle: React.CSSProperties = {
    position: 'relative',
}
 
const HeaderText: React.FC<HeaderTextProps> = ({text, className = 'bangerHeader'}) => {
    return (  
        <div className={className}>
            <div className="container" style={containerStyle}>
                <span className="bangers" style={shadowStyle}>{text}</span>
                <span className="bangers">{text}</span>
            </div>
        </div>
    );
}
 
export default HeaderText;