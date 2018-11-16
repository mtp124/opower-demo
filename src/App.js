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
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

//Custom components
import Chart from './Electricity-Savings/Chart';


//Button Icons
const CarIcon = () => {
  return <img src={Car} alt="Car" style={{width: "30px", marginRight: "8px"}}/>
}
const TreeIcon = () => {
  return <img src={Tree} alt="Tree" style={{width: "30px", marginRight: "8px"}}/>
}
const CarbonIcon = () => {
  return <img src={Co2} alt="Co2" style={{width: "30px", marginRight: "8px"}}/>
}

//Pane Headers
const Results = (props) => {
  return (<div>
    <h2>{props.savings}</h2>
    </div>
  )
}
const Graph = (props) => {
  return (
    <h2>{props.graph}</h2>
  )
}
//Pane Content
class App extends Component {
  state = {
    leftPaneDefault: <img src={Cars} alt="Cars" style={{width: "100%"}}/>,
    rightPaneDefault: <Chart/>
  }

  carsSavings = () => {
    this.setState({
      leftPaneDefault: <img src={Car} alt="Car" style={{width: "100%"}}/>,
      rightPaneDefault: <Chart/>
    });
  }

  treesSavings = () => {
    this.setState({
      leftPaneDefault: <img src={Co2} alt="Co2" style={{width: "100%"}}/>,
      rightPaneDefault: <img src={Tree} alt="Tree" style={{width: "100%"}}/>
    });
  }

  carbonSavings = () => {
    this.setState({
      leftPaneDefault: <img src={Car} alt="Car" style={{width: "100%"}}/>,
      rightPaneDefault: <img src={Co2} alt="Co2"style={{width: "100%"}}/>
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

    //Custom Styles
    const appContainerStyle = {
      //border: "2px solid lightGray",
      borderRadius: "10px",
      margin: "20px auto 0 auto",
      padding: "10px 40px 30px 40px",
      maxWidth: "1000px"
    }
    const headerStyle = {
      color: "lightBlue",
      //borderBottom: "2px solid lightGray",
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
          <AppBar position="static" color="default">
           <Toolbar>
            <Typography component="h5" variant="h5" gutterBottom>
            Your Electricity Savings
            </Typography>
          </Toolbar>
        </AppBar>   
       </Grid>
      <Grid item sm className="animated bounceInLeft">
        <Paper elevation={5}>
          <Results savings="Hello"/>
          <div>{this.state.leftPaneDefault}</div>
        </Paper>
          
        <div style={buttonContainerStyles}>
          <Button style={{borderTopRightRadius: "0", borderBottomRightRadius: "0"}} onClick={() => this.carsSavings((<img src={Car} alt="Car" style={{width: "100%"}}/>))} className="animated bounce" variant="contained" color="inherit" size="large">
              <CarIcon/>cars
            </Button>
              <Button style={{borderRadius: "0"}} onClick={() => this.treesSavings((<img src={Tree} alt="Tree" style={{width: "100%"}}/>))} className="animated bounce" variant="contained" color="inherit" size="large">
                <TreeIcon/>trees
              </Button>
            <Button style={{borderTopLeftRadius: "0", borderBottomLeftRadius: "0"}} onClick={() => this.carbonSavings('CARBON')} className="animated bounce" variant="contained" color="inherit" size="large">
              <CarbonIcon/>carbon
          </Button>
         
        </div>
      </Grid>
      <Grid item sm className="animated bounceInRight">
        <Paper elevation={5}>
          <Graph graph="There"/>
          <div>{this.state.rightPaneDefault}</div>

        </Paper>
      </Grid>
    </Grid>
      </Paper>
   </MuiThemeProvider>
    );
  }
}

export default App;
