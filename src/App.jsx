import React from "react";
import Heading from "./Componants/Heading";
import Home from "./Componants/Home";
import Search from "./Componants/Search";
import { Route, Switch } from "react-router-dom";
import AppContainer from "./Container/AppContainer";
import "./style.css";
const App = () => {
  return (
    <AppContainer>
      <Switch>
        {/* <Heading/> */}
        <Route path="/" exact component={Home}></Route>
        <Route path="/:name" component={Search}></Route>
        <Route path="/test" component={Heading}></Route>
      </Switch>
    </AppContainer>
  );
};

export default App;
