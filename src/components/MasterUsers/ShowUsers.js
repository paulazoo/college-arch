import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TablePagination,
  TableRow,
  Box,
  Typography,
  IconButton,
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';

// Redux
import { connect } from 'react-redux';
import { getUsers } from '../../store/actions/api';

// Theme
import { makeStyles } from '@material-ui/core/styles';

// Custom Components
import ProfilePic from '../ProfilePic/ProfilePic';
import MasterProfile from '../Profile/MasterProfile';
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
  { id: 'id', label: 'ID' },
  {
    id: 'edit',
    label: 'Edit',
  },
];

const rowsPerPage = 10;

function ShowUsers({ people, ...props }) {
  const classes = useStyles();

  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState(null);
  const [page, setPage] = useState(0);
  const [masterProfileOpen, setMasterProfileOpen] = useState(false);
  const [masterProfileUser, setMasterProfileUser] = useState({});

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

  const handleMasterProfileOpen = (person) => {
    setMasterProfileOpen(true);
    setMasterProfileUser(person);
    console.log(person);
  };

  return (
    <>
      {masterProfileUser && (
        <MasterProfile
          user={masterProfileUser}
          masterProfileOpen={masterProfileOpen}
          setMasterProfileOpen={setMasterProfileOpen}
        />
      )}
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
                .map((person) => (
                  <TableRow hover tabIndex={-1} key={people.id}>
                    <TableCell
                      component='th'
                      scope='row'
                      style={{ padding: 0, paddingLeft: 20 }}
                    >
                      <ProfilePic user={person} buttonHeight={64} />
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
                    <TableCell
                      component='th'
                      scope='row'
                      style={{ padding: 0 }}
                    >
                      {person.id}
                    </TableCell>
                    <TableCell
                      component='th'
                      scope='row'
                      style={{ padding: 0 }}
                    >
                      <Box display='flex' justifyContent='flex-end'>
                        <IconButton
                          onClick={() => {
                            handleMasterProfileOpen(person);
                          }}
                          aria-label='Delete'
                        >
                          <EditIcon />
                        </IconButton>
                      </Box>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        ) : (
          <Box m={2}>
            <Typography variant='h5'>No users yet.</Typography>
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

const mapStateToProps = (state) => ({
  account: state.account.account,
});

function mapDispatchToProps(dispatch) {
  return {
    getUsers: (user, body, callback) =>
      dispatch(getUsers(user, body, callback)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowUsers);
