import React from "react";
import Card from "./cards";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  gridContainer: {
    paddingLeft: "40px",
    paddingRight: "40px"
  }
});

export default function Projects() {
  const classes = useStyles();
  return (
    <div>
    <h1 style={{color:"white", display: 'flex', alignItems: 'center', justifyContent: 'center' }}>My Projects</h1>
    <Grid
      container
      spacing={4}
      className={classes.gridContainer}
      justify="center"
    >
      <Grid item xs={12} sm={6} md={4}>
        <Card 
        title = "Acute Kidney Injury Prediction"
         tech= "Python, XGBoost, Shap"
         kind = "High dimension classication using structured and unstructured data"
         description = "The goal was to develop a model with a similar approach as those presented
          in state of the art papers for this disease and to enhance it using nlp. 
          The dataset used was based on the MIMIC database and composed of 20742 adult patients with more than 100000 features. 
          Our best model is based on XGBoost and has an auroc score of 86.5% 24 hours before the event.
          A second objective was model explainability and real-time analysis of the preditions. "
         link = "https://github.com/AymericBasset/Acute_Kidney_Injury_Prediction_In_ICU" />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
      <Card 
        title = "title"
         tech= "tech"
         kind = "kind"
         description = "Test this is a super long description because I have huge project to put into this and I want to be sure to say enough when describing it.Test this is a super long description because I have huge project to put into this and I want to be sure to say enough when describing it.Test this is a super long description because I have huge project to put into this and I want to be sure to say enough when describing it.Test this is a super long description because I have huge project to put into this and I want to be sure to say enough when describing it.Test this is a super long description because I have huge project to put into this and I want to be sure to say enough when describing it."
         link = "https://pytorch.org/" />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
      <Card 
        title = "title"
         tech= "tech"
         kind = "kind"
         description = "description"
         link = "https://pytorch.org/" />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
      <Card 
        title = "title"
         tech= "tech"
         kind = "kind"
         description = "description"
         link = "https://pytorch.org/" />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
      <Card 
        title = "title"
         tech= "tech"
         kind = "kind"
         description = "Test this is a super long description because I have huge project to put into this and I want to be sure to say enough when describing it."
         link = "https://pytorch.org/" />
      </Grid>
    </Grid>
    </div>
  );
}
