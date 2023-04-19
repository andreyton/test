import React, { useEffect } from 'react';
import { Layout, Button } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';
import '../css/Navbar.css';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import APIService from '../API/APIService'

const { Header } = Layout;

function Navbar() {
    const navigate = useNavigate();
    const [token, removeToken] = useCookies(['mytoken'])
    const [user, removeUser] = useCookies(['user']);

    useEffect(() => {
        var user_token = token['mytoken']
        console.log('Login token is', user_token)
        console.log('Data type', typeof (token['mytoken']))

        if (String(user_token) === 'undefined') {
            navigate('/')
        } else {
            navigate('/sesion')
        }
    }, [token])

    const handleLogout = () => {    
        APIService.updateTime(1, token['mytoken'])
            .then(resp => {
                removeToken(['mytoken'])
                removeUser(['user'])
            })
            .catch(error => console.log(error))
    };

    return (
        <div>
            <Header >
                <ul className="ulIzquierda">
                    <li style={{ paddingBottom: '1px' }}>
                        <img src={require('../img/branding.png')} className="imagenNavbar" />
                    </li>
                </ul>
                <ul className='ulDerecha'>
                    <li>
                        <Button type="primary" icon={<LogoutOutlined />} onClick={handleLogout}>Cerrar Sesion</Button>
                    </li>
                </ul>
            </Header>
        </div>
    );
}

export default Navbar;