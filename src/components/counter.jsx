import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count: this.props.value,
    tags: []
  };
  
  componentDidUpdate(prevProps, prevState){
     console.log('prevState', prevState);
     console.log('prevProps', prevProps);
  }

  componentWillUnmount(){
    console.log('counter unMOunt')
  }

  handelIncrement = () => {
    this.setState({
     count: this.state.count + 1
    })
  }
  
render(){
  return (
   <React.Fragment>
     <span className={this.GetClass()}> { this.Change() } </span>
     <button onClick={ this.handelIncrement } className="btn btn-primary" >Increment</button>
     <button onClick={ () =>  this.props.OnDeltete(this.props.CounId) } className="btn btn-danger btn-sm m-2">Delete</button>
     { this.state.tags.length === 0 ? <p>they are no tags</p> :
     <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
      }
   </React.Fragment>
    )
  }

  GetClass () {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }
   
  Change(){
   return this.state.count === 0 ? 'Zero' : this.state.count;
  }
}

export default Counter;

