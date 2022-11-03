interface FeatureBoxProps {
    position: 'left' | 'right',
    title: string,
    description: string,
    img: string,
    alt?: string 
}
 
const FeatureBox: React.FC<FeatureBoxProps> = ({position, title, description, img, alt='sample'}) => {
    if(position === 'left'){
        return <div className="whiteContainer">
            <h3 className='bangers left'>{title}</h3>
            <p className="comicNeue">
                {description}
            </p>
            <img src={img} alt={alt}/>
        </div>
    }
    return <div className="whiteContainer">
    <h3 className='bangers right'>{title}</h3>
    <img src={img} alt={alt}/>
    <p className="comicNeue">
        {description}
    </p>
</div>;
}
 
export default FeatureBox;