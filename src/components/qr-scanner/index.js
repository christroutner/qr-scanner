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
      result: 'No Result',
      facingMode: 'environment',
      onScan: props.onScan,
      onError: props.onError,

      handleResult: props.resultHandler
    }

    // Bind the this object to all event handlers
    this.handleOnResult = this.handleOnResult.bind(this)
  }

  handleScan(data) {
    if (data) {
      // this.setState({
      //   result: data
      // })
      // this.state.onScan && this.state.onScan(data)
      console.log('handleScan() data: ', data)
    }
  }

  handleError(err) {
    console.error('handleError(): ', err)
    // this.state.onError ? this.state.onError(err) : console.error(err)
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
        console.log('handleOnResult() result: ', result)
        this.state.handleResult(result)
      } catch(err) {
        console.error(err)
      }
    }

    if(error) {
      // console.log('handleOnResult() error: ', error)
    }
  }

  handleChangeMode () {
    const mode = this.state.facingMode === 'user' ? 'environment' : 'user'
    console.log(`changing to ${mode} mode`)
    this.setState({
      facingMode: mode
    })
  }
}

export default QRScanner
