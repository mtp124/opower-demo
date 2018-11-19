import React, { Component } from 'react';
import 'typeface-roboto';
import './css/App.css';
import './css/animate.css';
import Car from './images/car.svg';
import PlantATree from './images/BenefitsOfTrees.png';
import CarbonCycle from './images/carbon-cycle.png';
import Tree from './images/tree.svg';
import Co2 from './images/co2.svg';
import Button from '@material-ui/core/Button';
import { Grid, Paper, MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import blue from '@material-ui/core/colors/blue';

//Custom components
import CarsAnimation from './components/CarsAnimation';
import Chart from './components/Chart';
import TreeChart from './components/TreeChart';


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
const LeftPane = (props) => {
  return (<div style={{padding: "0 0 0 30px"}}>
    
    </div>
  )
}
const RightPane = (props) => {
  return ( <div  style={{padding: "0 0 0 20px"}}>    
    
    </div>
  )
}

class App extends Component {
  state = {
    leftPaneDefault: <CarsAnimation/>,
    rightPaneDefault: <div style={{margin: "0 20px 0 20px", paddingBottom: "20px"}} className="animated bounceInDown"><Chart/></div>
  }

  //Pane Content
  componentDidMount() {
    this.setState ({
      leftPaneDefault: <CarsAnimation/>,
      rightPaneDefault: <div style={{margin: "0 20px 0 20px", paddingBottom: "20px"}} className="animated bounceInDown"><Chart/></div>
    }
   ) 
  }
  carsSavings = () => {
    this.setState({
      leftPaneDefault: <div className="animated bounceInDown"><CarsAnimation/></div>,
      rightPaneDefault: <div style={{margin: "0 20px 0 20px", paddingBottom: "20px"}} className="animated bounceInDown"><Chart/></div>
    });
  }

  treesSavings = () => {
    this.setState({
      leftPaneDefault: <img src={PlantATree} alt="Plant Trees" style={{width: "70%", margin: "10%", paddingLeft: "5%"}} className="animated bounceInDown"/>,
      rightPaneDefault: <div style={{margin: "0 20px 0 20px", padding: "20px 0 20px 0"}} className="animated bounceInDown"><TreeChart/></div>
    });
  }

  carbonSavings = () => {
    this.setState({
      leftPaneDefault: <img src={CarbonCycle} alt="Carbon Cycle" style={{width: "80%", margin: "10%"}} className="animated bounceInDown"/>,
      rightPaneDefault: <div style={{margin: "0 20px 0 20px", padding: "20px 0 20px 0"}} className="animated bounceInDown"><TreeChart/></div>
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
      borderRadius: "10px",
      margin: "20px auto 0 auto",
      padding: "20px 40px 30px 40px",
      maxWidth: "1000px",
      background: "#457B9D"
    }
    const headerStyle = {
      color: "lightBlue",
      borderBottom: "2px solid #fff",
      textAlign: "left",
      height: "60px",
      marginBottom: "25px"
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
            <Typography component="h5" variant="h5" style={{color: "#FFF"}}>
            Your Electricity Savings
          </Typography>
       </Grid>
      <Grid item sm className="animated bounceInLeft">
        <Paper elevation={5}>
          <LeftPane title="Hello"/>
          <div style={{overflow: "hidden"}}>{this.state.leftPaneDefault}</div>
        </Paper>       
        <div style={buttonContainerStyles}>
          <Button style={{borderTopRightRadius: "0", borderBottomRightRadius: "0"}} onClick={() => this.carsSavings()} className="animated bounce" variant="contained" color="inherit" size="large">
              <CarIcon/>cars
            </Button>
              <Button style={{borderRadius: "0"}} onClick={() => this.treesSavings()} className="animated bounce" variant="contained" color="inherit" size="large">
                <TreeIcon/>trees
              </Button>
            <Button style={{borderTopLeftRadius: "0", borderBottomLeftRadius: "0"}} onClick={() => this.carbonSavings()} className="animated bounce" variant="contained" color="inherit" size="large">
              <CarbonIcon/>carbon
          </Button>      
        </div>
      </Grid>
      <Grid item sm className="animated bounceInRight">
        <Paper elevation={5}>
          <RightPane title="There"/>
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
