import { Form, Input, Button, Row, Col } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useCookies } from 'react-cookie'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import APIService from '../API/APIService'

function LoginPage() {
  const navigate = useNavigate();
  const [token, setToken] = useCookies(['mytoken'])
  const [user, setUser] = useCookies(['user'])

  useEffect(() => {
    var user_token = token['mytoken']
    console.log('Login token is', user_token)
    console.log('Data type', typeof (token['mytoken']))

    if (String(user_token) === 'undefined') {
      navigate('/')
    } else {
      APIService.updateTime(0, token['mytoken'])
        .then(resp => {
          navigate('/sesion')
        })
        .catch(error => console.log(error))
    }
  }, [token])

  const handleSubmit = values => {
    const { username, password } = values;
    APIService.LoginUser({ username, password })
      .then(resp => {
        setToken('mytoken', resp.token);
        setUser('user', username);
      })
      .catch(error => console.log(error))
  };

  return (
    <Row justify="center" align="middle" style={{ height: '95vh' }}>
      <Col xs={24} sm={16} md={12} lg={8}>
        <Form onFinish={handleSubmit}>
          <h1 style={{ color: 'white' }}>Iniciar Sesion</h1>
          <hr />
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: 'Ingresa un usuario!',
              },
            ]}
          >
            <Input prefix={<UserOutlined />} placeholder="Usuario" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Ingresa una contraseña!',
              },
            ]}
          >
            <Input.Password prefix={<LockOutlined />} placeholder="Contraseña" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Iniciar
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default LoginPage;
