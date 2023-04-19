import React, { useState, useEffect } from 'react';
import { Layout } from "antd";
import { Col, Row } from "antd";
import "../css/RegularLanding.css";
import APIService from '../API/APIService';

function RegularLanding(props) {
    const [landing, setLanding] = useState([]);

    useEffect(() => {
        APIService.setupRegular(props.tokens)
            .then(resp => {
                setLanding(resp);
            })
            .catch(error => console.log(error))
    }, []);

    return (
        <div className="landing">
            {landing.map((page, index) => (
                <Layout>
                    <Row >
                        <Col>
                            <img src={page.logo} alt="logo" className="logo" />
                        </Col>
                        <Col span={18} className="columnDerecha" >
                            <h1 className="titulo">{page.tittle}</h1>
                            <p className="descripcion">{page.description}</p>
                        </Col>
                    </Row>
                </Layout>
            ))}
        </div>
    );
}

export default RegularLanding;
