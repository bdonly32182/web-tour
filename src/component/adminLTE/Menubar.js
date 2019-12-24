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
                <div className="user-panel">
                    <div className="pull-left image">
                        <img src={pathPic} className="img-circle" alt="User" />
                    </div>
                    <div className="pull-left info">
                        <p>{user}</p>
                        <a href="fake_url"><i className="fa fa-circle text-success" /> Online</a>
                    </div>
                </div>
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
                    <li className="active treeview menu-open">
                        <a href="fake_url">
                            <i className="fa fa-dashboard" /> <span>Approve Partner</span>
                            <span className="pull-right-container">
                                <i className="fa fa-angle-left pull-right" />
                            </span>
                        </a>
                        <ul className="treeview-menu">
                            <li><Link to="/manage/tour" className="text-danger"> <i className="fa fa-circle-o" /> tour</Link></li>
                            <li className="active"> <Link to="/manage/guide" className="text-danger">Guide</Link><i className="fa fa-circle-o" /> </li>
                        </ul>
                    </li>
                    
                </ul>
            </section>
            {/* /.sidebar */}
        </aside>
    </div>

        )
    }
}
