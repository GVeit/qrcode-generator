import React from 'react';
import './App.css';
var QRCode = require('qrcode.react'); /* https://www.npmjs.com/package/qrcode.react */

type MyQR = { value: string };
class App extends React.Component <{}, { qrValue: string }> {

  textInput: any;
  textLevelInput: any;

  constructor(props: Readonly<{}>) {
    super(props);
    this.state = {qrValue: 'www.rit.edu'};
  }

  changeQr = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    let newQrValue = this.textInput.value;
    let newLevelValue = this.textLevelInput.value;
    //console.log('submitted');
    //update new value 
    this.setState({qrValue : newQrValue});
  }

  render() {
    return (
      <div className="App">

        <h1 className="qrValue" > Current Value: {this.state.qrValue}</h1>

        <form onSubmit={this.changeQr} className="form">
            <input id="input" ref={(input) => { this.textInput = input; }} type="text" placeholder="Enter Text Here" />
            <input type="submit" value="Submit" />
        </form>

        {/* generate a qr code*/}
        <QRCode className="qrCode" level={"M"} value={this.state.qrValue} />

      </div>  
    );
  }
}

export default App;
