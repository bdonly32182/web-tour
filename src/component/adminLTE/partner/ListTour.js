import React, { Component } from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {toursFetch,UpdateTour,DelTour} from '../../../action'
import ItemTour from './ItemTour'
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
            return this.props.tours && Array.isArray(this.props.tours) &&this.props.tours.map(tours=>(
                <div>
                    <ItemTour key={tours._id} tours ={tours} onDelTour={this.onDelTour} onEditTour={this.onEditTour}/>
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
        return (
            <div className="row">
                {this.showListTour()}
            </div>
        )
    }
}
function mapStateToProps({tours}){
    console.log('state tour',tours);
    return {tours:tours}
}
export default withRouter(connect(mapStateToProps,{toursFetch,DelTour,UpdateTour})(ListTour))