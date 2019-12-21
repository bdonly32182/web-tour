import React, { Component } from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import {partners,confirmPartner,delPartner} from '../../../action'
import ItemPartner from './ItemPartner'
 class ListPartner extends Component {
    constructor(props){
        super(props)
        this.confirmPartner = this.confirmPartner.bind(this)
        this.delPartner =this.delPartner.bind(this)
    }
     componentDidMount(){
         this.props.partners()
         
     }
    
    
     showList=()=>{
        console.log('showlist',this.props.listpartner);
        
            return this.props.listpartner && Array.isArray(this.props.listpartner) &&this.props.listpartner.map(partners =>
            (
                
                <ItemPartner key={partners._id} partner ={partners} onConfirm={this.confirmPartner} onDelPartner={this.delPartner}/>
            )

        ) 
         
        
     }
     confirmPartner =(partner)=>{
        this.props.confirmPartner(partner._id,partner)
     }
     delPartner = partner =>{
         this.props.delPartner(partner._id)
     }
    render() {
        console.log('show');
        
        return (
            <div className="row">
                {this.showList()}
            </div>
        )
    }
}
function mapStateToProps(state){
        console.log('state',state.partners);
        
 return {listpartner:state.partners}
}
export default connect(mapStateToProps,{partners,confirmPartner,delPartner})(ListPartner);