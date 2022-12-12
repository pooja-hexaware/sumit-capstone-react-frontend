import React from 'react';
import { Container, Row, Col, Navbar } from 'react-bootstrap';
import { useParams } from "react-router-dom";
import background from "../../assets/foodbg.jpg";
import Header from './header';
import HeaderCart from './headerCart';
import TopMessage from './topMessage';
import MenuCard from './menuCard';

function Root(props) {
  let { id } = useParams();

  return (
    <Container fluid>
      <Row>
        <Navbar bg="primary" className="p-2">
          <Col md={4}>
            <Header title="WiWi Food App (Capstone)" />
          </Col>

          <Col md={{ span: 4, offset: 4 }}>
            <HeaderCart />
          </Col>
        </Navbar>
      </Row>

      <div style={{ backgroundImage: `url(${background})` }}>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <TopMessage />
          </Col>
        </Row>

        <Row>
          <Col md={{ span: 8, offset: 2 }}>
            <MenuCard />
          </Col>
        </Row>
      </div>
    </Container>
  )
};

export default Root;
