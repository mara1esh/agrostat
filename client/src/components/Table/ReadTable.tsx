import React from 'react'
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import {Shareholder} from '../../types/shareholder'
import {Share} from '../../types/share'
import { getShareholders } from '../../api/shareholder'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      // marginTop: theme.spacing(3),
      overflowX: 'auto'
    },
    table: {
      minWidth: 650
    },
  }),
);

function ReadTable(props: any) {
    const classes = useStyles();
    return (
    <Paper className={classes.root}>
      <Table className={classes.table} size="small">
        <TableHead>
          <TableRow>
            <TableCell>Iм'я</TableCell>
            <TableCell align="right">Номер паю</TableCell>
            <TableCell align="right">Площа</TableCell>
            <TableCell align="right">Договiр до</TableCell>
            {/* <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {props.rows.map((row: Shareholder, index: number) => (
            
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
               {index+1}. {row.name}
              </TableCell>
              <TableCell align="right">{row.shares.map((i: Share, index: number) => (
                <p key={i._id}>{i.code}</p>
              )
              )}</TableCell>
              <TableCell align="right">{row.shares.map((i: Share, index: number) => (
                <p key={i._id}>{i.square} га</p>
              )
              )}</TableCell>
              <TableCell align="right">{row.shares.map((i: Share, index: number) => (
                <p key={i._id}>
                {i.contractUntil ? (new Date(i.contractUntil).toLocaleDateString() + "р.") : ""}
                </p>
              )
              )}</TableCell>
              {/* <TableCell align="right">{row.protein}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <button
      onClick={getShareholders}
      >Load</button>
    </Paper>
    )
}

export default ReadTable;