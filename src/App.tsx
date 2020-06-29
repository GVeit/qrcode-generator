import React from 'react';
import './App.css';
var QRCode = require('qrcode.react'); /* https://www.npmjs.com/package/qrcode.react */

class App extends React.Component <{}, { header: string }> {

  textInput: any;

  constructor(props: Readonly<{}>) {
    super(props);
    this.state = {header: 'www.rit.edu'};
  }

  changeHeader = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    let newHeader = this.textInput.value;
    //console.log('submitted');
    //update new value 
    this.setState({header : newHeader});
  }

  render() {
    return (
      <div className="App">

        <h1 className="qrValue" > Current Value: {this.state.header}</h1>

        <form onSubmit={this.changeHeader} className="form">
            <input id="input" ref={(input) => { this.textInput = input; }} type="text" placeholder="Enter Text Here" />
            <input type="submit" value="Submit" />
        </form>

        {/* generate a qr code*/}
        <QRCode className="qrCode" value={this.state.header} />

      </div>  
    );
  }
}

export default App;
