import * as React from 'react';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';

const data = [
  { value: 4, label: 'Lessons Done' },
  { value: 3, label: 'Games Done' },
  { value: 4, label: 'Practice Problems Done'},
  { value: 2, label: 'Quizzes Done' },
  
];


const size = {
  width: 800,
  height: 490,
};

export default function PieArcLabel() {
  return (
    <PieChart
      series={[
        {
          arcLabel: (item) => `${item.label} (${item.value})\u00A0\u00A0\u00A0\u00A0`,
          arcLabelMinAngle: 45,
          data,
           // Add padding to move labels away from the pie chart
          innerRadius: 20,
          paddingAngle: 0,
          cornerRadius: 0,
          cx:300,
        },
      ]}
      sx={{
        [`& .${pieArcLabelClasses.root}`]: {
          fill: 'white',
          fontWeight: 'bold',
        },
      }}

      {...size}
    />
  );
}
