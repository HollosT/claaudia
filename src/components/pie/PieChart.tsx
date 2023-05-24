import { Pie } from 'react-chartjs-2';
import 'chart.js/auto'


const PieChart: React.FC<{val1: number, val2: number | undefined}> = ({val1, val2}) => {
    const value1 = val1 === -1 ? 10000000000 : val1;
    const value05 = val2 ? val2 : 0;
    const value2 = value05 === -1 ? 10000000000 : value05;

    let data = value1 === value2 ? [100] :  [value1, value2]
    if(value1 === 0 && value2 === 0) {
        data = [0, 100]
    }

    const chartData = {
        datasets: [
          {
            data: data,
            backgroundColor: ['#5E3FBE', '#EBEBEF'],
            borderWidth: 1,
          },
        ]
      };
      
      const chartOptions = {
        responsive: true, 
      };
 

    return (
        <Pie className='pie' data={chartData} options={chartOptions} />
    )
}

export default PieChart;