/*
  A component that makes up the 'body' of the app.
*/

// Global npm libraries
import React from 'react'
import QRScanner from '../qr-scanner/index.js'
import { Container, Row, Col } from 'react-bootstrap'

class AppBody extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      qrScanResult: ''
    }

    // Bind the this object to all event handlers
    this.handleResult = this.handleResult.bind(this)
  }

  render() {
    return (
      <div>
        <Container>
          <Row>
            <h1>Scan a QR Code</h1>
          </Row>

          <Row>
            <Col>
              {
                this.state.qrScanResult
                ? (
                  <>
                  <h2>Scan result:</h2>
                  <p>{this.state.qrScanResult}</p>
                  </>
                )
                : (<QRScanner resultHandler={this.handleResult} />)
              }

            </Col>
          </Row>
        </Container>
      </div>
    )
  }

  handleResult(data) {
    if(!this.state.qrScanResult) {
      console.log('handleResult() data: ', data)

      const text = data.text
      // console.log('text: ', text)

      this.setState({
        qrScanResult: text
      })
    }

  };
}

export default AppBody
