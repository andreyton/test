import React from 'react';
import { Bar } from '@ant-design/charts';

function BarChart(props) {

    const dataButton1 = props.users.map(user => ({
        username: user.username,
        button: 'Button 1',
        duration: user.user_sessions[0].duration,
        count: user.button_clicks[0].click_count,
    }));

    const dataButton2 = props.users.map(user => ({
        username: user.username,
        button: 'Button 2',
        duration: user.user_sessions[0].duration,
        count: user.button_clicks[1].click_count,
    }));

    const data = dataButton1.concat(dataButton2);

    const configLine = {
        data: data,
        height: 410,
        xField: 'duration',
        yField: 'username',
        seriesField: 'username',
        label: {
            style: {
                fill: '#aaa',
                fontSize: 16,
                stroke: '#01B075'
            },
            position: 'middle',
            layout: [{ type: 'interval-adjust-position' }],
            formatter: ({ duration }) => `${duration}`,
        },
    };

    return (
        <div>
            <h3 style={{ color: '#fff', textAlign: 'center' }}>Tiempo de sesion</h3>
            <Bar {...configLine} style={{ backgroundColor: '#1F263C', padding: '20px' }} />
        </div>
    );
}

export default BarChart;
