import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./multivideo.module.css";
import './multivideo.css';
import AddToBasket3 from "../AddToBasket3";

export default function MultiVideo({ videos, videos1 }) {
  return (
    <div className={styles.center}>
      <div className="container" style={{ paddingLeft: "0", paddingRight: "0", backgroundColor: "black" }}>
        <div class="row">
          <div class="col">
            <Carousel interval={null}>
              <Carousel.Item>
                <div className="row">
                  {videos.map(video => (
                    <div className="col-lg-3 col-md-6">
                      <div className={styles.pic}>
                        <img
                          className={styles.imgs}
                          src={video.image}
                          alt="pic1"
                        />
                        <div className={styles.info}>
                          <p>{video.name}</p>
                          <AddToBasket3 video={video} qty={1} />
                        </div>
                      </div>

                    </div>
                  ))}
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="row">
                  {videos1.map(video => (
                    <div className="col-lg-3 col-md-6">
                      <div className={styles.pic}>
                        <img
                          className={styles.imgs}
                          src={video.image}
                          alt="pic1"
                        />
                        <div className={styles.info}>
                          <p>{video.name}</p>
                          <AddToBasket3 video={video} qty={1} />
                        </div>
                      </div>

                    </div>
                  ))}
                </div>

              </Carousel.Item>
            </Carousel>

          </div>
        </div>


      </div>
    </div>

  );
}