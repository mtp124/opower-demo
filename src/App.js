import React, { Component } from 'react';
import 'typeface-roboto';
import './App.css';
import './animate.css';
import Cars from './pattern-cars-2.svg';
import Car from './car.svg';
import Tree from './tree.svg';
import Co2 from './co2.svg';
import Button from '@material-ui/core/Button';
import { Grid, Paper, MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import blue from '@material-ui/core/colors/blue';

const Header = (props) => {
  return (
    <h2>{props.title}</h2>
  )
}

const CarIcon = () => {
  return <img src={Car} alt="Car" style={{width: "30px", marginRight: "8px"}}/>
}

const TreeIcon = () => {
  return <img src={Tree} alt="Tree" style={{width: "30px", marginRight: "8px"}}/>
}

const CarbonIcon = () => {
  return <img src={Co2} alt="Co2" style={{width: "30px", marginRight: "8px"}}/>
}

const Results = (props) => {
  return (<div>
    <h2>{props.savings}</h2>
    <img src={Cars} alt="Cars" style={{width: "100%"}}/>

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

    const theme = createMuiTheme({
      palette: {
        primary: blue
      },
      typography: {
        useNextVariants: true,
        }

    });

    console.log(theme);

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
    <MuiThemeProvider theme={theme}>
      <Paper elevation={8} style={appContainerStyle}>
        <Grid container spacing={16}>
        <Grid item xs={12} style={headerStyle}>
         
        <Typography component="h5" variant="h5" gutterBottom>
          Your Electricity Savings
        </Typography>
      </Grid>
      <Grid item sm className="animated bounceInLeft">
        <Paper elevation={5}>
          <Results savings="Hello"/>
        </Paper>
          <div style={buttonContainerStyles}>

            <Button style={{borderTopRightRadius: "0", borderBottomRightRadius: "0"}} onClick={this.changeName.bind(this, <Results/>)} className="animated bounce" variant="contained" color="inherit" size="large">
                <CarIcon/>cars
            </Button>
            <Button style={{borderRadius: "0"}} onClick={() => this.changeName('TREES')} className="animated bounce" variant="contained" color="inherit" size="large">
                <TreeIcon/>trees
            </Button>
            <Button style={{borderTopLeftRadius: "0", borderBottomLeftRadius: "0"}} onClick={() => this.changeName('CARBON')} className="animated bounce" variant="contained" color="inherit" size="large">
                <CarbonIcon/>carbon
          </Button>

        </div>
      </Grid>
      <Grid item sm className="animated bounceInRight">
        <Paper elevation={5}>
          <Graph graph="There"/>
          <div>{this.state.name}</div>

        </Paper>
      </Grid>
    </Grid>
      </Paper>
   </MuiThemeProvider>
    );
  }
}

export default App;
