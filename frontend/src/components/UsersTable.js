import React from 'react';
import '../css/UsersTable.css';
import { Table } from 'antd';
import moment from 'moment';

function UsersTable(props) {

  const columns = [
    {
      title: 'Usuario',
      dataIndex: 'username',
      key: 'username',
    },
    {
      title: 'Inicio de sesion',
      dataIndex: ['user_sessions', 0, 'start_time'],
      key: 'start_time',
      render: (start_time) => moment(start_time).format('DD/MM/YYYY hh:mm:ss')
    },
    {
      title: 'Tiempo de sesión',
      dataIndex: ['user_sessions', 0, 'duration'],
      key: 'duration',
      render: (duration) => `${duration < 0 ? 0 : duration} minutos`
    },
    {
      title: 'Boton 1',
      dataIndex: ['button_clicks', 0, 'click_count'],
      key: 'click_count',
    },
    {
      title: 'Boton 2',
      dataIndex: ['button_clicks', 1, 'click_count'],
      key: 'click_count',
    },
  ];

  return (
    <Table dataSource={props.users} columns={columns} className="tablaUsers" />
  );
}

export default UsersTable;