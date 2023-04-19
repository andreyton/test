import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { Col, Row } from 'antd';
import '../css/Dashboard.css';
import Navbar from '../components/Navbar';
import PieChart from '../components/PieChart';
import LineChart from '../components/LineChart';
import UsersTable from '../components/UsersTable';
import RegularLanding from '../components/RegularLanding';
import Buttons from '../components/Buttons';
import BarChart from '../components/BarChart';
import APIService from '../API/APIService';

function Dashboard() {
  const [users, setUsers] = useState([]);
  const [userType, setUserType] = useState([]);
  const [user] = useCookies(['user']);
  const [token] = useCookies(['mytoken'])

  useEffect(() => {
    APIService.setupDetail(user['user'], token['mytoken'])
      .then(resp => {
        setUserType(resp.groups[0].name);
      })
      .catch(error => console.log(error))

    APIService.setupUsers(token['mytoken'])
      .then(resp => {
        setUsers(resp);
      })
      .catch(error => console.log(error))
  }, [token, user]);

  return (
    <>
      <Row>
        <Col span={24}>
          <Navbar />
          {userType !== 'admin' && <>
            <RegularLanding tokens={token['mytoken']} />
            <Buttons tokens={token['mytoken']} />
          </>}
        </Col>
      </Row>
      <br />

      {userType === 'admin' && <div className="contenedor">
        <Row>
          <Col span={24}>
            <UsersTable users={users} />
          </Col>
        </Row>

        <br />
        <Row gutter={20}>
          <Col xs={24} md={12}>
            <PieChart users={users} button={0} />
          </Col>

          <Col xs={24} md={12}>
            <PieChart users={users} button={1} />
          </Col>
        </Row>
        <br></br>
        <Row gutter={20}>
          <Col xs={24} md={12} >
            <BarChart users={users} />
          </Col>

          <Col xs={24} md={12}>
            <LineChart users={users} />
          </Col>
        </Row>
      </div>}
    </>
  );
}

export default Dashboard;