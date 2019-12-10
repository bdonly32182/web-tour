import React, { Component } from 'react'
import Header from './Header'
import Menubar from './Menubar'
import Footer from './Footer'

export default class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <Menubar />
                <Footer />
            </div>
        )
    }
}
