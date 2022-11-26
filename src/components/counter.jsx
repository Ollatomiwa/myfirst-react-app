import React, { Component } from 'react';

class Counter extends Component {
    //constructor() {
      // super();
       //this.handleIncrement = this.handleIncrement.bind(this);
    //}
    state ={
      count: 1,
      tags: ['tag1', 'tag2', 'tag3']

    };
    handleIncrement=()=>{
     this.setState({count: this.state.count +1}) // updating the state: if we click on button the value will increase// 
     
   }
   
    render()
   { 
    
      return ( 
         <div>
          <span className={this.getBadgeClasses()}> {this.formatCount()}</span>
            <button 
            onClick={this.handleIncrement}
             className="btn btn-secondary btn-sm"> Increment
            </button>
            <ul>{this.state.tags.map (tag => <li key={tag}>{tag}</li>)}</ul> 
         </div>); 
   }
  

   getBadgeClasses() {
      let classes= " badge  m-2 badge-";
      classes += this.state.count === 0 ? " bg-warning" : "  bg-primary";
      return classes; 

   }
    formatCount()
   {
      const {count}= this.state;
      return count === 0 ? "Zero": count;
   }
}
 
export default Counter;