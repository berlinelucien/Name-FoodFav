import React, {useState, useEffect} from "react";
import page from '../App'
import Button from 'react-bootstrap/Button';
import {Chart} from 'primereact/chart';


export const DataChart = () => {

    /* Create state in Function component via Hooks */
    const [isLoading, setLoading] = useState(false);
    const [displayData, setDisplayData] = useState({display:"none"});
  
    useEffect(() => {
      if (isLoading) {
        simulateNetworkRequest().then(() => {
          setLoading(false);
          setDisplayData({display:"block"});
        });
      }
    }, [isLoading]);

  const handleClick = () => setLoading(true);

  const chartData = {
    labels: ['A','B','C'],
    datasets: [
        {
            data: [30, 50, 20],
            backgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56"
            ],
            hoverBackgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56"
            ]
        }]
    };

  return (
    <div>
        <Button variant="outline-primary" className="mr-1"
          disabled={isLoading}
          onClick={!isLoading ? handleClick : undefined}
        >
            {isLoading ? 'Simulating Network Activity…' : 'Load PrimeReact Chart'}
        </Button>
        <div style={displayData}>
            <Chart type="doughnut" data={chartData} className="mt-5"/>
        </div>
    </div>
  );
}
// Mimics a network delay of a few seconds
function simulateNetworkRequest() {
    return new Promise((resolve) => setTimeout(resolve, 2000));
}