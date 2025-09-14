import Link from '../Link';
import styles from './musicitem.module.css';
import AddToBasket2 from "../AddToBasket2";

export default function MusicItem({ product }) {

   return (
      <div className={styles.item}>
         <Link to={`music/id/${product.id}`}>
            <img
               style={{ width: "20rem", height: "13rem",objectFit:"cover",objectPosition:"center" }}
               src={product.image}
               alt={product.name} />
         </Link>
         <div className={styles.info}>

            <div className={styles.more}>
               <AddToBasket2 product={product} qty={1} />
            </div>
            <h6 className={styles.category}>
               {product.category}
            </h6>
            <h6 className={styles.name}>
               {product.name}
            </h6>

            <audio controls style={{ width: "100%", height: "2rem" }}>
               <source src={product.audio} type="audio/mpeg" />
            </audio>
            <div className={styles.lyric} style={{ display: "none" }}>
               <p>
                  {product.lyrics}
               </p>
            </div>


         </div>
      </div>
   );
}
