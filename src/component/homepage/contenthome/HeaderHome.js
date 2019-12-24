import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class HeaderHome extends Component {
    constructor(props){
        super(props)
        this.state= {date : new Date()}
        
    }
    componentDidMount(){
          setInterval(()=>
             this.tick()
            // this.setState({date:new Date()})
        ,1000)
    }
  

    tick(){
        this.setState({date:new Date()})
    }
    render() {
        const style = {height:50,marginTop:20}

        return (
            <div className="container-fluid">
            <div className="row" >
                <div className="col-md-4 text-left">
                    <a className="navbar-brand" href="/" title="HOME"><i className="ion-paper-airplane" /> Best $ Ploy <span>travel</span></a>
                </div>
                <div className="col-md-4 text-center">
                    <p className="text-info" style={style}>{this.state.date.toLocaleTimeString()} </p>  
                </div>
                <div className="col-md-4 text-right">
                <ul className="list-inline">
                    <li className="list-inline-item title"><Link to="/">Login</Link></li>
                    |
                    <li className="list-inline-item title"><Link to="/register">Register</Link></li>
                    |
                    
                </ul>
                </div>
                
            </div>
        </div>
        )
    }
}
