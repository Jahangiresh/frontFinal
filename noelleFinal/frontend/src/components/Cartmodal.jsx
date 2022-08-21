import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { RiShoppingCartLine } from "react-icons/ri";
import "./cartmodal.scss";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  let products = JSON.parse(localStorage.getItem("products"));
  const navigate = useNavigate(0);

  const removeProductHandler = (e) => {
    navigate(-1);

    let _id = e.target.nextSibling.innerText;

    console.log(_id);
    let existedProd = products.find((x) => x.id === _id);

    products.map((prod) => {
      e.target.nextSibling.innerText === prod.id
        ? products.splice(products.indexOf(existedProd), 1)
        : console.log("sa");
    });
    localStorage.setItem("products", JSON.stringify(products));
  };

  let totalPrice = 0;

  products.forEach((product) => {
    let priceNum = Number(product.price);
    console.log(typeof priceNum, priceNum);
    totalPrice += priceNum * product.count;
    console.log(totalPrice);
  });

  return (
    <div>
      <Button onClick={handleOpen}>
        <RiShoppingCartLine className="cart__icon" />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <div className="modal__header row">
              <div className="modal__header__logo">
                <img
                  src="https://assets.website-files.com/5d89d4faecc118086c3813ec/5d89d6ecb4e4f70ff3fb77e8_logoblack-8.png"
                  alt="logo jpg"
                />
              </div>
            </div>
            <div className="modal__body">
              {products.map((p) => {
                return (
                  <div className="modal__body__product row">
                    <div className="modal__body__product__image col-3">
                      <img src={p.image} alt="" />
                    </div>
                    <div className="modal__body__product__title col-6">
                      <h2>{p.name}</h2>
                      <p>{p.price}</p>
                      <span onClick={removeProductHandler}>remove</span>
                      <span className="d-none">{p.id}</span>
                    </div>
                    <div className="modal__body__product__count col-lg-3 d-md-3 col-6">
                      <input type="number" value={p.count} />
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="modal__footer">
              <div className="modal__footer__total ">
                <span className="subtotal">Subtotal</span>
                <span className="total__price">${totalPrice} USD</span>
              </div>
            </div>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <Link className="cartmodal__link" to="/cartpage">
              Buy now
            </Link>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
