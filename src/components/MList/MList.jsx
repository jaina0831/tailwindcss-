import { Avatar, List } from 'antd';
import Link from '../Link';
import React, { useState } from 'react';
import styles from './MList.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from "antd";
import AddToBasket4 from "../AddToBasket4";

export default function MList({ music2 }) {
  const [loading, setLoading] = useState(false);
  return (
    <Row style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Row
        style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Col
          style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}
          sm={{ span: 24 }}
          lg={{ span: 24 }}
          xl={{ span: 24 }}
          xxl={{ span: 24 }}
        >
          <div className={styles.titlebox}>
            <h1 className={styles.headerTitle}>
              Music
            </h1>
            <hr className={styles.hrHeaderLine} />
          </div>
        </Col>
      </Row>
      <Col
        style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
        sm={{ span: 24 }}
        lg={{ span: 24 }}
        xl={{ span: 24 }}
        xxl={{ span: 24 }}

      >
        <div className={styles.element}>
          <List
            class="container"
            itemLayout="horizotal"
            loading={loading}>
           
            {music2.map(music => (
              <List.Item>
                <div class="row" style={{minHeight:"6rem", display: 'flex', justifyContent: "center",alignItems:"center"}}>
                <div className="col-xs-3 col-md-3 col-lg-3 bag4" style={{ display: 'flex',justifyContent:"center",alignItems:"center" ,fontFamily: "Cubic" }}>
                  <h3 style={{marginRight:"1rem"}}>{music.number}</h3>
                  <Link to={`music/id/${music.id}`}>
                    <img src={music.image} style={{ width: '50px', height: '60px', objectFit: "cover", objectPosition: "center" }} />
                  </Link>
                </div>
                <div className="col-xs-3 col-md-3 col-lg-3 bag4" style={{ display: 'flex',justifyContent:"center",alignItems:"center" ,flexDirection: 'column', textAlign: "center", fontFamily: "Cubic" }}>
                  <p style={{ color: 'rgb(244, 144, 61)',margin:"0" }}>{music.name}</p>
                  <p style={{ margin:"0" }}>{music.category}</p>
                </div>
                <div className="col-xs-3 col-md-3 col-lg-4 bag4" style={{ textAlign: "center" }}>
                  <audio controls style={{ width: "85%", height: "2rem" }}>
                    <source src={music.audio} type="audio/mpeg" />
                  </audio>
                </div>
                <div className="col-xs-3 col-md-3 col-lg-2 bag4" style={{ textAlign: "center" }}>
                  <AddToBasket4 music={music} qty={1} />
                </div>
                </div>
                
              </List.Item>

            ))}


          </List>
        </div>

      </Col>




    </Row>
  );
}
