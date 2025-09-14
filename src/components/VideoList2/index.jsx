import MultiVideo from "../MultiVideo"
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './videolist.module.css';

export default function VideoList({ videos11,videos12,videos21,videos22,videos41,videos42 }) {
    return (
        <div class="container-fluid" style={{ paddingLeft: "0", paddingRight: "0", paddingTop: "1rem", backgroundColor: "black" }}>
            <div class="row" style={{ marginRight: "0" }}>
              <div class="col-lg-12">
                <div className={styles.smalltitle}>
                  <h3>歐美熱播</h3>
                </div>
              </div>
            </div>
            <div class="row" style={{ marginRight: "0" }}>
                    <MultiVideo videos={videos11} videos1={videos12}/>
            </div>
            <div class="row" style={{ marginRight: "0" }}>
              <div class="col-lg-12">
                <div className={styles.smalltitle}>
                  <h3>韓日熱播</h3>
                </div>
              </div>
            </div>
            <div class="row" style={{ marginRight: "0" }}>
                    <MultiVideo videos={videos21} videos1={videos22}/>
            </div>
            <div class="row" style={{ marginRight: "0" }}>
              <div class="col-lg-12">
                <div className={styles.smalltitle}>
                  <h3>熱門動畫</h3>
                </div>
              </div>
            </div>
            <div class="row" style={{ marginRight: "0" }}>
                    <MultiVideo videos={videos41} videos1={videos42}/>
            </div>
            <div class="row" style={{ width: "100%", height: "50px", backgroundColor: "black" }}></div>
        </div>
    )

}