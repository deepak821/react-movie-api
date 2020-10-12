import React from 'react';
import Heading from './Heading'
import Home from './Home'
import Search from './Search'
import {BrowserRouter , Route} from 'react-router-dom'
const App=()=>{
    return(<BrowserRouter>
      <Heading/>
      <Route path="/" exact component={Home}></Route>
      <Route path="/:name" component={Search}></Route>
      </BrowserRouter>
    )
}

export default App;