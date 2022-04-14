import React, { Component } from 'react'

export default class ClassComponent extends Component {
 state = {
     count:0
 }

  componentDidMount() {
    console.log("component did mount")
  }

  render() {
    return (
      <div>
          <button onClick={()=>{
            this.setState({count: this.state.count+1});
        }}>ClassComponent - {this.state.count} </button>
     </div>
    )
  }
}
