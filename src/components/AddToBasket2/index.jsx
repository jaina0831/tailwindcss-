import { Button, notification } from "antd"
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useUserInfo } from "../../react-query";
import { addCartItems } from "../../redux/cartSlice";
import styles from "./addtobasket2.module.css"
import { HeartOutlined } from '@ant-design/icons';

export default function AddToCart({ product, qty }) {
  const dispatch = useDispatch();

  const { data: userInfo } = useUserInfo();
  const navigate = useNavigate();
  const checkoutHandler = () => {
      navigate("/auth/login");
  };

  const openNotification = () => {
    notification.open({
      message: 'Adding Notification',
      description:
        ` ${product.category}<${product.name}> has been added to your favorite.`,
      placement: 'bottomRight'
    });
  };
  const addToCart = () => {
    openNotification();
    dispatch(addCartItems({
      id: product.id,
      name: product.name,
      image: product.image,
      price: product.price,
      category: product.category,
      countInStock: product.countInStock,
      qty,
    }))
  };

  return (
    <Button color="yellow" className={styles.btn} onClick={(userInfo?.name)?addToCart:checkoutHandler} >
      <HeartOutlined style={{ fontSize: "20px" }} />
    </Button>
  );
}
