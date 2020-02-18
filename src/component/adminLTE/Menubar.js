import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class Menubar extends Component {
    constructor(props){
        super(props)
    }
    render() {
        const {user,pathPic} = this.props
        
        return (
            <div>
            <aside className="main-sidebar">
            {/* sidebar: style can be found in sidebar.less */}
            <section className="sidebar">
                {/* Sidebar user panel */}
                {/* <div className="user-panel">
                    <div className="pull-left image">
                        <h4 className="text-info">{user.email}</h4>
                    </div>
                    
                </div> */}
                {/* search form */}
                <form action="#" method="get" className="sidebar-form">
                    <div className="input-group">
                        <input type="text" name="q" className="form-control" placeholder="Search..." />
                        <span className="input-group-btn">
                            <button type="submit" name="search" id="search-btn" className="btn btn-flat">
                                <i className="fa fa-search" />
                            </button>
                        </span>
                    </div>
                </form>
                {/* /.search form */}
                {/* sidebar menu: : style can be found in sidebar.less */}
                <ul className="sidebar-menu" data-widget="tree">
                    <li className="header">MAIN NAVIGATION</li>
                    {user&&user.role ==="admin"&&(
                        <li className="active treeview menu-open">
                        <a >
                            <i className="fa fa-dashboard" /> <span>Approve Partner</span>
                            <span className="pull-right-container">
                                <i className="fa fa-angle-left pull-right" />
                            </span>
                        </a>
                        <ul className="treeview-menu">
                            <li><Link to="/manage/tour" className="text-danger"> <i className="fa fa-circle-o" /> tour</Link></li>
                            <li className="active"> <Link to="/manage/guide" className="text-danger"><i className="fa fa-circle-o" />Guide</Link> </li>
                        </ul>
                    </li> 
                    )}
                    {user&&user.role=="partner" &&(
                           <li className="active treeview menu-open">
                           <a >
                               <i className="fa fa-dashboard" /> <span>Manager Tour</span>
                               <span className="pull-right-container">
                                   <i className="fa fa-angle-left pull-right" />
                               </span>
                           </a>
                           <ul className="treeview-menu">
                               <li className="active"><Link to="/manage/tour" className="text-danger"> <i className="fa fa-circle-o" /> Tour</Link></li>
                               <li className="active"> <Link to="/manage/guide" className="text-danger"><i className="fa fa-circle-o" />Guide</Link> </li>
                               <li className="active"> <Link to="/manage/order" className="text-danger"><i className="fa fa-circle-o" />Order</Link> </li>
                           </ul>
                       </li>
                    )}
                   
                    
                </ul>
            </section>
            {/* /.sidebar */}
        </aside>
    </div>

        )
    }
}
