import React from 'react';
import { Pie } from '@ant-design/charts';
import '../css/PieChart.css';

function PieChart(props) {

  const data = props.users.map(user => ({
    username: user.username,
    startTime: user.user_sessions[0].start_time,
    endTime: user.user_sessions[0].end_time,
    button: user.button_clicks[props.button].click_count,
  }));

  const configPie = {
    appendPadding: 10,
    data: data,
    angleField: 'button',
    colorField: 'username',
    height: 450,
    radius: 0.8,
    label: {
      type: 'inner',
      offset: '-0.5',
      content: '{name} {percentage}',
      style: {
        fill: '#fff',
        fontSize: 14,
        textAlign: 'center',
      },
    },
  };

  return (
    <div>
      <h3 style={{ color: '#fff', textAlign: 'center' }}>Boton {props.button+1}</h3>
      <Pie {...configPie} style={{ backgroundColor: '#1F263C' }} />
    </div>
  );
}

export default PieChart;