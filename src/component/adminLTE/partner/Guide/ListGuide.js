import React, { Component } from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {guidesFetch,DelGuide,toursFetch,loadUser,Logout} from '../../../../action'
import ItemGuide from './ItemGuide'
import { registerField } from 'redux-form'
import Header from '../../Header'
import Menubar from '../../Menubar'
import Footer from  '../../Footer'
import Alert from 'reactstrap'
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
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
    async componentDidMount(){
        // console.log('didmount listguide');
        
          await  this.props.loadUser()
            this.props.guidesFetch()
            this.props.toursFetch()
            console.log(this.props.users);
            
            this.props.users&&this.props.users.role != "partner" &&this.props.history.push('/not_role')
        
            !this.props.token&&this.props.history.push('/')
        
     }
     
     showListGuide(){
         if(Array.isArray(this.props.guide.guide)){
            //  console.log('if case');
            let searchFilter = this.props.guide.guide.filter((guide)=>{
                
                    return guide.Firstname.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 
                }) 
                return  searchFilter.map((guides,index)=>
                    (
                        
                            <tbody key={index}>
                                    <tr>
                                        <td>{guides._id}</td>
                                        <td>{guides.Firstname}</td>
                                        <td>{guides.Lastname}</td>
                                        <td>{guides.Email}</td>
                                        <td>{guides.Address}</td>
                                        <td>{guides.Tel}</td>
                                        <td>{guides.Status.toString()}</td>
                                        <td>
                                            <button className="btn btn-block btn-primary" onClick={()=>this.onEditGuide(guides)}>  edit</button>
                                            <button className="btn btn-block btn-danger" onClick={()=>this.ConfirmDelete(guides)}>  delete</button>
                                        </td>
                                    </tr>
                                </tbody>
                        
                     
                     )
                 )
         }else{
            //  console.log('else case');
             
             return  this.props.guide.guide&&Array.isArray(this.props.guide.guide) && this.props.guide.guide.map((guides,index)=>
            (
                <tbody key={index}>
                <tr>
                    <td>{guides._id}</td>
                    <td>{guides.Firstname}</td>
                    <td>{guides.Lastname}</td>
                    <td>{guides.Email}</td>
                    <td>{guides.Address}</td>
                    <td>{guides.Tel}</td>
                    <td>{guides.Status.toString()}</td>
                    <td>
                        <button className="btn btn-primary" onClick={()=>this.onEditGuide(guides)}>  edit</button>
                        <button className="btn btn-danger" onClick={()=>this.ConfirmDelete(guides)}>  delete</button>
                    </td>
                </tr>
                </tbody>
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
     onLogout =()=>{
        this.props.Logout()
    }
    test =()=>{
        alert('You test')
    }
    ConfirmDelete = (guide) => {
        confirmAlert({
          title: 'Confirm to Delete Guide',
          message: `Are you sure delete guide ${guide.Firstname} ${guide.Lastname}`,
          buttons: [
            {
              label: 'Yes',
              onClick: () => this.onDelGuide(guide)
            },
            {
              label: 'No',
            //   onClick: () => alert('You Dont want Delete Guide ')
              
            }
          ]
        });
      };
    render() {
        
        return (
            <div > 
            <Header user ={this.props.users} onLogout ={this.onLogout}/>
            <Menubar user={this.props.users}/>
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
                        {/* <button onClick={this.}>Test Alert</button> */}
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
                        <table id="example2" className="table table-bordered table-hover">
                             <thead>
                                    <tr>
                                    <th className="text-danger text-center" scope="col">id</th>
                                    <th className="text-danger text-center" scope="col">Firstname</th>
                                    <th className="text-danger text-center"scope="col">Lastname(s)</th>
                                    <th className="text-danger text-center"scope="col">Email</th>
                                    <th className="text-danger text-center" scope="col">Address</th>
                                    <th className="text-danger text-center" scope="col">Tel</th>
                                    <th className="text-danger text-center" scope="col">Status</th>
                                    {/* <th className="text-danger text-center" scope="col">Select Tour</th> */}
                                    <th className="text-danger text-center" scope="col">action</th>

                                    </tr>
                                </thead>
                                {this.showListGuide()}
                            </table>
                         
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
    return {guide:guide,users:users.user,tours:tours,token:users.token}
}
export default withRouter(connect(mapStateToProp,{guidesFetch,DelGuide,toursFetch,loadUser,Logout})(ListGuide))