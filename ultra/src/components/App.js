import React, { Component } from 'react';
import Navbar from './navbar';
import Contact from './contact';
import Index from './Index';
import {BrowserRouter, Route} from 'react-router-dom';





class App extends Component{
  render(){
    return(
      <BrowserRouter>

      <Navbar/>
      <Route  exact path='/' component={Index}/>
      <Route path='/contact' component={Contact}/>

      <Contact/>

</BrowserRouter>

    )
  }
}
export default App;
