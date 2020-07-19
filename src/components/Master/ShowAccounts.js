import React, { useState, useEffect } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TablePagination,
  TableRow,
  Box,
  Button,
  Typography,
  List,
  ListItem,
  Popover,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import CheckIcon from '@material-ui/icons/Check';

// Redux
import { connect } from 'react-redux';
import { getAccounts } from '../../store/actions/api';

// Theme
import { makeStyles } from '@material-ui/core/styles';
import { theme } from '../../theme';

// Custom Components
import ProfilePic from '../ProfilePic/ProfilePic';
import EnhancedTableHead from '../Shared/EnhancedTableHead';
import stableSort from '../Shared/stableSort';
import getSorting from '../Shared/getSorting';

const useStyles = makeStyles((theme) => ({
  alignRight: {
    display: 'flex',
    flexDirection: 'row-reverse',
    alignItems: 'center',
    paddingLeft: 2,
  },
  dBlock: {
    display: 'block',
  },
  dNone: {
    display: 'none',
  },
  permissionButton: {
    textTransform: 'none',
  },
  emptyCheck: {
    width: 24,
  },
  permissionCheck: {
    color: theme.palette.secondary.main,
  },
  headText: {
    color: theme.palette.primary.dark,
    fontSize: 25,
    fontWeight: 'bold',
  },
}));

const rows = [
  {
    id: 'image_url',
    label: 'Profile Pic',
  },
  {
    id: 'name',
    label: 'Name',
  },
  { id: 'email', label: 'Email' },
  { id: 'phone', label: 'Phone Number' },
  // { id: 'user_type', label: 'Role' },
  // {
  //   id: "actions",
  //   label: "",
  // },
];

const rowsPerPage = 10;

function ShowAccounts({ people, ...props }) {
  const classes = useStyles();

  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState(null);
  const [page, setPage] = useState(0);

  const handleRequestSort = (__, property) => {
    const _orderBy = property;
    let _order = 'desc';
    if (orderBy === property && order === 'desc') {
      _order = 'asc';
    }
    setOrder(_order);
    setOrderBy(_orderBy);
  };

  const handleChangePage = (_, page) => {
    setPage(page);
  };

  return (
    <>
      <Box>
        {people && people.length > 0 ? (
          <Table aria-labelledby='tableTitle'>
            <EnhancedTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={people.length}
              rows={rows}
            />
            <TableBody key='table-body'>
              {stableSort(people, getSorting(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((person, index) => (
                  <TableRow hover tabIndex={-1} key={people.name}>
                    <TableCell
                      component='th'
                      scope='row'
                      style={{ padding: 0, paddingLeft: 20 }}
                    >
                      <ProfilePic account={person} buttonHeight={64} />
                    </TableCell>
                    <TableCell
                      component='th'
                      scope='row'
                      style={{ padding: 0 }}
                    >
                      {person.name}
                    </TableCell>
                    <TableCell
                      component='th'
                      scope='row'
                      style={{ padding: 0 }}
                    >
                      {person.email}
                    </TableCell>
                    <TableCell
                      component='th'
                      scope='row'
                      style={{ padding: 0 }}
                    >
                      {person.phone}
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        ) : (
          <Box m={2}>
            <Typography variant='h5'>No accounts yet.</Typography>
          </Box>
        )}
        <div className={classes.alignRight}>
          <TablePagination
            component='div'
            count={people.length}
            rowsPerPage={rowsPerPage}
            page={page}
            backIconButtonProps={{
              'aria-label': 'Previous Page',
            }}
            nextIconButtonProps={{
              'aria-label': 'Next Page',
            }}
            onChangePage={handleChangePage}
            classes={{
              select: classes.dNone,
              selectIcon: classes.dNone,
              actions: people.length > 0 ? classes.dBlock : classes.dNone,
              caption: people.length > 0 ? classes.dBlock : classes.dNone,
            }}
            labelRowsPerPage=''
          />
        </div>
      </Box>
    </>
  );
}

const mapStateToProps = (state) => ({});

function mapDispatchToProps(dispatch) {
  return {
    getAccounts: (user, body, callback) =>
      dispatch(getAccounts(user, body, callback)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowAccounts);
