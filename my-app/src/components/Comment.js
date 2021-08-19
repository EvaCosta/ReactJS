import React from 'react';

export default class App extends React.Component{
  render(){
    return (
      <div>
        <p>{this.props.text}</p>
        <button onClick={() => this.props.onDelete(this.props.id)}>Delete</button>
      </div>
    );
  }
}