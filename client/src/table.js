import React, { Component } from 'react';
import MaterialTable from 'material-table';
import React, { useEffect, useState }  from 'react';
import axios from 'axios';
import "./App.css";

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



export default function Editable() {
    const { useState } = React;
  

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


    const [columns, setColumns] = useState([
      { title: 'Candidate Id', field: 'name' },
      { title: 'Testee Name', field: 'surname', initialEditValue: 'initial edit value' },
      { title: 'Test Name', field: 'birthYear', type: 'numeric' },
      
    ]);
  
    const [data, setData] = useState([
      { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
      { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
    ]);
  
    return (
      <MaterialTable
        title="Editable Preview"
        columns={columns}
        data={data}
        editable={{
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const dataUpdate = [...data];
                const index = oldData.tableData.id;
                dataUpdate[index] = newData;
                setData([...dataUpdate]);
  
                resolve();
              }, 1000)
            }),
          
        }}
      />
    )
  }
  