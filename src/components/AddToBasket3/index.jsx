import { Button, notification } from "antd"
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useUserInfo } from "../../react-query";
import { addCartItems } from "../../redux/cartSlice";
import styles from "./addtobasket3.module.css"
import { HeartOutlined } from '@ant-design/icons';

export default function AddToCart({ video, qty }) {
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
        ` ${video.name} has been added to your favorite.`,
      placement: 'bottomRight'
    });
  };

  const addToCart = () => {
    openNotification();
    dispatch(addCartItems({
      id: video.id,
      image: video.image,
      name: video.name,
      qty,
    }))
  };

  return (
    <button className={styles.btn} onClick={(userInfo?.name)?addToCart:checkoutHandler}>
      <h6>新增</h6>
    </button>
  );
}
