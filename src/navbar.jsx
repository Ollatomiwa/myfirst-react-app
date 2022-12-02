import React, { Component } from 'react';

// stateless functional component'

const NavBar= ({totalCounters})=>{
    return (
        <nav className="navbar navbar-dark bg-secondary px-5">
            <a className="navbar-brand text-light " href="#">
                Cart No: <span className='text-light badge bg-pill bg-dark'>{totalCounters}</span>
            </a>
        </nav>
      );
};
//class NavBar extends Component {
    
   // render() { 
        //return (
            //<nav className="navbar navbar-light bg-light ms-4">
            //</nav><a className="navbar-brand" href="#">
                    //</a>NavBar <span className='badge bg-pill bg-secondary'>{this.props.//totalCounters}</span>
        //        </a>
      //      </nav>
    //      );
   // }
//}
 
export default NavBar;