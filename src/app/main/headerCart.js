import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Button, Badge } from 'react-bootstrap';
import CustomModal from '../components/customModal';
import CartModal from './cartModal';

function HeaderCart() {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  var cartData = useSelector((state) => state.capstone.cartData);
  var menuPrice = useSelector((state) => state.capstone.menuPrice);
  var toppingPrice = useSelector((state) => state.capstone.toppingPrice);
  const [itemCount, setItemCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (cartData && cartData.length >= 0) {
      let items = cartData.reduce(function (prev, cur) {
        return prev + cur.quantity;
      }, 0);

      let price = parseFloat(menuPrice) + parseFloat(toppingPrice);

      setTotalPrice(price.toFixed(2));
      setItemCount(items);
    }
  });

  const closeState = (childdata) => {
    setShow(childdata);
  }

  const handleShow = () => {
    setShow(true);
  }

  return (
    <>
      <div className="d-flex justify-content-end">
        <Button className="btn-color" onClick={() => handleShow()}>
          Your Cart <Badge bg="secondary">{itemCount}</Badge>
          <span className="visually-hidden">cart items</span>
        </Button>
      </div>

      <CustomModal showModal={show} closeModal={closeState}>
        <CartModal totalPrice={totalPrice} />
      </CustomModal>
    </>
  )
};

export default HeaderCart;
