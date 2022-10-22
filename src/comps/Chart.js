import './Chart.css'
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

function Chart(props) {
  const options = {
        responsive: true,
        plugins: {
          legend: {
            
          },
          title: {
            display: true,
            text: 'Covid-19 Graph',
          },
        },
      };
      
      const labels = ['Confirmed', 'Deaths', 'Recovered'];
      
       const data = {
        labels,
        datasets: [
        
          {
            label: 'Covid-19 Data',
            data: [props.confirmed,props.deaths,props.recovered],
            backgroundColor: 'rgba(53, 182, 205, 1)',
          },
        ],
      };
  return (
    <div className='container' id="bar" style={{"width":"1110px"}} >
        
        <Bar options={options} data={data} />
      
        
    </div>
  )
}

export default Chart