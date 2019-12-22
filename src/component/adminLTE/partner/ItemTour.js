import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
 class ItemTour extends Component {
    constructor(props){
        super(props)
    }
    render() {
        const {_id,tourname,Place,description,duration,highlight,Hotel,PathPictur}  = this.props.tours
        console.log('tour',this.props.tours);
        
        return (
            <div>
                <button className="btn btn-success" onClick={()=>this.props.history.push('/manage/tour/add')}>Create</button>
                 <table>
                             <thead>
                                    <tr>
                                    <th className="text-danger text-center" scope="col">id</th>
                                    <th className="text-danger text-center" scope="col">Tourname</th>
                                    <th className="text-danger text-center"scope="col">Place(s)</th>
                                    <th className="text-danger text-center"scope="col">Description</th>
                                    <th className="text-danger text-center" scope="col">Duration</th>
                                    <th className="text-danger text-center" scope="col">Hightligh</th>
                                    <th className="text-danger text-center" scope="col">Hotel</th>
                                    <th className="text-danger text-center" scope="col">PathPictur</th>

                                    </tr>
                                </thead>
                                <tbody key={_id}>
                                    <tr>
                                        <td>{_id}</td>
                                        <td>{tourname}</td>
                                        <td>{Place}</td>
                                        <td>{description}</td>
                                        <td>{duration}</td>
                                        <td>{highlight}</td>
                                        <td>{Hotel}</td>
                                        <td>{PathPictur}</td>
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