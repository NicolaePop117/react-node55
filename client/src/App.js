import React, { Component } from 'react'

export class App extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      apiResponse: "" 
    };
  }

  callAPI() {
      fetch("http://localhost:9000/testAPI")
          .then(res => res.text())
          .then(res => this.setState({ apiResponse: res }));
  }

  componentDidMount() {
      this.callAPI();
  }


  render() {
    return (
      <div>
        <h1>lsdfjdlsfjdlskfj</h1>
        <p>{this.state.apiResponse}</p>
      </div>
    )
  }
}

export default App