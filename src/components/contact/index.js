import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function ContainedButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
          <h1 style={{color:"white", display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Contact Me !</h1>
            <Button variant="contained" color="secondary" href="https://www.linkedin.com/in/aymeric-basset/">Linkedin</Button>
            <Button variant="contained" color ="secondary" href="./Aymeric_Basset_resume.pdf" download="aymeric_basset_resume">Resume</Button>
            <Button variant="contained" color ="secondary" href="https://github.com/AymericBasset">Github</Button>
    </div>
  );
}