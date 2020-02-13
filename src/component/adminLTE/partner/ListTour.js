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
         this.state={
             search:''
         }
     }
     componentDidMount(){
        this.props.toursFetch()
     }
     showListTour(){
         console.log(this.props.tours.tour);
         
         if(Array.isArray(this.props.tours.tour)){
             console.log('lowercase unifind');
             
             let filterTour =  this.props.tours.tour.filter((tour)=>{
                    
                    return tour.tourName.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
                    //guide.Firstname.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
                })
                return  filterTour.map((tours,index)=>(
                    <div>
                        
                        <ItemTour key={index}  tours ={tours} onDelTour={this.onDelTour} onEditTour={this.onEditTour} count={this.props.tours.Count}/>
                    </div>
                ))
         }else{
             return this.props.tours.tour &&Array.isArray(this.props.tours.tour)&& this.props.tours.tour.map((tours,index)=>(
                <div>
                    
                    <ItemTour key={index}  tours ={tours} onDelTour={this.onDelTour} onEditTour={this.onEditTour} count={this.props.tours.Count}/>
                </div>
            )) 
         }
                
           
     }
     onDelTour(tour){
        this.props.DelTour(tour._id)
     }
     onEditTour(tour){
        this.props.history.push('/manage/tour/edit/'+tour._id)
     }
     UpdateSearchData =(event)=>{
        
        this.setState({search:event.target.value})
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
                            <p className="text-right">
                                    Search TourName:<input type="text" onChange={this.UpdateSearchData.bind(this)}></input>
                            </p>
                            
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
        console.log(users);        
        
    return {tours:tours,users:users.user}
}
export default withRouter(connect(mapStateToProps,{toursFetch,DelTour,UpdateTour})(ListTour))