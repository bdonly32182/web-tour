import React, { Component } from 'react'
import {connect} from 'react-redux'
import {withRouter,Link} from 'react-router-dom'
import {userLogin} from '../../action'
import Header from './Header'
import Menubar from './Menubar'
import Footer from './Footer'
import Content from './Content'
 class IntregateLTE extends Component {

   showadminLTE(users){
       if(users){
          if(users.role == "admin"){
              return (
                        <div className='container-fluid'>
                            {/* <Header />
                            <Menubar /> */}
                            <div className="row">
                                <p><Link to="/manage/tour" className="text-danger">tour</Link> </p>
                            </div>
                            
                            <Footer role="admin"/>
                        </div>
              )

          }else if(users.role == "partner"){
            return (
                <div className='container-fluid'>
                {/* <Header />
                <Menubar /> */}
                <div className="row">
                    <p><Link to="/manage/tour" className="text-danger">tour</Link> </p>
                </div>
                
                <Footer role="partner"/>
            </div>
            )
          }
          
       }else{
           return (
               <div>
                   <Header />
                   <Menubar user="test admin" pathPic ="http://localhost/Tour-image/cap.PNG"></Menubar>
                   <Content />
                   <Footer role="test"/>
               </div>
           )
       }
   }

    render() {
        
        return (
            
            <div>
                
              {this.showadminLTE(this.props.users)}
            </div>
        )
    }
}
function mapStateToProps(state){
    console.log('state intregateLET',state);
    return {users:state.users.user}
}
export default withRouter(connect(mapStateToProps)(IntregateLTE))