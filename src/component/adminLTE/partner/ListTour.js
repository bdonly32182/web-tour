import React, { Component } from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {toursFetch,UpdateTour,DelTour,loadUser,Logout} from '../../../action'
import ItemTour from './ItemTour'
import Header from '../Header'
import Menubar from '../Menubar'
import Footer from '../Footer'
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
 class ListTour extends Component {
     constructor(props){
         super(props)
         this.onDelTour =this.onDelTour.bind(this)
         this.onEditTour = this.onEditTour.bind(this)
         this.onCheckTour = this.onCheckTour.bind(this)
         this.state={
             search:''
         }
     }
    async componentDidMount(){
              
        this.props.toursFetch()
      await  this.props.loadUser()
        this.props.users&&this.props.users.role != "partner" &&this.props.history.push('/not_role')
        
        !this.props.token&&this.props.history.push('/')
       
     }
     
     showListTour(){         
         if(Array.isArray(this.props.tours.tour)){
            
             
             let filterTour =  this.props.tours.tour.filter((tour)=>{
                    
                    return tour.tourName.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
                    //guide.Firstname.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
                })
                return  filterTour.map((tours,index)=>(
                    <tbody key={index}>
                    <tr>

                        <td className="text-dark">{tours._id}</td>
                        <td>{tours.tourName}</td>
                        <td>{tours.place}</td>
                        <td>{tours.highlight}</td>
                        <td>{tours.Hotel}</td>
                        
                        <td>{this.props.tours.Count[index]}</td>
                        <td>
                            <button className="btn btn-primary" onClick={()=>this.onEditTour(tours)}>edit</button>
                            <button className="btn btn-danger" onClick={()=>this.ConfirmDelete(tours)}>delete</button>
                            <button className="btn btn-warning" onClick={()=>this.onCheckTour(tours)}>check</button>

                        </td>

                    </tr>
                </tbody>
                ))
         }else{
             return this.props.tours.tour &&Array.isArray(this.props.tours.tour)&& this.props.tours.tour.map((tours,index)=>(
                <tbody key={index}>
                    <tr>

                        <td className="text-dark">{tours._id}</td>
                        <td>{tours.tourName}</td>
                        <td>{tours.place}</td>
                        <td>{tours.highlight}</td>
                        <td>{tours.Hotel}</td>
                        
                        <td>{this.props.tours.Count[index]}</td>
                        <td>
                            <button className="btn btn-primary" onClick={()=>this.onEditTour(tours)}>edit</button>
                            <button className="btn btn-danger" onClick={()=>this.ConfirmDelete(tours)}>delete</button>
                            <button className="btn btn-warning" onClick={()=>this.onCheckTour(tours)}>check</button>

                        </td>

                    </tr>
                </tbody>
            )) 
         }
                
           
     }
     onDelTour(tour){
        this.props.DelTour(tour._id,this.props.users)
     }
     onEditTour(tour){
        this.props.history.push('/manage/tour/edit/'+tour._id)
     }
     onCheckTour(tour){
        this.props.history.push('/manage/tour/check/'+tour._id)
     }
     UpdateSearchData =(event)=>{
        
        this.setState({search:event.target.value})
    }
    onLogout =()=>{
        this.props.Logout()
    }
    ConfirmDelete = (tour) => {
        confirmAlert({
          title: 'Confirm to Delete Tour',
          message: `Are you sure delete Tour ${tour.tourName}`,
          buttons: [
            {
              label: 'Yes',
              onClick: () => this.onDelTour(tour)
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
                    List Tour
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
                            <p className="text-right">
                                    Search TourName:<input type="text" onChange={this.UpdateSearchData.bind(this)}></input>
                            </p>
                            
                        </div>
                        {/* /.box-header */}
                        <div className="box-body">
                            <button className="btn btn-success float-md-right" onClick={()=>this.props.history.push('/manage/tour/add')}>Create</button>
                            <table id="example2" className="table table-bordered table-hover">
                            <thead>
                                    <tr>
                                    <th className=" text-center" scope="col-md-2">id</th>
                                    <th className=" text-center" scope="col-md-2">Tourname</th>
                                    <th className=" text-center"scope="col-md-2">Place(s)</th>
                                    <th className=" text-center" scope="col-md-2">Hightligh</th>
                                    <th className=" text-center" scope="col-md-2">Hotel</th>
                                    <th className=" text-center" scope="col-md-2">จำนวนสมาชิก</th>
                                    <th className=" text-center" scope="col-md-2 ">Action</th>
   
                                    </tr>
                                </thead>
                                {this.showListTour()}
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
function mapStateToProps({tours,users}){
        console.log(users);        
        
    return {tours:tours,users:users.user,token:users.token}
}
export default withRouter(connect(mapStateToProps,{toursFetch,DelTour,UpdateTour,loadUser,Logout})(ListTour))