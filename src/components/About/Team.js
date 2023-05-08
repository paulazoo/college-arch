import React, { useEffect } from 'react';
import {
  Divider,
  Card,
  Typography,
  Box,
  Grid,
  Paper,
  Button,
} from '@material-ui/core';

// Redux
import { connect } from 'react-redux';

// Theme
import { useTheme, makeStyles } from '@material-ui/core/styles';

// Custom Components
import WordDivider from '../Shared/WordDivider';
import {
  executiveTeam,
  outreachTeam,
  recruitmentDirectors,
  programTeam,
  graphicsMarketingTeam,
  curriculumTeam,
  technicalTeam,
  alumniMembers,
} from './teamMembers.js';

const useStyles = makeStyles((theme) => ({
  googleButton: {
    paddingLeft: '22px',
  },
  button: {
    minWidth: 200,
  },
  h5: {
    marginTop: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(25),
    },
  },
  title: {
    paddingLeft: '8px',
  },
  more: {
    marginTop: theme.spacing(2),
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  imgResponsive: {
    height: 'auto',
    width: 'auto',
    maxHeight: '40px',
    maxWidth: '250px',
  },
  img: {
    width: '30vh',
    borderRadius: '50%',
  },
  headText: {
    fontWeight: 'bold',
    color: theme.palette.common.black,
    fontSize: 32,
  },
  headTextContainer: {
    textAlign: 'center',
  },
  memberItemContainer: {
    padding: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      padding: `${theme.spacing(1)}px !important`,
    },
  },
  memberItem: {
    backgroundColor: theme.palette.common.white,
    padding: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(1),
    },
  },
  totalGrid: {
    padding: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(1),
    },
  },
  memberImgButton: {
    height: 128,
    width: 128,
    placeSelf: 'center',
    [theme.breakpoints.down('sm')]: {
      height: 64,
      width: 64,
    },
  },
  memberImg: {
    height: 128,
    width: 128,
    borderRadius: '50%',
    padding: 0,
    borderWidth: 5,
    [theme.breakpoints.down('sm')]: {
      height: 64,
      width: 64,
    },
  },
  memberName: {
    fontWeight: 'bold',
    fontSize: 20,
    [theme.breakpoints.down('sm')]: {
      fontSize: 10,
    },
  },
  memberTeamName: {
    fontWeight: 'bold',
    fontSize: 18,
    color: theme.palette.primary.main,
    [theme.breakpoints.down('sm')]: {
      fontSize: 9,
    },
  },
  memberPosition: {
    fontSize: 16,
    color: theme.palette.primary.main,
    [theme.breakpoints.down('sm')]: {
      fontSize: 8,
    },
  },
  memberText: {
    color: theme.palette.common.gray,
    fontSize: 14,
    [theme.breakpoints.down('sm')]: {
      fontSize: 7,
    },
  },
  memberTextContainer: {
    textAlign: 'left',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    },
  },
  wordDivider: {
    fontSize: 44,
    fontWeight: 'bold',
    color: theme.palette.common.gray,
    [theme.breakpoints.down('sm')]: {
      fontSize: 16,
    },
  },
  teamName: {
    fontWeight: 'bold',
    fontSize: 32,
    color: theme.palette.common.white,
    padding: 0,
    [theme.breakpoints.down('sm')]: {
      fontSize: 16,
    },
  },
  teamNameContainer: {
    padding: '0 !important',
  },
  card: {
    margin: 0,
    marginRight: theme.spacing(6),
    marginLeft: theme.spacing(6),
    marginBottom: theme.spacing(6),
    [theme.breakpoints.down('sm')]: {
      marginRight: theme.spacing(1),
      marginLeft: theme.spacing(1),
      marginBottom: theme.spacing(1),
      padding: theme.spacing(1),
    },
  },
}));

function Team(props) {
  const classes = useStyles();
  const theme = useTheme();

  const renderTeam = (team, teamName, teamColor) => {
    return (
      <Card
        className={classes.card}
        style={{
          backgroundColor: teamColor,
        }}
      >
        <Grid container spacing={0}>
          <Grid item xs={12} sm={12} height='100%' width='80%'>
            <Grid
              container
              direction='row'
              justify='center'
              alignItems='center'
              spacing={4}
              className={classes.totalGrid}
            >
              <Grid item xs={12} className={classes.teamNameContainer}>
                <Grid
                  container
                  direction='row'
                  justify='center'
                  className={classes.teamNameContainer}
                >
                  <Grid item className={classes.teamNameContainer}>
                    <Typography className={classes.teamName}>
                      {teamName}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              {team.map((member) => (
                <Grid
                  item
                  xs={12}
                  md={6}
                  className={classes.memberItemContainer}
                >
                  <Grid
                    container
                    justify='center'
                    alignItems='center'
                    direction='row'
                    className={classes.memberItem}
                  >
                    <Grid item xs={0} md={5}>
                      <Button
                        color='primary'
                        edge='end'
                        size='small'
                        className={classes.memberImgButton}
                      >
                        <img
                          className={classes.memberImg}
                          src={require(`../../assets/TeamMembers/${member.name}.jpg`)}
                          alt={member.name}
                        />
                      </Button>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      md={7}
                      className={classes.memberTextContainer}
                    >
                      <Typography className={classes.memberName}>
                        {member.name}
                      </Typography>
                      {/* <Typography className={classes.memberTeamName}>
                        {teamName}
                      </Typography> */}
                      <Typography className={classes.memberPosition}>
                        {member.position}
                      </Typography>
                      <Typography className={classes.memberText}>
                        {member.text}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Card>
    );
  };

  return (
    <>
      <WordDivider spacing={125}>
        <Typography variant='h3' className={classes.wordDivider}>
          Meet The Team
        </Typography>
      </WordDivider>
      {renderTeam(
        executiveTeam,
        'Executive Team',
        theme.palette.common.teamOne
      )}
      {renderTeam(programTeam, 'Program Team', theme.palette.common.teamTwo)}
      {/* {renderTeam(
        curriculumTeam,
        'Curriculum Team',
        theme.palette.common.teamOne
      // )} */}
      {/* {renderTeam(outreachTeam, 'Outreach Team', theme.palette.common.teamTwo)} */}
      {renderTeam(
        graphicsMarketingTeam,
        'Graphics and Marketing Team',
        theme.palette.common.teamOne
      )}
      {renderTeam(
        technicalTeam,
        'Technical Team',
        theme.palette.common.teamTwo
      )}
      {renderTeam(
        recruitmentDirectors,
        'Recruitment Directors',
        theme.palette.common.teamOne
      )}
      {renderTeam(alumniMembers, 'Past members and contributors', theme.palette.common.teamTwo)}
    </>
  );
}

const mapStateToProps = (state) => ({});

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Team);
