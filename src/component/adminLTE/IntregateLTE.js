import React, { Component } from 'react'
import {connect} from 'react-redux'
import {withRouter,Link} from 'react-router-dom'
import {userLogin} from '../../action'
import Header from './Header'
import Menubar from './Menubar'
import Footer from './Footer'
import Content from './content'
 class IntregateLTE extends Component {

   
    render() {
        console.log(this.props.users);
        
        return (
            
            <div>
                {this.props.users.role =="admin" &&
                <div>
                    
                     <Header />
                    <Menubar />
                    <Content />
                    <Footer />
                </div>
                }
                {this.props.users.role == "partner"&&
                <div>
                    <Header />
                </div>

                }
              
            </div>
        )
    }
}
function mapStateToProps(state){
    // console.log('state intregateLET',state);
    return {users:state.users.user}
}
export default withRouter(connect(mapStateToProps,{userLogin})(IntregateLTE))