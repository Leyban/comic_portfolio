import { BorderDimension } from './borderDimensions'
import React from 'react'
 
const Border: React.FC<BorderDimension> = ({
        name,
        width,
        height,
        viewBox,
        pathD,
        strokeWidth,
        fill
}) => {
    return (  
        <svg className={`${name}Border`} width={width} height={height} viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">
            <g className='pathShell'><path d={pathD} fill={fill} stroke='black' strokeWidth={strokeWidth} /></g>
        </svg>
    );
}
 
export default Border;