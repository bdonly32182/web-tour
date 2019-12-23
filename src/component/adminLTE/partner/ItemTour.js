import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
 class ItemTour extends Component {
    constructor(props){
        super(props)
    }
   
    render() {
        const {_id,tourName,place,description,duration,highlight,Hotel,Guide}  = this.props.tours
        
        return (
            <div key={_id}>
               
                 <table >
                             <thead>
                                    <tr>
                                    <th className="text-danger text-center" scope="col">id</th>
                                    <th className="text-danger text-center" scope="col">Tourname</th>
                                    <th className="text-danger text-center"scope="col">Place(s)</th>
                                    <th className="text-danger text-center"scope="col">Description</th>
                                    <th className="text-danger text-center" scope="col">Duration</th>
                                    <th className="text-danger text-center" scope="col">Hightligh</th>
                                    <th className="text-danger text-center" scope="col">Hotel</th>
                                    <th className="text-danger text-center" scope="col">Guide</th>

                                    </tr>
                                </thead>
                                <tbody >
                                    <tr>
                                        <td>{_id}</td>
                                        <td>{tourName}</td>
                                        <td>{place}</td>
                                        <td>{description}</td>
                                        <td>{duration}</td>
                                        <td>{highlight}</td>
                                        <td>{Hotel}</td>
                                        <td>{Guide}</td>
                                        <td>
                                            <button className="btn btn-primary" onClick={()=>this.props.onEditTour(this.props.tours)}>edit</button>
                                            <button className="btn btn-danger" onClick={()=>this.props.onDelTour(this.props.tours)}>delete</button>
                                        </td>
                                    </tr>
                                </tbody>
                </table>
            </div>
        )
    }
}
export default withRouter(ItemTour)