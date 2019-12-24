import React, { Component } from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {toursFetch,UpdateTour,DelTour} from '../../../action'
import ItemTour from './ItemTour'
import Header from '../Header'
import Menubar from '../Menubar'
import Footer from '../Footer'
 class ListTour extends Component {
     constructor(props){
         super(props)
         this.onDelTour =this.onDelTour.bind(this)
         this.onEditTour = this.onEditTour.bind(this)
     }
     componentDidMount(){
        this.props.toursFetch()
     }
     showListTour=()=>{
            return this.props.tours && Array.isArray(this.props.tours) &&this.props.tours.map((tours,indexTour)=>(
                <div>
                    
                    <ItemTour key={tours._id} indexTour={indexTour=+1} tours ={tours} onDelTour={this.onDelTour} onEditTour={this.onEditTour}/>
                </div>
            ))
     }
     onDelTour(tour){
        this.props.DelTour(tour._id)
     }
     onEditTour(tour){
        this.props.history.push('/manage/tour/edit/'+tour._id)
     }
    render() {
        console.log(this.props.users);
        
        return (
            <div >
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
                            <h3 className="box-title">Tour Data Table</h3>

                        </div>
                        {/* /.box-header */}
                        <div className="box-body">
                            <button className="btn btn-success float-md-right" onClick={()=>this.props.history.push('/manage/tour/add')}>Create</button>
                            {this.showListTour()}
                            
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
 
    
    return {tours:tours,users:users.user}
}
export default withRouter(connect(mapStateToProps,{toursFetch,DelTour,UpdateTour})(ListTour))