import React, { Component } from 'react';
import 'typeface-roboto';
import './App.css';
import './animate.css';
import Cars from './pattern-cars-2.svg';
import Button from '@material-ui/core/Button';
import { Grid, Paper } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

//Components
//import Header from "./Electricity-Savings/Header";


const Header = (props) => {
  return (
    <h2>{props.title}</h2>
  )
}

const Results = (props) => {
  return (<div>
    <h2>{props.savings}</h2>
    <img src={Cars} style={{width: '100%'}}/>

    </div>
  )
}

const Graph = (props) => {
  return (
    <h2>{props.graph}</h2>
  )
}

class App extends Component {
  state = {
    name: ' '
  }

  changeName = (newName) => {
    this.setState({
      name: newName
    });

  }

  render() {

    const appContainerStyle = {
      //border: "2px solid lightGray",
      borderRadius: "10px",
      margin: "0 auto",
      padding: "10px 40px 30px 40px",
      maxWidth: "1000px"
    }

    const headerStyle = {
      color: "lightBlue",
      borderBottom: "2px solid lightGray",
      textAlign: "left"
    }

    const buttonContainerStyles = {
       textAlign: "center",
       marginTop: "20px"
    }
  
    return (

     <Paper elevation={8} style={appContainerStyle}>
      <Grid container spacing={16}>
       <Grid item xs={12} style={headerStyle}>
         
        <Typography component="h2" variant="display1" gutterBottom>
          Your Electricity Savings
        </Typography>
      </Grid>
      <Grid item sm>
        <Paper elevation={5}>
          <Results savings="Hello"/>
        </Paper>
          <div style={buttonContainerStyles}>
            <Button onClick={this.changeName.bind(this, <Results/>)} className="animated bounce" variant="contained" color="inherit" size="large">
              cars
            </Button>
            <Button onClick={() => this.changeName('TREES')} className="animated bounce" variant="contained" color="inherit" size="large">
             trees
            </Button>
            <Button onClick={() => this.changeName('CARBON')} className="animated bounce" variant="contained" color="inherit" size="large">
             carbon
          </Button>
        
        </div>
      </Grid>
      <Grid item sm>
        <Paper elevation={5}>
          <Graph graph="There"/>
          <div>{this.state.name}</div>
        </Paper>
      </Grid>
    </Grid>

      </Paper>
    );
  }
}

export default App;
