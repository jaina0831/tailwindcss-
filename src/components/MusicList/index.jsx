import { Row, Col } from "antd";
import MusicItem from "../MusicItem";
import Link from "../Link";
import styles from './musiclist.module.css'

export default function ProductList({ products }) {
  return (
    <Row style={{ justifyContent: "center" }}>
      <Row
        style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Col
          sm={{ span: 24 }}
          lg={{ span: 24 }}
          xl={{ span: 24 }}
          xxl={{ span: 24 }}>
          <Link to="/">
            <h1 className={styles.headerTitle}>
              Music
            </h1>
          </Link>
          <hr className={styles.hrHeaderLine} />

        </Col>
      </Row>
      <div className="container" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
        <Row gutter={[0, 32]} style={{display: "flex", justifyContent: "center", alignItems: "center" }}>
          {products.map(product => (
            <Col
              style={{ width:"135px",display: "flex", justifyContent: "center", alignItems: "center" }}
              xs={{ span: 24 }}
              sm={{ span: 24 }}
              md={{ span: 12 }}
              lg={{ span: 8 }}
              xl={{ span: 8 }}
              xxl={{ span: 8 }}

            >
              <MusicItem product={product} style={{}} />
            </Col>
          ))}

        </Row>

      </div>


    </Row>

  );
}

