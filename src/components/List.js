import React, {Component} from 'react'
import {Link, BrowserRouter} from 'react-router-dom'


class List extends Component{
    
    render(){
        return(
            <div>
              <ul>
                  <li>Phone</li>
                  <li>Laptop</li>
                  <li>Home</li>
                  <li>Food</li>
              </ul>
            </div>
        )
    }
}
export default List;