import React from 'react';
import './index.css'
class App extends React.Component {
  constructor (props){
    super(props)
    this.state={
      show:true
    }
    this.onChange=this.onChange.bind(this)
  }
  onChange(){
    this.setState({
      show:!this.state.show
    })
  }
  render (){
    return <>
    <div className={this.state.show? 'show':'hide'}>hello word</div>
    <button onClick={this.onChange}>target</button>
    </>
  }
}

export default App;
