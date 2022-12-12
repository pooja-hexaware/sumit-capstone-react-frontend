import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import CustomCard from '../components/customCard';
import { setMenuData, setCartData, setCurrentMenuData, setMenuPrice } from "./store/capstoneSlice"
import { Form, Row, Col, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux'
import CustomModal from '../components/customModal';
import ToppingModal from './toppingModal';
import { getMenusByStore } from './store/capstone.actions';

function MenuCard(props) {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [btnToppings, setBtnToppings] = useState(true);
  var menuData = useSelector((state) => state.capstone.menuData);
  let { id } = useParams();

  const handleShow = (obj) => {
    setShow(true);
    dispatch(setCurrentMenuData(obj));
  }

  const closeState = (childdata) => {
    setShow(childdata);
  }

  useEffect(() => {
    dispatch(getMenusByStore(id)).then((response) => {
      dispatch(setMenuData(response.data.menuIds));
    });
  }, [dispatch]);

  const handleAddQuantity = (obj) => {
    let modifiedData = menuData.map((res) => {
      if (res.name == obj.name) {
        // implement it for all the buttons
        setBtnToppings(false);
        let copiedObj = JSON.parse(JSON.stringify(res));
        copiedObj.quantity = (copiedObj.quantity == null ? 0 : copiedObj.quantity + 1);
        return copiedObj;
      } else {
        return res;
      }
    });

    let filteredCartData = modifiedData.filter(x => x.quantity > 0);

    let price = filteredCartData.reduce(function (prev, cur) {
      return prev + parseFloat(cur.amount) * cur.quantity;
    }, 0);

    // TODO: Model of the cart data would be same as menuData with additional
    // elemets like address details

    dispatch(setCartData(filteredCartData));
    dispatch(setMenuPrice(price));
    dispatch(setMenuData(modifiedData));
  }

  return (
    <div className="menu-card">
      <CustomCard variant="light" width="100%">
        {menuData && menuData.length > 0 ? menuData.map((res) => (
          <>
            <CustomCard variant="light" border="light" key={res._id}>
              <Row>
                <Col md={{ span: 9 }}>
                  <div className="fw-bold">{res.name}</div>
                  <div style={{ fontStyle: 'italic' }}>{res.description}</div>
                  <Row>
                    <Col md={{ span: 2 }} className="fw-bold text-danger">${res.amount}</Col>
                    <Col md={{ span: 3 }}>
                      <Button className="btn-color" size="sm" onClick={() => handleShow(res)} disabled={btnToppings}>
                        + Toppings
                      </Button>
                    </Col>
                  </Row>
                </Col>

                <Col md={{ span: 3 }}>
                  <Form.Group as={Row} controlId="formPlaintextQuantity">
                    <Form.Label column md="6" className="fw-bold d-flex justify-content-end">
                      Quantity
                    </Form.Label>
                    <Col md="5">
                      <Form.Control type="text" size="sm" style={{ width: "80%" }} value={res.quantity}
                        className="d-flex justify-content-end" />
                    </Col>
                  </Form.Group>

                  <Row>
                    <Col md={{ span: 12 }} className="d-flex justify-content-end">
                      <Button className="btn-color" size="sm" onClick={() => handleAddQuantity(res)}>
                        + Add
                      </Button>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </CustomCard>
            <hr style={{ margin: 0 }} />
          </>
        )) : <></>}
      </CustomCard>

      <CustomModal showModal={show} closeModal={closeState}>
        <ToppingModal />
      </CustomModal>
    </div>
  )
};

export default MenuCard;
