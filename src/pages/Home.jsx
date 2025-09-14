import { useParams } from 'react-router-dom';
import { Carousel, theme } from 'antd';
import { Helmet } from "react-helmet-async"
import Header from "../components/Header"
import Footer from "../components/Footer"
import MusicList from "../components/MusicList";
import products from "../json/products.json";
import videos11 from "../json/videos1-1.json"
import videos12 from "../json/videos1-2.json"
import videos21 from "../json/videos2-1.json"
import videos22 from "../json/videos2-2.json"
import videos31 from "../json/videos3-1.json"
import videos32 from "../json/videos3-2.json"
import Carouseldemo from '../components/Carousel';
import VideoList from '../components/VideoList';
import Newnews from '../components/Newnews';
import React, { useState, useEffect } from "react";
import Loading from '../components/Loading/Loading';
// import { useProducts } from '../react-query';


function Home() {
  const [isLoading, setIsLoading] = useState(true);
  // const { data} = useProducts();
  // const products = data || [{id:1},{id:2},{id:3},{id:4},{id:5},{id:6}];

  useEffect(() => {
    // Simulate data loading
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  const {
    token: { colorBgBase, colorTextBase },
  } = theme.useToken();
  const { categoryName } = useParams();
  const _products = !categoryName
    ? products
    : products.filter(
      x => x?.category.toUpperCase() === categoryName.toUpperCase()
    );

  const title = !categoryName
    ? "Home"
    : _products[0]?.category;


  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="mainLayout">
          <Helmet>
            <title>{title}</title>
            <style>{`
              body { 
                background-color: ${colorBgBase}; 
                color: ${colorTextBase}
              }
            `}</style>
          </Helmet>
          <Header
            className="layoutHeader"
            title={title}
            slogan="An example made by Vite."
          />
          <Carouseldemo />
          <Newnews />
          <VideoList videos11={videos11} videos12={videos12} videos21={videos21} videos22={videos22} videos31={videos31} videos32={videos32} />
          <div className="layoutCOntent container">
            <MusicList products={_products} />
          </div>

          <Footer className="layoutFooter" />
        </div>
      )}
    </div>
  );
}

export default Home;
