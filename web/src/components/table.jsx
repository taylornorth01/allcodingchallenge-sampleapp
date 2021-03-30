import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';

import axios from 'axios';

const useStyles = makeStyles({
  root: { width: '80%'},
  table: {
    minWidth: 650,
    height: '50px'
  },
});

export function BasicTable() {
  const classes = useStyles();

  const [table, setTable] = useState([])
  const [tableLoad, setTableLoad] = useState(false)

  const url = 'http://localhost:5000/'
    useEffect(async () => {
      const result =  await axios({
        url: url,
        method: 'GET',
        headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
        },
        responseType: 'json',
        })
    
        
      setTable(result.data)
      console.log(table)
      setTableLoad(true);
    }, [tableLoad]);

  const getData = async (_url) => {
    const result =  await axios({
      url: _url,
      method: 'GET',
      headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
      },
      responseType: 'json',
      })
      setTable()
    setTable(result.data)
    console.log(table)
    setTableLoad(true);
    }




  const columns = (_table) => {
    const data = _table
    return (
      data.map((row) => (
        <TableRow key={row.employee_id}>
          <TableCell component="th" scope="row">
            {row.employee_id}
          </TableCell>
          <TableCell align="right">{row.exercise_time}</TableCell>
          <TableCell align="right">{row.age}</TableCell>
          <TableCell align="right">{row.gender}</TableCell>
          <TableCell align="right">{row.occupation}</TableCell>
        </TableRow>)))
  }

  const loading = () => {
    return (
      <div>Loading</div>
    )
  }

   const loadColumns = (_table) => {
     console.log(_table);
    if (_table) {
      return columns(_table)
    }
    else { return loading() }
  }

  const getAsc = () => {
    getData('http://localhost:5000/asc_exercise');
  }

  const asc = () => {
      return (
        <a onClick={getAsc}><ArrowDropDownIcon></ArrowDropDownIcon></a>
      );
  }

  const getDesc = () => {
    getData('http://localhost:5000/desc_exercise');
  }

  const desc = () => {
    return (
      <a onClick={getDesc}><ArrowDropUpIcon></ArrowDropUpIcon></a>
    );
}


  return (

    <Table className={classes.root} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Employee ID</TableCell>
          <TableCell align="right">{asc()}{desc()}Exercise time</TableCell>
          <TableCell align="right">Sleep</TableCell>
          <TableCell align="right">Social</TableCell>
          <TableCell align="right">work_time</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {loadColumns(table)}
      </TableBody>
    </Table>
  );
}