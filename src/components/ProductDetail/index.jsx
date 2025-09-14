import { useState } from "react";
// import { Row, Col, Select } from "antd";
import AddToBasket from "../AddToBasket"
import styles from "./productdetail.module.css"
import 'bootstrap/dist/css/bootstrap.min.css';
// const { Option } = Select;

function ProductDetail({ music }) {
   // const [qty, setQty] = useState(product.countInStock > 0 ? 1 : 0);
console.log(music);
   return (
      <div className={`container-fluid ${styles.tt}`} style={{ paddingLeft: "0", paddingRight: "0" }}>
         <div class="row"
            style={{ justifyContent: 'center', paddingTop: "6rem", marginLeft: "0", marginRight: "0" }}
         >

            <div class="col-lg-6">
               <img
                  alt={music.name}
                  className={styles.image}
                  src={music.image}
               />
               <div class="row" style={{ display: "flex", marginLeft: "0", marginRight: "0" }}>
                  <div class="coi-lg-3" style={{ padding: "0" }}>
                     <div className={styles.info} >
                        <div style={{ display: "flex"}}>
                           <h2 className={styles.category} >
                              {music.category}
                           </h2>
                           <h1 className={styles.name} >
                              {music.name}
                           </h1>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div class="col-lg-3" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
               <div className={styles.title}>
                  <h3>Lyrics</h3>
               </div>
               <div className={styles.lyric}>
                  {music.lyrics.map((str) =>
                     <p key={str} style={{ padding: "0 1.5rem 0.5rem 1.5rem", margin: "0" }}>
                        {str}
                     </p>
                  )}
               </div>
               <audio controls style={{ width: "80%", height: "2rem", marginTop: "4.5rem" }}>
                  <source src={music.audio} type="audio/mpeg" />
               </audio>
            </div>
         </div>
         <div class="row" style={{display: "flex",justifyContent:"center", alignItems: "center"}}>
         <div class="coi-lg-6" style={{display: "flex",justifyContent:"center", alignItems: "center"}}>
                     <div className={styles.wrap}>
                        {/* <div className={styles.qty}>
                        Qty: {"   "}
                        <Select
                           defaultValue={qty}
                           key={qty}
                           className={styles.selectStyle}
                           onChange={val => setQty(val)}
                        >
                           {[...Array(product.countInStock).keys()].map((x) => (
                              <Option key={x + 1} value={x + 1}>
                                 {x + 1}
                              </Option>
                           ))}
                        </Select>
                     </div> */}

                        {/* <p className={styles.qty}>
                        Total Price: {product.price * qty}
                     </p> */}
                        <AddToBasket product={music} qty={1} />
                     </div>

                  </div>
         </div>
      </div>
   );
}

export default ProductDetail;