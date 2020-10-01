import React from 'react';
import {makeStyles} from '@material-ui/core/styles'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    minWidth: '100vw',

  }
});

const AuthPage = () => {
  const classes = useStyles();


  return (
    <div className={classes.root}>
      <Card>
        <CardContent>asdsd</CardContent>
      </Card>
    </div>
  )
}

export default AuthPage;