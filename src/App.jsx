import React from "react";
// import Heading from "./Heading";
import Home from "./Componants/Home";
import Search from "./Componants/Search";
import NavBar from "./Componants/NavBar";
import { Route, Switch } from "react-router-dom";
const App = () => {
  return (
    <Switch>
      {/* <Heading/> */}
      <NavBar />
      <Route path="/" exact component={Home}></Route>

      <Route path="/:name" component={Search}></Route>
    </Switch>
  );
};

export default App;
