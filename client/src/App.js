import React, { Component } from 'react';
import axios from 'axios';
import { saveAs } from 'file-saver';
import AllItems from './AllItems';

import './App.css';

class App extends Component {
  state = {
    name: '',
    testeeName: '',
    testName: '',
    attempts: 0,
    score: 0,
    sten: 0,
    percentile: 0,
    date_taken: '',
  }

  handleChange = ({ target: { value, name }}) => this.setState({ [name]: value })

  createAndDownloadPdf = () => {
    axios.post('/create-pdf', this.state)
      .then(() => axios.get('fetch-pdf', { responseType: 'blob' }))
      .then((res) => {
        const pdfBlob = new Blob([res.data], { type: 'application/pdf' });

        saveAs(pdfBlob, 'newPdf.pdf');
      })
  }

  render() {
    return (
      <div className="App">
        
        <input type="text" placeholder="Testee Name" name="testeeName" onChange={this.handleChange} />
        <input type="text" placeholder="Test Name" name="testName" onChange={this.handleChange}/>
        <input type="number" placeholder="Attempts" name="attempts" onChange={this.handleChange} />
        <input type="number" placeholder="Score" name="score" onChange={this.handleChange} />
        <input type="number" placeholder="Sten" name="sten" onChange={this.handleChange} />
        <input type="number" placeholder="Percentile" name="percentile" onChange={this.handleChange} />
        <button onClick={this.createAndDownloadPdf}>Download PDF</button>

        <AllItems/>
      </div>
    );
  }
}

export default App;
