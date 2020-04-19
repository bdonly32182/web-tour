import React,{Component} from 'react'
import {connect} from 'react-redux'
import {checkOrder} from '../../../../action'
import Header from '../../Header';
import Menubar from '../../Menubar';
class OrderCheck extends Component{
    componentDidMount(){
        if(this.props.match.params.id){
            this.props.checkOrder(this.props.match.params.id)
        }
    }
    render(){
        console.log(this.props.order);
        const {order} = this.props
        return(
            <div>
                
                <Menubar edite="edite"/>
            <div className="container-fluid">
                
                <div className="row">
                    <Header />
                    <div className="col-md-4">
                        
                    </div>
                    <div className="col-md-8">
                        <h1>ชื่อทัวร์ <small>{order.tourName}</small></h1>
                         <h2>ทัวร์วันที่  <small>{order.round}</small> </h2>
                          
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">

                    </div>
                    <div className="col-md-8">
                        <img src={`http://localhost:3001/${order.pathPicPay}`} width="300" height="300" className="img-thumbnail"/>
                        <br />
                        <h3>ชื่อผู้ซื้อ : <small>{order.userFulname}</small> </h3>
                        <h3>เบอร์ติดต่อ : <small>{order.contact}</small></h3>
                    </div>

                </div>
                
            </div>
            </div>
        )
    }
}
function mapStateToProps({order}){
    return {order:order}
}
export default connect(mapStateToProps,{checkOrder})(OrderCheck)