import React, { Component } from 'react'

export default class Content extends Component {
    componentDidMount () {
        const script = document.createElement('script')
        script.src ='js/content.js';
        script.async = true;

        document.body.appendChild(script)

    }
    render() {
        return (
            <div>
                    <div className="content-wrapper">
                {/* Content Header (Page header) */}
                <section className="content-header">
                    <h1>
                    Data Tables
                    <small>advanced tables</small>
                    </h1>
                    <ol className="breadcrumb">
                    <li><a href="#"><i className="fa fa-dashboard" /> Home</a></li>
                    <li><a href="#">Tables</a></li>
                    <li className="active">Data tables</li>
                    </ol>
                </section>
                {/* Main content */}
                <section className="content">
                    <div className="row">
                    <div className="col-xs-12">
                        <div className="box">
                        <div className="box-header">
                            <h3 className="box-title">Hover Data Table</h3>
                        </div>
                        {/* /.box-header */}
                        <div className="box-body">
                            <table id="example2" className="table table-bordered table-hover">
                            <thead>
                                <tr>
                                <th className="text-danger">Rendering engine</th>
                                <th>Browser</th>
                                <th>Platform(s)</th>
                                <th>Engine version</th>
                                <th>CSS grade</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>Trident</td>
                                <td>Internet
                                    Explorer 4.0
                                </td>
                                <td>Win 95+</td>
                                <td> 4</td>
                                <td>X</td>
                                </tr>
                               
                                
                                
                               
                            </tbody>
                            <tfoot>
                                <tr>
                                <th>Rendering engine</th>
                                <th>Browser</th>
                                <th>Platform(s)</th>
                                <th>Engine version</th>
                                <th>CSS grade</th>
                                </tr>
                            </tfoot>
                            </table>
                        </div>
                        {/* /.box-body */}
                        </div>
                        {/* /.box */}
                    </div>
                    {/* /.col */}
                    </div>
                    {/* /.row */}
                </section>
                {/* /.content */}
                </div>

            </div>
        )
    }
}
