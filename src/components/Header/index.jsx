import { useState } from "react";
import NavBar from "../NavBar";
import styles from "./header.module.css";
import HamburgerMenu from "../HamburgerMenu"
import CartSummary from "../CartSummary";
import UserInfo from "../UserInfo";

export default function Header() {
    const [isOnTouch, setIsOnTouch] = useState(false);

    return (
        <div className="container1" style={{ backgroundColor: "#000000" }}>
            <div className={styles.header}>
                <NavBar open={isOnTouch} onClose={() => setIsOnTouch(false)} />
                <div className={styles.wrap}>
                    <HamburgerMenu
                        onClick={() => setIsOnTouch(!isOnTouch)}
                        isOnTouch={isOnTouch}
                    />
                    <div className={styles.iconWrap}>
                        <UserInfo className={styles.hideInMobile} />
                        <CartSummary />
                    </div>
                </div>
            </div>
        </div>
    );
}

