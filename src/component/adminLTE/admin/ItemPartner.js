import React, { Component } from 'react'


export default class ItemPartner extends Component {
    render() {
        const {_id,lisence,companyname,firstname,lastname,email,address,contact} =this.props.partner
        console.log('itempartner',this.props.partner);
        
        return (
            <div>
                <table>
                             <thead>
                                    <tr>
                                    <th className="text-danger text-center" scope="col">id</th>
                                    <th className="text-danger text-center" scope="col">License</th>
                                    <th className="text-danger text-center"scope="col">Companyname(s)</th>
                                    <th className="text-danger text-center"scope="col">Firstname</th>
                                    <th className="text-danger text-center" scope="col">Lastname</th>
                                    <th className="text-danger text-center" scope="col">Email</th>
                                    <th className="text-danger text-center" scope="col">Address</th>
                                    <th className="text-danger text-center" scope="col">Contact</th>
                                    <th className="text-danger text-center" scope="col">Action</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{_id}</td>
                                        <td>{lisence}</td>
                                        <td>{companyname}</td>
                                        <td>{firstname}</td>
                                        <td>{lastname}</td>
                                        <td>{email}</td>
                                        <td>{address}</td>
                                        <td>{contact}</td>
                                        <td>
                                            <button className="btn btn-primary" onClick={()=>this.props.onConfirm(this.props.partner)}>confirm</button>
                                            <button className="btn btn-danger" onClick={()=>this.props.onDelPartner(this.props.partner)}>delete</button>
                                        </td>
                                    </tr>
                                </tbody>
                </table>
            </div>
        )
    }
}
