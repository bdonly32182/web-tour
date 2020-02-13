import React, { Component } from 'react'
import { connect } from 'react-redux';
import {orderFetch,approveOrder} from '../../../../action'
import Header from '../../Header'
import Menubar from '../../Menubar'
import Footer from '../../Footer'
import ItemOrder from './ItemOrder';
 class ListOrder extends Component {

constructor(props){
    super(props)
    this.approve = this.approve.bind(this)
}
    componentDidMount(){
        console.log('didmout');
        
        this.props.orderFetch()
    }

    showOrder =()=>{
        return this.props.order && Array.isArray(this.props.order) && this.props.order.map((orders,index)=>
            
        (
                
             <ItemOrder key={index} order={orders} approve ={this.approve}/>
        )
           
        )
        
    }
    approve=(order)=>{
        this.props.approveOrder(order._id)
    }
    render() {
        console.log('show');
        
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
                        <h3 className="box-title">OrderTour Data Table</h3>
                        {/* <p className="text-right">
                                    Search TourName:<input type="text" onChange={this.UpdateSearchData.bind(this)}></input>
                            </p> */}
                    </div>
                    {/* /.box-header */}
                    <div className="box-body">
                        
                        {this.showOrder()}
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
function mapStateToProp({order}){
    return {order:order}
}
export default connect(mapStateToProp,{orderFetch,approveOrder})(ListOrder)