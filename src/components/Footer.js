import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid } from '@material-ui/core';
import Link from '@material-ui/core/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {'Copyright © '}
      <Link color="inherit" href='#'>
        John Seafood
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
  },
  footerContent: {
      paddingLeft: '70px',
      paddingRight: '70px'
  }
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <footer className={classes.footer}>
        <Grid container className={classes.footerContent} justify='space-between' direction="row" spacing={3} md={12} xs={12}>
            <Grid item>
                <Typography variant="h6">Address:</Typography>
                <Typography variant="body1">2750 Scenic Hwy, Baton Rouge, LA 70805</Typography>
            </Grid>
            <Grid item>
                <Typography variant="h6">Phone Number:</Typography>
                <Typography variant="body1">(225) 357-5958</Typography>
            </Grid>
            <Grid item>
                <Typography variant="h6">Hours:</Typography>
                <Typography variant="body1">M-T: 10:00am - 9:30pm</Typography>
                <Typography variant="body1">F: 10:00am - 10:30pm</Typography>
                <Typography variant="body1">Sat: 11:00am - 11:00pm</Typography>
                <Typography variant="body1">Sun: 11:00am - 7:00pm</Typography>
            </Grid>
        </Grid>
        <Container maxWidth="xl">
          <Copyright />
        </Container>
      </footer>
    </div>
  );
}