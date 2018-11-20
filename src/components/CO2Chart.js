import React, {Component} from 'react';
import {Bar, Pie, Doughnut, Line} from 'react-chartjs-2';
import Intro from './Intro';
import LinearProgress from '@material-ui/core/LinearProgress';


class CO2Chart extends Component {
  constructor(props) {
  super(props);
  this.state = {
    chartData:{
      labels: ['Electricity 37%', 'Transportation 31%', 'Industry 15%', 'Residential $ Commercial 10%', 'Other (Non-Fossil Fuel Combustion 6%'],
      datasets:[
        {
          label:'U.S. Carbon Dioxide Emissions, By Source',
          data:[
            37,
            31,
            15,
            10,
             6
          ],
          backgroundColor:[
            'rgba(159, 130, 97, 0.6)',
            'rgba(11, 33, 57, 0.6)',
            'rgba(252, 208, 39, 0.6)',
            'rgba(106, 107, 106, 0.6)',
            'rgba(226, 200, 194, 0.6)'
          ]
        }
      ]
    }
  };
}

  render() {
    return (
      <div className="animated bounceInDown">       
      <Intro style={{marginTop: "20px"}} title="Where does earth's CO2 & oxygen come from?" subtitle="Carbon dioxide (CO2) is the primary greenhouse gas emitted through human activities. In 2013, CO2 accounted for about 82% of all U.S. greenhouse gas emissions from human activities. Carbon dioxide is naturally present in the atmosphere as part of the Earth’s carbon cycle (the natural circulation of carbon among the atmosphere, oceans, soil, plants, and animals). Human activities are altering the carbon cycle—both by adding more CO2 to the atmosphere and by influencing the ability of natural sinks, like forests, to remove CO2 from the atmosphere. While CO2 emissions come from a variety of natural sources, human-related emissions are responsible for the increase that has occurred in the atmosphere since the industrial revolution."/>
      <div>
      <Pie
        data={this.state.chartData}
        width={400}
        height={300}
        loader={<LinearProgress />}
        options={{
		    maintainAspectRatio: false
	}}
/>
       </div>
    </div>
    )  
  } 
}

  export default CO2Chart;