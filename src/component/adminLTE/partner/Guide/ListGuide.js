import React, { Component } from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {guidesFetch,DelGuide} from '../../../../action'
import ItemGuide from './ItemGuide'
import { registerField } from 'redux-form'
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
            <div className="row">
                <button className="btn btn-success" onClick={()=>this.props.history.push('/manage/guide/add')}>Create</button>
                {this.showListGuide()}
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