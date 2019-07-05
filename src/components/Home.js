import React, {Component} from 'react'
import {Link, Redirect, BrowserRouter} from 'react-router-dom'
class Home extends Component{
    constructor(props){
        super(props)
        const token = localStorage.getItem("token")

        let loggedIn = true
        if(token == null){
            loggedIn = false
        }
        this.state={
            loggedIn
        }
    }
    render(){
        // if(this.state.loggedIn === false)
        // return <Redirect to="/" />
        return(
            <div>
                <h1>This is the home page.Anybody can veiw this</h1>
                
                <Link to="/logout">Logout</Link>
            </div>
        )
    }
}
export default Home;
