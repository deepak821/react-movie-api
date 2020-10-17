import React from 'react';
import NavBar from "../Componants/NavBar";
import "./AppContainer.css";

const AppCOntainer = (props) => {
    return ( 
        <React.Fragment>
            <NavBar/>
            <main className="content">{props.children}</main>
        </React.Fragment>
     );
}
 
export default AppCOntainer;