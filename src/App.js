import { Component } from 'react';
import './App.css';
import { NBar } from './NBar';
import photo from './photo.jpg'

class App extends Component {
  
   state = {
    funllName: 'Saifeddine Troudi',
    bio: 'Hello , my name is Saifeddine and i like web development',
    imgSrc: photo,
    show: false,
    count: 0,
    intervall:null
}
   ShowHide = () => {
     this.setState({ show : !this.state.show })
   }
   
   componentDidMount() {
    const interval = setInterval(() => {
        this.setState({ count: this.state.count + 1 })
    }, 1000)   
    console.log("componentDidMount",interval);
}
  Reset=()=>{
  this.setState({count:this.state.count =0})
}
render() {
  return (
      <div>
      <div>
      <NBar/>
      </div>
      <div  className="profile-card">
      <div className="info-container">
      {
      this.state.show ? (
        <>
       <h2>{this.state.fullName}</h2>
       <h2>{this.state.bio}</h2>
       <h2><img src={photo}/></h2>
       <h2>{this.state.profession}</h2>
        </>
      ) : (
        <h3>Profil</h3>
      )
      }
      <button onClick={this.ShowHide}>{!this.state.show ? "Show" : "Hide"}</button>
      <>
       <h6> {this.state.count } : Secondes </h6>  
             <button onClick={this.Reset}>Reset</button>
      </>
      </div> 
      </div>
      </div>
  );
}
}

export default App;
