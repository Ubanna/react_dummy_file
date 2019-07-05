import React, {Component} from 'react'
import {Link, BrowserRouter} from 'react-router-dom'

class Nav extends Component{

    render(){
        const {hideNav} = this.props
        console.log(hideNav, 'my props')
        return(
            <nav style={{display: hideNav ? "none" : "flex", }}>
                <h3>Logo</h3>
                <ul className="nav-links">
                    <Link to="/profile">
                <li>Profile</li>
                </Link>
                <Link to="/about">
                <li>About us</li>
                </Link>
                </ul>

                </nav>
        )
    }
}

export default Nav;

{/* <nav style={{visibility: hideNav ? "hidden" : "visible", }}> */}