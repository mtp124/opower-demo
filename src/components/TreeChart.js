import React, {Component} from 'react';
import {Bar, Pie, Doughnut, Line} from 'react-chartjs-2';
import ChartIntro from './Chart-intro';
import LinearProgress from '@material-ui/core/LinearProgress';


class TreeChart extends Component {
  constructor(props) {
  super(props);
  this.state = {
    chartData:{
      labels: ['January 2013', 'January 2014', 'January 2015', 'January 2016', 'January 2017', 'January 2018'],
      datasets:[
        {
          label:'Energy Usage',
          data:[
            950,
            900,
            820,
            840,
            791,
            573
          ],
          backgroundColor:[
            'rgba(159, 130, 97, 0.6)',
            'rgba(11, 33, 57, 0.6)',
            'rgba(159, 130, 97, 0.6)',
            'rgba(11, 33, 57, 0.6)',
            'rgba(159, 130, 97, 0.6)',
            'rgba(11, 33, 57, 0.6)',
            'rgba(159, 130, 97, 0.6)'
          ]
        }
      ]
    }
  };
}

  render() {
    return (
      <div>
      <ChartIntro style={{marginTop: "20px"}} title="Last Month, You Saved Enough Energy To Take Six Cars Off The Road!" subtitle="Great job! You used 573 KWH last month compared to 791 KWH in the same month last year. The resulting savings is enought to offset the energy consumption of six average-size cars for one month."/>
      <div>
      <Pie
        data={this.state.chartData}
        width={300}
        height={220}
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