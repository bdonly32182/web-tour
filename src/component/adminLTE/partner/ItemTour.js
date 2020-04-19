import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
 class ItemTour extends Component {
    constructor(props){
        super(props)
    }
    componentDidMount () {
        const script = document.createElement('script')
        script.src ='js/content.js';
        script.async = true;

        document.body.appendChild(script)

    }
   
    render() {
        const {_id,tourName,place,description,duration,highlight,Hotel,Guide}  = this.props.tours
      
        
        return (
            <div >
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
                                <tbody >
                                    <tr>

                                        <td className="text-dark">{_id}</td>
                                        <td>{tourName}</td>
                                        <td>{place}</td>
                                        <td>{highlight}</td>
                                        <td>{Hotel}</td>
                                        
                                        <td>{this.props.count}</td>
                                        <td>
                                            <button className="btn btn-primary" onClick={()=>this.props.onEditTour(this.props.tours)}>edit</button>
                                            <button className="btn btn-danger" onClick={()=>this.props.onDelTour(this.props.tours)}>delete</button>
                                            <button className="btn btn-warning" onClick={()=>this.props.onCheck(this.props.tours)}>check</button>

                                        </td>

                                    </tr>
                                </tbody>
                           
                            </table>

            </div>
        )
    }
}
export default withRouter(ItemTour)