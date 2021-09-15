import React, { useState, useEffect }  from 'react';
import axios from 'axios';
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
import { saveAs } from 'file-saver';


const AllItems = () => {
   
    const [candidate, setCandidate] = useState([]);
    
    

    const getItemData = async () => {
        try {
            const data = await axios.get("http://localhost:5000/items");
            console.log(data.data);
            setCandidate(data.data);
        } catch (error) {
            console.log(error)
        }
    }
    

    const useStyles = makeStyles({
        table: {
          minWidth: 650
        }
      });

    useEffect(() => {
        getItemData();
    }, []);

  const classes = useStyles();

  

    return (
        <div >
            <h1>Candidate list</h1>
                  <Paper>
                   <TableContainer>
                     <Table className={classes.table} aria-label="">
                       <TableHead>
                         <TableRow>
                           <TableCell align="center">Candidate ID</TableCell>
                           <TableCell align="center">Testee Name</TableCell>
                           <TableCell align="center">Test Name</TableCell>
                           <TableCell align="center">Attempts</TableCell>
                           <TableCell align="center">Score</TableCell>
                           <TableCell align="center">Percentile&nbsp;(%)</TableCell>
                           <TableCell align="center">Sten</TableCell>
                           <TableCell align="center">Date Taken</TableCell>

                         </TableRow>
                       </TableHead>
                       <TableBody>
                         {candidate.map((row) => (
                           <TableRow key={row.name}>
                             <TableCell align="center" component="th" scope="row">{row.candidate_id} </TableCell>
                             <TableCell align="center">{row.testeeName}</TableCell>
                             <TableCell align="center">{row.testName}</TableCell>
                             <TableCell align="center">{row.attempts}</TableCell>
                             <TableCell align="center">{row.score}</TableCell>
                             <TableCell align="center">{row.percentile}</TableCell>
                             <TableCell align="center">{row.sten}</TableCell>
                             <TableCell align="center">{row.date_taken}</TableCell>
                             <button >Download PDF</button>
                           </TableRow>
                         ))}
                       </TableBody>
                     </Table>
                   </TableContainer>
                   
                 </Paper>
                 <MaterialTable
                    title="Psychometric Tests Candidates"
                    columns={[
                      { title: 'Candidate Id', field: 'candidate_id', type: 'numeric' },
                      { title: 'Testee Name', field: 'testeeName' },
                      { title: 'Test Name', field: 'testName' },
                      { title: 'Attempts', field: 'attempts', type: 'numeric' },
                      { title: 'Score', field: 'score', type: 'numeric' },
                      { title: 'Sten', field: 'sten', type: 'numeric' },
                      { title: 'Percentile', field: 'percentile', type: 'numeric' },
                      { title: 'Date Taken', field: 'date_taken', type: 'date' },

                    ]}
                    data={getItemData}
                    actions={[
                      {
                        icon: 'save',
                        tooltip: 'Save User',
                        onClick: (event, rowData) => alert("You saved " + rowData.name)
                      }
                    ]}
                    components={{
                      Action: props => (
                        // eslint-disable-next-line react/jsx-no-undef
                        <Button
                          onClick={(event) => props.action.onClick(event, props.data)}
                          color="primary"
                          variant="contained"
                          style={{textTransform: 'none'}}
                          size="small"
                        >
                          My Button
                        </Button>
                      ),
                    }}
      />
        </div>
    )
}

export default AllItems;
