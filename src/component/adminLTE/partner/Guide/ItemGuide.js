import React, { Component } from 'react'

export default class ItemGuide extends Component {
    render() {
        const {_id,Firstname,Lastname,Email,Address,Tel} = this.props.guide
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
                                        <td>
                                            <button className="btn btn-primary" onClick={()=>this.props.onEditGuide(this.props.guide)}>edit</button>
                                            <button className="btn btn-danger" onClick={()=>this.props.onDelGuide(this.props.guide)}>delete</button>
                                        </td>
                                    </tr>
                                </tbody>
                </table>
            </div>
        )
    }
}
