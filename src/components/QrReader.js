import React, {Component} from 'react';
import { Container, Row } from 'react-bootstrap';
import QrReader from 'react-qr-scanner';

class QrContainer extends Component{
    constructor(props){
        super(props);
        this.state = {
            result:'Show me a QR code',
        }
        this.handleScan = this.handleScan.bind(this);
    }
    handleScan(data){
        if(data!=null){
            this.setState({
                result: "Succesfull"
            })
            window.open(data.text, '_blank');

            console.log(data.text);
        }
    }
    handleError(error){
        console.error(error)
    }
    render(){
        return(
        <Container className="text-center">
        <Row>
        <Container>
            <QrReader delay={500} onError={this.handleError} onScan={this.handleScan}>
            </QrReader>
        </Container>
        </Row>
        <Row>
            <h4 class="text-white">{this.state.result}</h4>
        </Row>
        </Container>
        );
    }
}
export default QrContainer;