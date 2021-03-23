import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


const useStyles = makeStyles({
  root:{width: '80%'} , 
  table: {
    minWidth: 650,
    height: '50px'
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Ryan', 159, 6.0, 24, 4.0),
  createData('John', 237, 9.0, 37, 4.3),
  createData('Suresh', 262, 16.0, 24, 6.0),
  createData('Oscar', 305, 3.7, 67, 4.3),
  createData('Ginger', 356, 16.0, 49, 3.9),
];

export function BasicTable() {
  const classes = useStyles();

  return (
      <Table className={classes.root} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Employee Name</TableCell>
            <TableCell align="right">WorkTime</TableCell>
            <TableCell align="right">Sleep</TableCell>
            <TableCell align="right">Social</TableCell>
            <TableCell align="right">Exercise</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
  );
}