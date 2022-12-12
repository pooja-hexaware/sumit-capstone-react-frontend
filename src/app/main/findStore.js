import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Form, Row, Col, Container, Button } from 'react-bootstrap';
import { setStoreData } from "./store/capstoneSlice"
import { getStores } from './store/capstone.actions';

function FindStore() {
  const dispatch = useDispatch();
  var storeData = useSelector((state) => state.capstone.storeData);
  const [searchText, setSearchText] = useState();

  const onSearchTextChange = e => {
    console.log(e.target.value);
    setSearchText(e.target.value);
  }

  const onSearch = () => {
    dispatch(getStores(searchText)).then((response) => {
      // console.log('response: ' + JSON.stringify(response));
      dispatch(setStoreData(response.data));
    });
  }

  const handleOnChange = () => {
    //
  }

  useEffect(() => {
  }, []);

  return (
    <>
      <Container>
        <Row>
          <Col md={{ span: 5 }}>
            <h1>FIND A</h1>
            <h1>STORE</h1>
          </Col>

          <Col md={{ span: 7 }}>
            <div className="b-left p-2">
              <Form.Group as={Row} controlId="formPlaintextQuantity">
                <Col md="8">
                  <Form.Control type="text" size="sm" value={searchText}
                    className="d-flex justify-content-end" onChange={onSearchTextChange} />
                </Col>

                <Col md="4">
                  <Button variant="danger" size="sm" onClick={onSearch}>
                    SEARCH
                  </Button>
                </Col>
              </Form.Group>

              <Row className="pt-4">
                {["ATM", "Diesel", "E85", "eBlend", "fReal", "Fresh Food",
                  "Pay at the Pump", "Pizza", "Premium without Ethanol",
                  "Video Rentals", "Open 24hrs", "DEF", "Semi-Truck Fuel Island",
                  "Car Wash", "Seating", "Wi-Fi", "Clean Water"].map((service) => (
                    <Col md={{ span: 4 }}>
                      <Form.Check
                        type="checkbox"
                        id={service}
                        name={service}
                        label={service}
                        className="f-small"
                        onChange={(e) => handleOnChange(e)}
                      />
                      {/* checked={x.isChecked} */}
                    </Col>
                  ))}
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="px-5 pt-4" style={{ height: 430, backgroundColor: '#f5f3f0' }} fluid>
        <div className="border">
          <Row>
            <Col md={{ span: 3 }}>
              {storeData.map((store) => (
                <>
                  <div className="fw-bold text-danger">{store.name}</div>
                  <div className="f-small">
                    {store.address} <br />
                    {store.city}, {store.zip} <br />
                    {store.state}
                  </div>
                  <table>
                    <tr>
                      <td style={{ fontWeight: 500 }}>Store: </td>
                      <td>{store.storePhone}</td>
                    </tr>
                    <tr>
                      <td style={{ fontWeight: 500 }}>Kitchen: </td>
                      <td>{store.kitchenPhone}</td>
                    </tr>
                  </table>

                  <div>
                    <a href={"/store/" + store.id}>MORE DETAILS</a>
                  </div>
                  <hr style={{ margin: 0 }} />
                </>
              ))}
            </Col>
            <Col md={{ span: 9 }}>
              <img src="/img/map.png" style={{ height: 400, width: 950 }} alt="food1" />
            </Col>
          </Row>
        </div>
      </Container>
    </>
  )
}

export default FindStore;