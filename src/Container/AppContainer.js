import React from 'react';
import NavBar from "../Componants/NavBar";
import "./AppContainer.css";
import Heading from "../Componants/Heading";

const AppCOntainer = (props) => {
    return ( 
        <React.Fragment>
            <NavBar/>
            {/* <Heading/> */}
            <main className="content">{props.children}</main>
        </React.Fragment>
     );
}
 
export default AppCOntainer;