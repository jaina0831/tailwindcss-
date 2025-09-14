import { Button, notification } from "antd"
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useUserInfo } from "../../react-query";
import { addCartItems } from "../../redux/cartSlice";
import styles from "./addtobasket4.module.css"
import { HeartOutlined } from '@ant-design/icons';

export default function AddToCart({ music, qty }) {
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
        ` ${music.category}<${music.name}> has been added to your favorite.`,
      placement: 'bottomRight'
    });
  };

  const addToCart = () => {
    openNotification();
    dispatch(addCartItems({
      id: music.id,
      number:music.number,
      category:music.category,
      name: music.name,
      image: music.image,
      audio:music.audio,
      qty,
    }))
  };
  
  return (
    <Button color="yellow" className={styles.btn} onClick={(userInfo?.name)?addToCart:checkoutHandler}>
       <HeartOutlined  style={{fontSize:"20px"}}/>
    </Button>
  );
}
