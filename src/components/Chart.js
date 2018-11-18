import * as React from "react";
import { Chart } from "react-google-charts";
 
const EnergyChart = () => {
  return (
    <Chart 
  width={'400px'}
  height={'300px'}
  chartType="Bar"
  loader={<div>Loading Chart</div>}
  data={[
    ['Year', 'Energy Usage', 'Savings'],
    ['2015', 400, 200],
    ['2016', 460, 250],
    ['2017', 1120, 300],
    ['2018', 540, 350],
  ]}
  options={{
    // Material design options
    chart: {
      title: 'Last Month, You Saved Enough Energy To Take Six Cars Off The Road!',
      subtitle: 'Great job! You used 573 KWH last month compared to 791 KWH in the same month last year. The resulting savings is enought to offset the energy consumption of six average-size cars for one month.',
    },
  }}
  // For tests
  rootProps={{ 'data-testid': '2' }}
/>
  );
};
export default EnergyChart;