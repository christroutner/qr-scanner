/*
  A component that creates a QR scanner.
*/

// Global npm libraries
import React from 'react'
import {QrReader} from 'react-qr-reader'

class QRScanner extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      handleResult: props.resultHandler
    }

    // Bind the this object to all event handlers
    this.handleOnResult = this.handleOnResult.bind(this)
  }


  render() {
    return (
      <div>
        <QrReader
          onResult={this.handleOnResult}
        />
      </div>
    )
  }

  handleOnResult(result, error) {
    if(result) {
      try {
        // console.log('handleOnResult() result: ', result)
        this.state.handleResult(result)
      } catch(err) {
        console.error(err)
      }
    }

    if(error) {
      // console.log('handleOnResult() error: ', error)
    }
  }

}

export default QRScanner
