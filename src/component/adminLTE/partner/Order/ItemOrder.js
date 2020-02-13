import React, { Component } from 'react'

export default class ItemOrder extends Component {
    render() {
        const {_id,userId,tourId,amountMember,orderDate} = this.props.order
        return (
            <div>
                <table id="example2" className="table table-bordered table-hover">
                             <thead>
                                    <tr>
                                    <th className="text-danger text-center" scope="col">id</th>
                                    <th className="text-danger text-center" scope="col">userId</th>
                                    <th className="text-danger text-center"scope="col">tourId(s)</th>
                                    <th className="text-danger text-center"scope="col">Amount</th>
                                    <th className="text-danger text-center" scope="col">OrderDate</th>
                                    <th className="text-danger text-center" scope="col">action</th>

                                    </tr>
                                </thead>
                                <tbody >
                                    <tr>
                                        <td>{_id}</td>
                                        <td>{userId}</td>
                                        <td>{tourId}</td>
                                        <td>{amountMember}</td>
                                        <td>{orderDate}</td>
                                        <td>
                                            <p className='text-center'>
                                                 <button className="btn btn-danger active " onClick={()=>this.props.approve(this.props.order)}>APPROVE</button>
                                            </p>
                                           
                                        </td>
                                    </tr>
                                </tbody>
                </table>
            </div>
        )
    }
}
