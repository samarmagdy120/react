import React, { Component } from 'react';
import About from '../about';
import Footer from '../footer';
import Portofolio from '../portofolio';
import Profile from '../profile';
import SocialMedia from '../socialMedia';
import Work from '../work';



class Index extends Component{
  render(){
    return(
      <div className="App">

<Work/>
<Portofolio/>
<Profile/>
<About/>
<SocialMedia/>
<Footer/>
</div>

    )
  }
}
export default Index;
