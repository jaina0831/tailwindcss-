import Link from '../Link';
import React, { useState } from 'react';
import { Row, Col } from "antd";
import styles from "./title.module.css"

export default function Title({title}) {
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
              {title}
            </h1>
            <hr className={styles.hrHeaderLine} />
          </div>
        </Col>
      </Row>
    </Row>
  );
}