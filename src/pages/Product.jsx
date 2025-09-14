import { useMatch, useParams } from 'react-router-dom';
import { theme } from 'antd';
import { Helmet } from "react-helmet-async"
import Header from "../components/Header"
import Footer from "../components/Footer"
import ProductDetail from "../components/ProductDetail";
import products from "../json/products.json";
import music2 from "../json/music2.json";
import { useEffect } from "react";

function Product() {
   const {
      token: { colorBgBase, colorTextBase },
   } = theme.useToken();
   const { productId } = useParams();
   const product = products.find(
      (y) => y.id === productId
   );
   const { musicId } = useParams();
   const music = music2.find(
       (x) => x.id === musicId
   );
   useEffect(()=>{
      window.scrollTo(0,-10);
    },[])
   return (
      
      <div className="mainLayout">
           
         <Helmet>
            <title>Music</title>
            <style>{`
               body { 
                  background-color: ${colorBgBase}; 
                  color: ${colorTextBase}
               }
            `}</style>
         </Helmet>
         <Header
            className="layoutHeader"
            title="Product Detail"
            slogan="An example made by Vite."
         />

         {
            productId==null  ? ( <ProductDetail music={music}/>):(<ProductDetail music={product}/>)
         }
           
         <Footer className="layoutFooter" />
      </div>
   );
}

export default Product;
