import React, { Component } from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {guidesFetch,DelGuide,toursFetch,AssignGuide} from '../../../../action'
import ItemGuide from './ItemGuide'
import { registerField } from 'redux-form'
import Header from '../../Header'
import Menubar from '../../Menubar'
import Footer from  '../../Footer'
import Alert from 'reactstrap'
 class ListGuide extends Component {
     constructor(props){
         super(props)
         this.onDelGuide = this.onDelGuide.bind(this)
         this.onEditGuide = this.onEditGuide.bind(this)
         this.state={
             search :'',
             visible:false
         }
     }
     componentDidMount(){

        this.props.guidesFetch()
        this.props.toursFetch()
     }
     
     showListGuide(){
         if(Array.isArray(this.props.guide.guide)){
            let searchFilter = this.props.guide.guide.filter((guide)=>{
                
                    return guide.Firstname.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 
                }) 
                return  searchFilter.map((guides,index)=>
                    (
                        <div>
                            <ItemGuide key ={index} guide={guides} onDelGuide={this.onDelGuide} onEditGuide={this.onEditGuide}onAssign={this.onAssign} tour = {this.props.tours.tour} err={this.props.guide.msg}/>
                        </div>
                     
                     )
                 )
         }else{
             console.log('else case');
             
             return  this.props.guide.guide&&Array.isArray(this.props.guide.guide) && this.props.guide.guide.map((guides,index)=>
            (
                <div>
                    <ItemGuide key ={index} guide={guides} onDelGuide={this.onDelGuide} onEditGuide={this.onEditGuide}tour = {this.props.tours.tour} onAssign={this.onAssign}  err={this.props.guide.msg}/>
                </div>
             
             )
         ) 
         }
                
        
     }
     onDelGuide=(guide)=>{
         this.props.DelGuide(guide._id)
     }
     onEditGuide(guide){
        this.props.history.push('/manage/guide/edit/'+guide._id)
     }
     onAssign=(guide,tours)=>{
        this.props.AssignGuide(guide,tours)
     }
     UpdateSearchData (event){
         this.setState({search:event.target.value})
     }
     setShowError (){
         this.setState({visible:true},()=>{
            window.setTimeout(()=>{
                this.setState({visible:false})
            },3000)
         })
         
     }
    render() {
        console.log(this.props.guide.guide);
        
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
                        <h3 className="box-title">Guide Data Table</h3>
                        <p className="text-right">
                                    Search TourName:<input type="text" onChange={this.UpdateSearchData.bind(this)}></input>
                            </p>
                    </div>
                    {/* /.box-header */}
                    <div className="box-body">
                        
                        <button className="btn btn-success" onClick={()=>this.props.history.push('/manage/guide/add')}>Create</button>
                        <br />
                        {this.props.guide.msg &&
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-8"></div>
                                 <div className="alert alert-warning col-md-4 alert-center" >
                                    <strong className="text-center">warning</strong> {this.props.guide.msg}
                                </div>
                            </div>
                        </div>
                       
                        }
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
function mapStateToProp({guide,users,tours}){
    console.log('guide',guide);
    console.log('g user',users);
    console.log('g tour',tours);
    
    return {guide:guide,users:users,tours:tours}
}
export default withRouter(connect(mapStateToProp,{guidesFetch,DelGuide,toursFetch,AssignGuide})(ListGuide))