import styles from './footer.module.css';

export default function Footer() {
    return (
            <div className="container-fluid" style={{paddingLeft:"0",paddingRight:"0"}}>
                <img className={styles.citys} src="/images/city.png"/>
                <footer className={styles.footer}>
                    <div className={styles.firstfooterbox}>
                        <ul className={styles.firstfooterlist}>
                            <li className={styles.firstfooterlistitems}>
                                <a className={styles.firstfooterlistitemslink} href="#">
                                    <img className={styles.firstfooterimg} src="/images/youtube.png" alt="youtube" />
                                </a>
                            </li>
                            <li className={styles.firstfooterlistitems}>
                                <a className={styles.firstfooterlistitemslink} href="#">
                                    <img className={styles.firstfooterimg} src="/images/facebook.png" alt="facebook" />
                                </a>
                            </li>
                            <li className={styles.firstfooterlistitems}>
                                <a className={styles.firstfooterlistitemslink} href="#">
                                    <img className={styles.firstfooterimg} src="/images/ins.png" alt="ins" />
                                </a>
                            </li>
                        </ul>
                    </div>
                            <div className={styles.footerbox}>
                                <ul className={styles.footerlist}>
                                    <li className={styles.footerlistitems}>
                                        <a className={styles.footerlistitemslink} href="#">說明中心</a>
                                    </li>
                                    <li className={styles.footerlistitems}>
                                        <a className={styles.footerlistitemslink} href="#">使用條件</a>
                                    </li>
                                    <li className={styles.footerlistitems}>
                                        <a className={styles.footerlistitemslink} href="#">法律聲明</a>
                                    </li>
                                    <li className={styles.footerlistitems}>
                                        <a className={styles.footerlistitemslink} href="#">連絡我們</a>
                                    </li>
                                </ul>
                            </div>
                   
                            <div className={styles.footerbox}>
                                <ul className={styles.footerlist}>
                                    <li className={styles.footerlistitems}>
                                        <a className={styles.footerlistitemslink} href="#">隱私權</a>
                                    </li>
                                    <li className={styles.footerlistitems}>
                                        <a className={styles.footerlistitemslink} href="#">訂閱協議</a>
                                    </li>
                                    <li className={styles.footerlistitems}>
                                        <a className={styles.footerlistitemslink} href="#">媒體資訊</a>
                                    </li>
                                    <li className={styles.footerlistitems}>
                                        <a className={styles.footerlistitemslink} href="#">投資人關係</a>
                                    </li>
                                </ul>
                            </div>

        <div className={styles.footerbelow}>
            <div className={styles.container}>
                <h6>
                    &copy; Copyright All rights reserved.
                </h6>
            </div>
        </div>
  </footer >
  </div >
 
    );
}