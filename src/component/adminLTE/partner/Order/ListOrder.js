import React, { Component } from 'react'
import { connect } from 'react-redux';
import {orderFetch,approveOrder,loadUser,Logout,DeleteOrder} from '../../../../action'
import Header from '../../Header'
import Menubar from '../../Menubar'
import Footer from '../../Footer'
import ItemOrder from './ItemOrder';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import moment from 'moment';
 class ListOrder extends Component {

constructor(props){
    super(props)
    this.approve = this.approve.bind(this)
    this.checkList = this.checkList.bind(this)
}
   async componentDidMount(){
       
          await  this.props.loadUser()
            this.props.orderFetch()
            this.props.users&&this.props.users.role != "partner" &&this.props.history.push('/not_role')
        
            !this.props.token&&this.props.history.push('/')
       
    }

    showOrder =()=>{
        return this.props.order && Array.isArray(this.props.order) && this.props.order.map((orders,index)=>
            
        (
            <tbody key={index}>
            <tr>
                <td>{orders.userId}</td>
                <td>{orders.tourId}</td>
                <td>{orders.amountMember}</td>
                <td>{orders.amountRoom}</td>

                <td>{moment(orders.OrderDate).format('YYYY-MM-DD HH:mm:ss')}</td>
                <td>
                    <p className='text-center'>
                         <button className="btn btn-success active " onClick={()=>this.ConfirmApprove(orders)}>APPROVE</button>
                         <button className="btn btn-warning active " onClick={()=>this.checkList(orders._id)}>Check</button>
                         <button className="btn btn-danger active " onClick={()=>this.ConfirmDelete(orders)}>delete</button>

                    </p>
                    
                   
                </td>
            </tr>
        </tbody>
            //  <ItemOrder key={index} order={orders} approve ={this.approve} checkList={this.checkList}/>
        )
           
        )
        
    }
    approve=(order)=>{
        this.props.approveOrder(order,this.props.users)
    }
    checkList=(id)=>{
        this.props.history.push('/manage/order/'+id)
    }
    onLogout =()=>{
        this.props.Logout()
    }
    onDelOrder =(id)=>{
        this.props.DeleteOrder(id)
    }
    ConfirmApprove = (order) => {
        confirmAlert({
          title: 'Confirm to Approve Order',
          message: `Are you sure Approve Order ${order.nameUser}`,
          buttons: [
            {
              label: 'Yes',
              onClick: () => this.approve(order)
            },
            {
              label: 'No',
            //   onClick: () => alert('You Dont want Delete Guide ')
              
            }
          ]
        });
      };
    ConfirmDelete = (order) => {
        confirmAlert({
          title: 'Confirm to Delete Order',
          message: `Are you sure delete Order ${order.nameUser}`,
          buttons: [
            {
              label: 'Yes',
              onClick: () => this.onDelOrder(order._id)
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
                        <h3 className="box-title">OrderTour Data Table</h3>
                        {/* <p className="text-right">
                                    Search TourName:<input type="text" onChange={this.UpdateSearchData.bind(this)}></input>
                            </p> */}
                    </div>
                    {/* /.box-header */}
                    <div className="box-body">
                    <table id="example2" className="table table-bordered table-hover">
                            <thead>
                                    <tr>
                                    <th className=" text-center" scope="col-md-2">UserId</th>

                                    <th className=" text-center" scope="col-md-2">TourId</th>
                                    <th className=" text-center" scope="col-md-2">จำนวนสมาชิก</th>
                                    <th className=" text-center" scope="col-md-2">จำนวนห้องพัก</th>

                                    <th className=" text-center"scope="col-md-2">OrderDate</th>
                                    <th className=" text-center" scope="col-md-2 ">Action</th>
   
                                    </tr>
                                </thead>
                                 {this.showOrder()}
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
function mapStateToProp({order,users}){
    return {order:order,users:users.user,token:users.token}
}
export default connect(mapStateToProp,{orderFetch,approveOrder,loadUser,Logout,DeleteOrder})(ListOrder)