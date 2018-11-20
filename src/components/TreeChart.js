import React, {Component} from 'react';
import {Bar, Pie, Doughnut, Line} from 'react-chartjs-2';
import Intro from './Intro';
import LinearProgress from '@material-ui/core/LinearProgress';


class TreeChart extends Component {
  constructor(props) {
  super(props);
  this.state = {
    chartData:{
      labels: ['Aesthetic/Other 29%', 'Stormwater 66%', 'Energy Savings 27%','Air Quality 5%', 'Carbon Dioxide Reductions 3%'],
      datasets:[
        {
          label:'The Benefits Of Planting More Trees',
          data:[
            36,
            29,
            27,
             5,
             3
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
      <Intro style={{marginTop: "20px"}} title="Urban Forest Structure & Condition" subtitle="A study analyzed “importance values” for the most abundant tree species. Importance values take into account not only total number of trees but also canopy cover and leaf area. Because ecosystem services increase greatly with increasing canopy cover and leaf area, importance value is a better indicator of the proportion of ecosystem services provided by each species than just the number of trees."/>
      <div>
      <Doughnut
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

  export default TreeChart;