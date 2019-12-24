import React, { Component } from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {guidesFetch,DelGuide} from '../../../../action'
import ItemGuide from './ItemGuide'
import { registerField } from 'redux-form'
import Header from '../../Header'
import Menubar from '../../Menubar'
import Footer from  '../../Footer'
 class ListGuide extends Component {
     constructor(props){
         super(props)
         this.onDelGuide = this.onDelGuide.bind(this)
         this.onEditGuide = this.onEditGuide.bind(this)
     }
     componentDidMount(){
        this.props.guidesFetch()
     }
     showListGuide(){
         return this.props.guide && Array.isArray(this.props.guide) && this.props.guide.map(guides=>
            (
                <div>
                    <ItemGuide key ={guides._id} guide={guides} onDelGuide={this.onDelGuide} onEditGuide={this.onEditGuide}/>
                </div>
             
             )
         )
     }
     onDelGuide=(guide)=>{
         this.props.DelGuide(guide._id)
     }
     onEditGuide(guide){
        this.props.history.push('/manage/guide/edit/'+guide._id)
     }
    render() {
        return (
            <div > <Header />
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
                        <h3 className="box-title">Tour Data Table</h3>

                    </div>
                    {/* /.box-header */}
                    <div className="box-body">
                        
                        <button className="btn btn-success" onClick={()=>this.props.history.push('/manage/guide/add')}>Create</button>
                         {this.showListGuide()}
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
function mapStateToProp({guide,users}){
    console.log('guide',guide);
    console.log('g user',users);
    
    return {guide:guide,users:users}
}
export default withRouter(connect(mapStateToProp,{guidesFetch,DelGuide})(ListGuide))