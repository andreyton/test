import React from 'react';
import { Line } from '@ant-design/charts';

function LineChart(props) {

  const dataButton1 = props.users.map(user => ({
    username: user.username,
    button: 'Boton 1',
    duration: user.user_sessions[0].duration,
    count: user.button_clicks[0].click_count,
  }));

  const dataButton2 = props.users.map(user => ({
    username: user.username,
    button: 'Boton 2',
    duration: user.user_sessions[0].duration,
    count: user.button_clicks[1].click_count,
  }));

  const data = dataButton1.concat(dataButton2);

  const configLine = {
    data: data,
    height: 410,
    xField: 'username',
    yField: 'count',
    seriesField: 'button',
    yAxis: {
      label: {
        formatter: (value) => `${value} clicks`,
      },
    },
    tooltip: {
      formatter: (datum) => ({
        name: `${datum.username} (${datum.button})`,
        value: `${datum.count} clicks`,
        marker: true,
        style: {
          fontSize: '14px',
        },
      }),
    },
  };

  return (
    <div>
      <h3 style={{ color: '#fff', textAlign: 'center' }}>Clicks por Boton</h3>
      <Line {...configLine} style={{ backgroundColor: '#1F263C', padding: '20px' }} />
    </div>
  );
}

export default LineChart;
