import React, { Component } from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import {partners,confirmPartner,delPartner} from '../../../action'
import ItemPartner from './ItemPartner'
import Header from '../Header'
import Footer from '../Footer'
import Menubar from '../Menubar'
 class ListPartner extends Component {
    constructor(props){
        super(props)
        this.confirmPartner = this.confirmPartner.bind(this)
        this.delPartner =this.delPartner.bind(this)
    }
     componentDidMount(){
         this.props.partners()
         
     }
    
    
     showList=()=>{
        
            return this.props.listpartner && Array.isArray(this.props.listpartner) &&this.props.listpartner.map(partners =>
            (
                
                <ItemPartner key={partners._id} partner ={partners} onConfirm={this.confirmPartner} onDelPartner={this.delPartner}/>
            )

        ) 
         
        
     }
     confirmPartner =(partner)=>{
        this.props.confirmPartner(partner._id,partner)
     }
     delPartner = partner =>{
         this.props.delPartner(partner._id)
     }
    render() {
        console.log('show');
        
        return (
            <div>
            <Header />
            <Menubar />
            <div className="content-wrapper">
            {/* Content Header (Page header) */}
            <section className="content-header">
                <h1>
                Data Tables
                <small>advanced tables</small>
                </h1>
                <ol className="breadcrumb">
                <li><a href="#"><i className="fa fa-dashboard" /> Home</a></li>
                <li><a href="#">Tables</a></li>
                <li className="active">Data tables</li>
                </ol>
            </section>
            {/* Main content */}
            <section className="content">
                <div className="row">
                <div className="col-xs-12">
                    <div className="box">
                    <div className="box-header">
                        <h3 className="box-title">Partner Data Table</h3>

                    </div>
                    {/* /.box-header */}
                    <div className="box-body">
                        {this.showList()}
                        
                    </div>
                    {/* /.box-body */}
                    </div>
                    {/* /.box */}
                </div>
                {/* /.col */}
                </div>
                {/* /.row */}
            </section>
            {/* /.content */}
            </div>
           
            <Footer />
        </div>
        )
    }
}
function mapStateToProps(state){
        console.log('state',state.partners);
        
 return {listpartner:state.partners}
}
export default connect(mapStateToProps,{partners,confirmPartner,delPartner})(ListPartner);