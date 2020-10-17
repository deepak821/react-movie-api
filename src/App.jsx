import React from "react";
import Home from "./Componants/Home";
import Search from "./Componants/Search";
import { Route, Switch } from "react-router-dom";
import AppContainer from "./Container/AppContainer";
import "./style.css";
const App = () => {
  return (
    <div>
      <AppContainer>
        <Switch>
          {/* <Heading/> */}
          <Route path="/" exact component={Home} />
          <Route path="/:name" component={Search} />
        </Switch>
      </AppContainer>
    </div>
  );
};

export default App;
