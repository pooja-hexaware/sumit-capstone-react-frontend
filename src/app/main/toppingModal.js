import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Row, Col } from 'react-bootstrap';
import CustomCard from '../components/customCard';
import { setMenuData, setToppingPrice, setCartData, setCurrentMenuData } from './store/capstoneSlice';

function ToppingModal(props) {
  const dispatch = useDispatch();
  var menuData = useSelector((state) => state.capstone.menuData);
  var currentMenuData = useSelector((state) => state.capstone.currentMenuData);
  var toppingPrice = useSelector((state) => state.capstone.toppingPrice);

  const handleOnChange = (e) => {
    let updatedMenu = currentMenuData.allowedToppings.map((x) => {
      let currentTopping = JSON.parse(JSON.stringify(x));

      if (x._id == e.target.id && e.target.checked) {
        toppingPrice = parseFloat(toppingPrice) + parseFloat(x.price);
        currentTopping.isChecked = e.target.checked;
      }
      else if (x._id == e.target.id && !e.target.checked) {
        toppingPrice = parseFloat(toppingPrice) - parseFloat(x.price);
        currentTopping.isChecked = e.target.checked;
      }

      return currentTopping;
    });

    let updatedMenuData = menuData.map((md) => {
      if (md._id == currentMenuData._id) {
        let currentMenu = JSON.parse(JSON.stringify(md));

        currentMenu.allowedToppings = updatedMenu;
        dispatch(setCurrentMenuData(currentMenu));
        return currentMenu;
      }
      else
        return md;
    });

    let filteredCartData = updatedMenuData.filter(x => x.quantity > 0);

    dispatch(setCartData(filteredCartData));
    dispatch(setMenuData(updatedMenuData));
    dispatch(setToppingPrice(toppingPrice));
  };

  return (
    currentMenuData.allowedToppings.map((x) => (
      <CustomCard variant="white" border="light" customBodyClass="p-0">
        <Row>
          <Col md={{ span: 3 }}>
            <img src={x.background && x.background != null ? x.background : "/img/smallimagefood.png"} alt="food1" />
          </Col>

          <Col md={{ span: 6 }}>
            <div>{x.name}</div>
            <div>{x.cal}</div>
          </Col>

          <Col md={{ span: 3 }}>
            <Form.Check
              type="checkbox"
              id={x._id}
              name={x.name}
              onChange={(e) => handleOnChange(e)}
              checked={x.isChecked}
            />
          </Col>
        </Row>
      </CustomCard>
    ))
  )
};

export default ToppingModal;
