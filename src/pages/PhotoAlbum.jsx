import { useParams } from 'react-router-dom';
import { Carousel, theme } from 'antd';
import { Helmet } from "react-helmet-async"
import Header from "../components/Header"
import Footer from "../components/Footer"
import MList from '../components/MList/MList';
import products from "../json/products.json";
import videos11 from "../json/videos1-1.json"
import videos12 from "../json/videos1-2.json"
import videos21 from "../json/videos2-1.json"
import videos22 from "../json/videos2-2.json"
import videos41 from "../json/videos4-1.json"
import videos42 from "../json/videos4-2.json"
import music2 from "../json/music2.json"
import Carouseldemo from '../components/Carousel';
import Scrolltrigger from '../components/Scrolltrigger';
import banners from "../json/banner.json"
import VideoList2 from '../components/VideoList2';
import Person from '../components/Person'
import React, { useState, useEffect } from "react";
import Loading from '../components/Loading/Loading';
import MotionDiv from "../components/MotionDiv"


function PhotoAlbum() {
  const [isLoading, setIsLoading] = useState(true);

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
    ? "Photoalbum"
    : _products[0]?.category;

  return (
    <div>
      {/* {isLoading ? (
        <Loading />
      ) : ( */}
        <MotionDiv className="mainLayout">
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
          <Scrolltrigger banners={banners} />
          <VideoList2 videos11={videos11} videos12={videos12} videos21={videos21} videos22={videos22} videos41={videos41} videos42={videos42} />
          <Person />
          <MList music2={music2} />

          <Footer className="layoutFooter" />
        </MotionDiv>
      {/* )} */}
    </div>
  );
}

export default PhotoAlbum;