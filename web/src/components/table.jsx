import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import NightsStayIcon from "@material-ui/icons/NightsStay";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";
import SportsBasketballIcon from "@material-ui/icons/SportsBasketball";
import ComputerIcon from '@material-ui/icons/Computer';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';





import axios from "axios";

const useStyles = makeStyles({
  root: { width: "80%" },
  table: {
    minWidth: 650,
    height: "50px",
  },
});

export function BasicTable() {
  const classes = useStyles();

  const [table, setTable] = useState([]);
  const [tableLoad, setTableLoad] = useState(false);
  const [page, setPage] = useState(0);
  const [curURL, setCurURL] = useState("http://localhost:5000/" + page);
  const [total, setTotal] = useState();

  const url = curURL;
  useEffect(async () => {
    const result = await axios({
      url: url,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      responseType: "json",
    });
    getTotal();
    setTable(result.data);
    console.log(table);
    setTableLoad(true);
  }, [tableLoad]);

  const getData = async (_url) => {
    console.log(_url);
    const result = await axios({
      url: _url,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      responseType: "json",
    });
    setTable();
    setTable(result.data);
    console.log(table);
    setTableLoad(true);
  };

  const decideColourMoon = (value) => {
    if (value >= 15000) {
      return { color: "green" };
    } else if (value >= 10000) {
      return { color: "orange" };
    } else {
      return { color: "red" };
    }
  };

  const decideColourWork = (value) => {
    if (value >= 12000) {
        return { color: "red" };
    } else if (value >= 11000) {
      return { color: "orange" };
    } else {
      return { color: "green" };
    }
  };

  const decideColourSocial = (value) => {
    if (value >= 1200) {
      return { color: "green" };
    } else if (value >= 600) {
      return { color: "orange" };
    } else {
      return { color: "red" };
    }
  };

  const decideColourSport = (value) => {
    if (value >= 3500) {
      return { color: "green" };
    } else if (value >= 2000) {
      return { color: "orange" };
    } else {
      return { color: "red" };
    }
  };

  const columns = (_table) => {
    const data = _table;
    return data.map((row) => (
      <TableRow key={row.id}>
        <TableCell component="th" scope="row">
          {row.employee_id}
        </TableCell>
        <TableCell align="right">
          <SportsBasketballIcon
            style={decideColourSport(row.exercise_time)}
          ></SportsBasketballIcon>
        </TableCell>
        <TableCell align="centre">{row.exercise_time}</TableCell>
        <TableCell align="right">
          <NightsStayIcon
            style={decideColourMoon(row.sleep_time)}
          ></NightsStayIcon>
        </TableCell>
        <TableCell align="centre">{row.sleep_time}</TableCell>
        <TableCell align="right">
          <EmojiPeopleIcon
            style={decideColourSocial(row.social_interaction_time)}
          ></EmojiPeopleIcon>
        </TableCell>
        <TableCell align="centre">{row.social_interaction_time}</TableCell>
        <TableCell align="right">
          <ComputerIcon
            style={decideColourWork(row.work_time)}
          ></ComputerIcon>
        </TableCell>
        <TableCell align="centre">{row.work_time}</TableCell>
      </TableRow>
    ));
  };

  const loading = () => {
    return <div>Loading</div>;
  };

  const loadColumns = (_table) => {
    console.log(_table);
    if (_table) {
      return columns(_table);
    } else {
      return loading();
    }
  };

  const getAscExercise = () => {
    setCurURL("http://localhost:5000/asc_exercise_pag/");
    setPage(0);
    getData(curURL + page);
  };

  const ascExercise = () => {
    return (
      <a onClick={getAscExercise}>
        <ArrowDropDownIcon></ArrowDropDownIcon>
      </a>
    );
  };

  const getDescExercise = () => {
    setCurURL("http://localhost:5000/desc_exercise_pag/");
    setPage(0);
    getData(curURL + page);
  };

  const descExercise = () => {
    return (
      <a onClick={getDescExercise}>
        <ArrowDropUpIcon></ArrowDropUpIcon>
      </a>
    );
  };

  const getAscSleep = () => {
    setCurURL("http://localhost:5000/asc_sleep_pag/");
    setPage(0);
    getData(curURL + page);
  };

  const ascSleep = () => {
    return (
      <a onClick={getAscSleep}>
        <ArrowDropDownIcon></ArrowDropDownIcon>
      </a>
    );
  };

  const getDescSleep = () => {
    setCurURL("http://localhost:5000/desc_sleep_pag/");
    setPage(0);
    getData(curURL + page);
  };

  const descSleep = () => {
    return (
      <a onClick={getDescSleep}>
        <ArrowDropUpIcon></ArrowDropUpIcon>
      </a>
    );
  };

  const getAscSocial = () => {
    setCurURL("http://localhost:5000/asc_social_pag/");
    setPage(0);
    getData(curURL + page);
  };

  const ascSocial = () => {
    return (
      <a onClick={getAscSocial}>
        <ArrowDropDownIcon></ArrowDropDownIcon>
      </a>
    );
  };

  const getDescSocial = () => {
    setCurURL("http://localhost:5000/desc_social_pag/");
    setPage(0);
    getData(curURL + page);
  };

  const descSocial = () => {
    return (
      <a onClick={getDescSocial}>
        <ArrowDropUpIcon></ArrowDropUpIcon>
      </a>
    );
  };

  const getAscWork = () => {
    setCurURL("http://localhost:5000/asc_work_pag/");
    setPage(0);
    getData(curURL + page);
  };

  const ascWork = () => {
    return (
      <a onClick={getAscWork}>
        <ArrowDropDownIcon></ArrowDropDownIcon>
      </a>
    );
  };

  const getDescWork = () => {
    setCurURL("http://localhost:5000/desc_work_pag/");
    setPage(0);
    getData(curURL + page);
  };

  const descWork = () => {
    return (
      <a onClick={getDescWork}>
        <ArrowDropUpIcon></ArrowDropUpIcon>
      </a>
    );
  };

  const getTotal = async () => {
    const result = await axios({
      url: "http://localhost:5000/total_records",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      responseType: "json",
    });
    setTotal(Math.ceil(result.data / 12) - 1);
    console.log("total:", total);
  };

  const paginate_next = () => {
    console.log("next", page);
    var nextPage = Number(page) + 1;
    console.log("nextPage:", nextPage);
    console.log(total);
    if (page < total) {
      setPage(nextPage);
      getData(curURL + nextPage);
    }
  };

  const paginate_prev = () => {
    console.log("prev", page);
    var prevPage = Number(page) - 1;
    console.log("prevPage:", prevPage);
    if (page > 0) {
      setPage(prevPage);
      getData(curURL + prevPage);
    }
  };

  return (
    <Table className={classes.root} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Employee ID</TableCell>
          <TableCell align="right">
            {descExercise()}
            {ascExercise()}
          </TableCell>
          <TableCell align="centre">Exercise Time</TableCell>
          <TableCell align="right">
            {descSleep()}
            {ascSleep()}
          </TableCell>
          <TableCell align="centre">Sleep</TableCell>
          <TableCell align="right">
            {descSocial()}
            {ascSocial()}
          </TableCell>
          <TableCell align="centre">Social</TableCell>
          <TableCell align="right">
            {descWork()}
            {ascWork()}
            
          </TableCell>
          <TableCell align="centre">Work Time</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>{loadColumns(table)}</TableBody>

      <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
        <Button onClick={paginate_prev}>PREVIOUS</Button>
        <Button>Page: {page + 1}</Button>
        <Button onClick={paginate_next}>NEXT</Button>
        </ButtonGroup>
    </Table>
  );
}
