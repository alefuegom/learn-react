import './App.css';
import React, { Component } from 'react';
/* function Helloworld(props){
  return (
    <div id="hello">
    <h3>{props.subtitle}</h3>
    {props.text}
    </div>
  );
}
 */
class Helloworld extends React.Component{

  state={
    show:true
  }
  toggleShow = () => {
    this.setState({show: !this.state.show})
  }

  render(){
    if(this.state.show){
      return(
        <div id="hello">
        <h3>{this.props.subtitle}</h3>
        {this.props.text}
        <button onClick={this.toggleShow}>Hide info</button>
        </div>
      )
    }
    else{
      return(
        <div>
          <h1>There are not elements</h1>
          <button onClick={()=> this.setState({show:true})}>Show info</button>
        </div>
      ) 
    }
  }
}

function App() {
  return (
  <div>This is my component: 
    <Helloworld text="May the force be with you" subtitle="Lorem Impsum"/>
    <Helloworld text="Game of thrones" subtitle="Caesar"/>
    <Helloworld text="Harry Potter" subtitle="Mariae"/>
  </div>
  );
}

export default App;
