import NavLink from '../NavLink';
import { Drawer } from 'antd';
import styles from './navbar.module.css';

export default function NavBar({ open, onClose }) {

    const NavBarContent = () => (
        <>
            <NavLink to="/"
                className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
                <img className={styles.logo} src="/images/logo.png" alt="user" />
            </NavLink>
            <NavLink to="/login"
                className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
                會員
            </NavLink>
            <NavLink to="/photoalbum"
                className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
                影集
            </NavLink>
            <NavLink to="/movie"
                className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
                電影
            </NavLink>
        </>
    )

    return (
        <>
            <div className={styles.navBar}>
                <NavBarContent />
            </div>
            <div className={styles.square}></div>
            <Drawer 
                title="CATEGORY" 
                placement="left" 
                onClose={onClose} 
                open={open} 
            >
                <div className={styles.drawer}>
                    <NavBarContent />
                </div>
            </Drawer>
        </>

    );
}