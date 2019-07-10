import React, {Component} from 'react'
import {NavLink, BrowserRouter} from 'react-router-dom'
import Footer from './Footer';
import Land from './Land';
import Grid from './Grid';
import ListItemIcon from '@material-ui/core/ListItemIcon'
import { Home, Book, AddShoppingCart, Help } from '@material-ui/icons'


class Nav extends Component{

    render(){
        const {hideNav} = this.props
        console.log(hideNav, 'my props')
        return(
            <div>
            <img src="/pics/jumiafirst.png" alt="jumiahead" width="100%"/>
        
            <img style={{float: "left"}} src="/pics/jumiahead2.png" alt="jumiahead" />
            <div id="input-container">
            <input id="fname" type="text" placeholder="Search products, brands and categories"/>
            <button className="btnMain"> SEARCH </button>
            <ul className="headUl">
            <BrowserRouter>
            <NavLink to="/about" className="appy" activeClassName="active"  style={{ textDecoration: 'none' }}>
        <li className="headLi"><Home />Hi Boy</li>
        </NavLink>
        <NavLink to="/comment" className="appy" activeClassName="active"  style={{ textDecoration: 'none' }}>
        <li className="headLi"><Help />Help</li>
        </NavLink>
        <NavLink to="/profile" className="appy" activeClassName="active" style={{ textDecoration: 'none' }}>
        <li className="headLi">Cart <AddShoppingCart /></li>
        </NavLink>
        </BrowserRouter>
        </ul>
            </div>
            <Land />
            <Grid />
            {/* <Footer /> */}
          
                </div>
        )
    }
}

export default Nav;

{/* <nav style={{visibility: hideNav ? "hidden" : "visible", }}> */}