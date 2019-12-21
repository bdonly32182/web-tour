import React, { Component } from 'react'

export default class Footer extends Component {
    constructor(props){
        super(props);
    }
    render() {
        const {role} = this.props
        return (
            <div>
                <footer className="main-footer">
                    <div className="pull-right hidden-xs">
                        <b>Version</b> 2.4.13
    </div>
        <strong>Copyright © 2014-2019 <a href="https://adminlte.io">AdminLTE</a>{role}</strong>
  </footer>
            </div>

        )
    }
}
