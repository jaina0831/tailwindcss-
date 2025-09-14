import { Modal, Button, Select } from "antd";
import { Link ,useNavigate} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addCartItems, removeCartItems } from "../../redux/cartSlice";
import { useUserInfo } from "../../react-query";
import styles from "./basketmodal.module.css"
import { CartIcon } from "./Icons";
import { selectCartItems } from "../../redux/cartSlice";
import { HeartFilled } from '@ant-design/icons';
import { DeleteOutlined } from '@ant-design/icons';
const { Option } = Select;

export default function BasketModal({ isOpen, toggleModal }) {
   const dispatch = useDispatch();
   const cartItems = useSelector(selectCartItems);
   const { data: userInfo } = useUserInfo();
   const navigate = useNavigate();

   const handleCancel = () => toggleModal(!isOpen);
   // const getTotalPrice = () => {
   //    return (cartItems.length > 0) ?
   //       cartItems.reduce((sum, item) => sum + item.price * item.qty, 0)
   //       : 0;
   // }
   const qty = (cartItems.length > 0)
      ? cartItems.reduce((sum, item) => sum + item.qty, 0)
      : 0;
   const checkoutHandler = () => {
      handleCancel();
      if (userInfo?.name)
         navigate("/")
      else
         navigate("/auth/login");
   };


   return (
      <Modal
         title="Favorite"
         open={isOpen}
         onCancel={handleCancel}
         footer={null}
         style={{}}
      >
         {cartItems.length === 0 ? (
            <div>Your favorite is empty</div>
         ) : (

            cartItems.map(item => (
               <li key={item.id} className={styles.item}>
                  <Link to={`music/id/${item.id}`}>
                     <div onClick={handleCancel} >
                        <img className={styles.image} src={item.image} alt={item.name} />
                     </div>
                  </Link>

                  <div className={styles.content}>
                     <div className={styles.name}>{item.category}</div>
                     <div className={styles.name}>{item.name}</div>
                     {/* <div>
                        Qty: {"   "}
                        <Select
                           defaultValue={item.qty}
                           onChange={(qty) => dispatch(addCartItems({
                              id: item.id,
                              name: item.name,
                              image: item.image,
                              price: item.price,
                              countInStock: item.countInStock,
                              qty,
                           }))}
                        >
                           {[...Array(item.countInStock).keys()].map((x) => (
                              <Option key={x + 1} value={x + 1}>
                                 {x + 1}
                              </Option>
                           ))}
                        </Select>
                     </div> */}
                  </div>
                  <div>
                     {/* <div className={styles.price}>
                        $
                     </div> */}
                     <div className={styles.delete} onClick={() => dispatch(removeCartItems(item.id))}>
                        <DeleteOutlined
                           style={{ fontSize: "15px", color: "black" }} />
                     </div>
                  </div>
               </li>
            ))
         )}
         <div className={styles.wrap}>
            Total
            <div className={styles.totalPrice}>{qty}</div>
         </div>
         <Button
            className={styles.btn}
            type="primary"
            onClick={checkoutHandler}
         >
            <HeartFilled
               style={{ fontSize: "20px", color: "white" }}
            />
            <span style={{ marginLeft: 5,  fontFamily: "Cubic" }}>save</span>
         </Button>
      </Modal>
   );
}
