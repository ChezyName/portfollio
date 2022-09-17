import React from 'react'
import { PieChart } from 'react-minimal-pie-chart';

type PIE = {
    data: any,
}

const FrameworkPie = ({data}:PIE) => {
  console.log(data);

  return (
    <PieChart animate={true} data={data}/>
  )
}

export default FrameworkPie