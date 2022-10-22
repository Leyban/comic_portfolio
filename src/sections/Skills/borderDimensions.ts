export interface BorderDimension {
    name: string,
    width: string,
    height: string,
    viewBox: string,
    pathD: string,
    hoverFill: string,
    strokeWidth: string,
    fill: string
}

const border: {[name:string]:BorderDimension} = {
    frontendBG: {
        name: 'frontendBG',
        width: '561',
        height: '325',
        viewBox: '0 0 561 325',
        pathD: 'M17.8786 288.655L2.65009 2.75123L558.063 53.2433L510.43 321.855L17.8786 288.655Z',
        hoverFill: '#fff',
        strokeWidth: '5',
        fill: '#CDF3D5'
    },
    frontendBGsmol: {
        name: 'frontendBGsmol',
        width: '609',
        height: '316',
        viewBox: '0 0 609 316',
        pathD: 'M558.23 52.5655L607.168 282.887L18.2443 314.422L1.59007 1.6517L558.23 52.5655Z',
        hoverFill: '#fff',
        strokeWidth: '5',
        fill: '#CDF3D5'
    },
    backendBG: {
        name: 'backendBG',
        width: '555',
        height: '350',
        viewBox: '0 0 555 350',
        pathD: 'M2.88124 251.009L41.6219 26.902L552.084 2.64139L501.407 347.051L2.88124 251.009Z',
        hoverFill: '#fff',
        strokeWidth: '5',
        fill: '#F5D4D4'
    },


    css: {
        name: 'css',
        width: '83',
        height: '208',
        viewBox: '0 0 83 208',
        pathD: 'M81.5 12.1866L81.5 187.312L1.87042 206.02L37.7025 1.82587L81.5 12.1866Z',
        hoverFill: '#7CD1FA',
        strokeWidth: '3',
        fill: 'white'
    },
    figma: {
        name: 'figma',
        width: '75',
        height: '189',
        viewBox: '0 0 75 189',
        pathD: 'M6.95691 187.5L2.03523 18.6864L72.5891 2.47806L36.7626 187.5H6.95691Z',
        hoverFill: '#ADAEFF',
        strokeWidth: '3',
        fill: 'white'
    },
    html: {
        name: 'html',
        width: '101',
        height: '209',
        viewBox: '0 0 101 209',
        pathD: 'M18.8925 196.288L2.12458 18.2522L98.6569 2.32439L62.7975 206.674L18.8925 196.288Z',
        hoverFill: '#FFC9B1',
        strokeWidth: '3',
        fill: 'white'
    },
    javascript: {
        name: 'javascript',
        width: '109',
        height: '200',
        viewBox: '0 0 109 200',
        pathD: 'M106.432 2.37425L53.8354 194.573L2.98675 197.9L1.51055 20.2641L106.432 2.37425Z',
        hoverFill: '#FFCA3E',
        strokeWidth: '3',
        fill: 'white'
    },
    react: {
        name: 'react',
        width: '83',
        height: '206',
        viewBox: '0 0 83 206',
        pathD: 'M62.1249 199.146L16.3824 204.334L1.61348 2H81.3466L62.1249 199.146Z',
        hoverFill: '#61DAFB',
        strokeWidth: '3',
        fill: 'white'
    },
    sass: {
        name: 'sass',
        width: '91',
        height: '202',
        viewBox: '0 0 91 202',
        pathD: 'M89.4489 196.067L1.65978 199.926L20.8017 2.61644L83.5354 27.0395L89.4489 196.067Z',
        hoverFill: '#D094B1',
        strokeWidth: '3',
        fill: 'white'
    },
    typescript: {
        name: 'typescript',
        width: '109',
        height: '213',
        viewBox: '0 0 109 213',
        pathD: 'M1.89444 196.248L54.5927 2.19998L91.5929 8.28863L106.864 210.76L1.89444 196.248Z',
        hoverFill: '#6BA5E4',
        strokeWidth: '3',
        fill: 'white'
    },
    apollo: {
        name: 'apollo',
        width: '520',
        height: '90',
        viewBox: '0 0 520 90',
        pathD: 'M7.89416 88.4804L1.62108 1.62246L518.103 39.3654L507.331 81.5162L7.89416 88.4804Z',
        hoverFill: '#EFC3E1',
        strokeWidth: '3',
        fill: 'white'
    },
    graphql: {
        name: 'graphql',
        width: '532',
        height: '94',
        viewBox: '0 0 532 94',
        pathD: 'M32.083 92L2.17543 1.795L529.579 70.2632L523.369 92H32.083Z',
        hoverFill: '#E1C1EF',
        strokeWidth: '3',
        fill: 'white'
    },
    node: {
        name: 'node',
        width: '540',
        height: '92',
        viewBox: '0 0 540 92',
        pathD: 'M9.57843 20.6292L2.19576 1.52108L521.262 6.48823L537.628 90.2402L9.57843 20.6292Z',
        hoverFill: '#BFE4B2',
        strokeWidth: '3',
        fill: 'white'
    },
    
    mongo: {
        name: 'mongo',
        width: '520',
        height: '95',
        viewBox: '0 0 520 95',
        pathD: 'M2.49852 57.1346L19.6026 2.43127H510.13L518.347 92.8133L2.49852 57.1346Z',
        hoverFill: '#BFE4B2',
        strokeWidth: '3',
        fill: 'white'
    },
}

export default border;