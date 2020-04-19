import React, { Component } from 'react'
export default class ItemGuide extends Component {
    constructor(props){
        super(props)
        this.state = {value: null};
        this.handleChange = this.handleChange.bind(this)
        this.mapOption = this.mapOption.bind(this)
    }

    handleChange(event) {
        console.log('eve',event);
        
        this.setState({value: event.target.value});
      }
    
    mapOption =()=>{
      return Array.isArray(this.props.tour)&& this.props.tour.map((tour,index) =>(
               <option value={tour.tourName} key={index}>{tour.tourName}</option>
        ))
    }
    handle = e =>{
        
        e.preventDefault()
        console.log(this.state.value);
    }
    render() {
        const {_id,Firstname,Lastname,Email,Address,Tel,Status} = this.props.guide
        
        
        
        return (
            <div>
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
                                <tbody >
                                    <tr>
                                        <td>{_id}</td>
                                        <td>{Firstname}</td>
                                        <td>{Lastname}</td>
                                        <td>{Email}</td>
                                        <td>{Address}</td>
                                        <td>{Tel}</td>
                                        <td>{Status.toString()}</td>
                                        {/* {Status.toString() === "true" &&
                                        <td>
                                        <select value={this.state.value} onChange={this.handleChange}>
                                            <option disabled selected>-- Working --</option>
                                            
                                        </select>
                                         </td>
                                        } */}
                                        {/* {Status.toString() !== "true" &&
                                         <td>
                                            <select value={this.state.value} onChange={this.handleChange} defaultValue={null}>
                                                <option  selected value={null}>-- Select --</option>
                                                {Array.isArray(this.props.tour)&&this.props.tour.map((tour,index)=>(
                                                    <option key={index} value={tour.tourName} >{tour.tourName}</option>
                                                ))}
                                            </select>
                                        </td>
                                        } */}
                                       
                                        <td>
                                            <button className="btn btn-primary" onClick={()=>this.props.onEditGuide(this.props.guide)}>  edit</button>
                                            <button className="btn btn-danger" onClick={()=>this.props.onDelGuide(this.props.guide)}>  delete</button>
                                        </td>
                                    </tr>
                                </tbody>
                </table>
            </div>
        )
    }
}
