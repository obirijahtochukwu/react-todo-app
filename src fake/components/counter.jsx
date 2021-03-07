import React, { Component, component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";


class Counter extends Component {
 state = {
  value: this.props.counter.value
 };

 handleIncrement = () => {
  this.setState({ value: this.state.value + 1 })
 }

 render () {
  return ( 
   <div>
    <span className={this.getBadgeClasses()}>{this.formatvalue()}</span>
    <button onClick={this.handleIncrement} className="btn btn-outline-primary btn-sm m-2">increment</button>
    <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
   </div>
  );
 }

 getBadgeClasses() {
  let classes = 'badge m-2 badge-';
  classes += (this.state.value === 0) ? 'warning' : 'primary';
  return classes;
 }

 formatvalue() {
  const { value } = this.state;
  return value === 0 ? 'zero' : value;
 }

}

export default Counter;