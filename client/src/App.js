import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from 'axios';
import { saveAs } from 'file-saver';

import SearchBox from './SearchBox';
import Navbar from './Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Tooltip, Button } from "reactstrap"


import "./App.css";
import MaterialTable from 'material-table';

import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TablePagination from '@material-ui/core/TablePagination';
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import GetAppIcon from '@material-ui/icons/GetApp';

import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';



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
    candidates:[],
    loading: true,

    //SearchBox
    searchField: '',

    // Test State var
    testeeRecords:[],
    fileName:''
    
  }

  async componentDidMount() {
    const url = "https://epz-report-generation.herokuapp.com/request";
    const response = await fetch(url);
    const data =  await response.json();
    this.setState({candidates: data, loading: false});
  }


useStyles = makeStyles({
    table: {
      minWidth: 650
    }
  });


 classes = makeStyles({
  table: {
    minWidth: 650
  }
});

  handleChange = ({ target: { value, name }}) => this.setState({ [name]: value })

  async clickMe  (row){
    var testeeRecords = [];
    var allStens  = [];

    this.state.candidates.forEach(candidate => {
      if(candidate.candidate_id === row.candidate_id){
        testeeRecords.push(candidate);
       
      }
    });

    // this.setState(row, function () {
    //   this.createAndDownloadPdf();
    // });
    
    this.setState({testeeRecords:testeeRecords}, function(){
      this.createAndDownloadPdf();
    })

  }

  createAndDownloadPdf = () => {
    axios.post('/create-pdf', this.state.testeeRecords)
      .then(() => axios.get('fetch-pdf', { responseType: 'blob' }))
      .then((res) => {
        const pdfBlob = new Blob([res.data], { type: 'application/pdf' });

        
        saveAs(pdfBlob, "fileName.pdf" );
      })
  }

  render() {

    if(this.state.loading) {
      return ( 
        <div style={{
          position: 'absolute', left: '50%', top: '50%',
          transform: 'translate(-50%, -50%)'
      }}>
           <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
            <CircularProgress color="secondary" />
            <CircularProgress color="success" />
            <CircularProgress color="inherit" />
          </Stack>
        </div>
      
     );
    }
    if(!this.state.candidates.length) {
      return <div>Didn't get a candidate</div>
    }
    const {candidates, searchField} = this.state
      const filteredCandidates = candidates.filter(candidate =>(
        candidate.testeeName.toLowerCase().includes(searchField.toLocaleLowerCase())
      ))
      this.candidates = {filteredCandidates};
    return (
      <Router>
          <div className="App">
        <Navbar fixed="top" sticky="top"/>
                  <Paper>
                  
                   <TableContainer>
                     <Table >
                       <TableHead>
                         <TableRow>
                           <TableCell align="center">Candidate ID</TableCell>
                           <TableCell align="center">Testee Name</TableCell>
                           <TableCell align="center">Test Name</TableCell>
                           <TableCell align="center">Attempts</TableCell>
                           <TableCell align="center">Score</TableCell>
                           <TableCell align="center">Percentile   </TableCell>
                           <TableCell align="center">Sten</TableCell>
                           <TableCell align="center">Date Taken</TableCell>
                         </TableRow>
                       </TableHead>
                       <TableBody >
                         
                         {this.state.candidates.map((row) => (
                           <TableRow key={row.candidate_id}>
                             <TableCell align="center" component="th" scope="row">{row.candidate_id} </TableCell>
                             <TableCell align="center">{row.testeeName}</TableCell>
                             <TableCell align="center">{row.testName}</TableCell>
                             <TableCell align="center">{row.attempts}</TableCell>
                             <TableCell align="center">{row.score}</TableCell>
                             <TableCell align="center">{row.percentile}</TableCell>
                             <TableCell align="center">{row.sten}</TableCell>
                             <TableCell align="center">{row.date_taken}</TableCell>
                             <GetAppIcon onClick={this.clickMe.bind(this,row)}/>
                             {/* <button onClick={this.clickMe.bind(this,row)}>Download PDF</button> */}
                           </TableRow>
                         ))}
                       </TableBody>
                     </Table>
                   </TableContainer>
                   
                 </Paper>     
      </div>

      </Router>
      
    );
  }
}

export default App;