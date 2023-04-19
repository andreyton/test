import React from "react";
import { Layout, Button } from "antd";
import { Col, Row } from "antd";
import "../css/Buttons.css";
import APIService from '../API/APIService'

function Buttons(props) {

  const handleClick = (buttonNumber) => {
    APIService.updateClick( buttonNumber, props.tokens)
      .then(resp => {
        console.log(resp);
      })
      .catch(error => console.log(error))
  };

  return (
    <Layout>
      <Row justify="center">
        <Col>
          <div className="button-container">
            <Button type="primary" onClick={() => handleClick(1)}>Botón 1</Button>
            <Button type="primary" style={{ marginLeft: "20px" }} onClick={() => handleClick(2)}>Botón 2</Button>
          </div>
        </Col>
      </Row>
    </Layout>
  );
}

export default Buttons;
