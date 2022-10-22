import logo from "../../../assets/logos/logo";
import PointyTextBox from "../../../components/PointyTextBox";
import TextBox from "../../../components/TextBox";
import Border from "../Border";
import border from "../borderDimensions";
import './backend.css'
import { useEffect } from 'react'
import observeElement from '../../../utils/observeElement';

const Backend: React.FC = () => {
    useEffect(()=> {
        observeElement('.skillsContainer .backend')
    },[])
    return (  
        <div className="backend">
            <PointyTextBox text="Backend" />
            <Border {...border.backendBG} />
            <div className="chipsContainer">
                <div className="chip">
                    <Border {...border.node}/>
                    <img src={logo.node} alt="node" className="nodeLogo" />
                    <TextBox text="Node" />
                </div>
                <div className="chip">
                    <Border {...border.graphql}/>
                    <img src={logo.graphql} alt="graphql" className="graphqlLogo" />
                    <TextBox text="GraphQL" />
                </div>
                <div className="chip">
                    <Border {...border.mongo}/>
                    <img src={logo.mongo} alt="mongo" className="mongoLogo" />
                    <TextBox text="MongoDB" />
                </div>
                <div className="chip">
                    <Border {...border.apollo}/>
                    <img src={logo.apollo} alt="apollo" className="apolloLogo" />
                    <TextBox text="Apollo" />
                </div>
            </div>
        </div>
    );
}
 
export default Backend;