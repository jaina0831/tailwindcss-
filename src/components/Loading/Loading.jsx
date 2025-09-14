import styles from './loading.module.css';
export default function Loading() {
    return (
        <div className={styles.b}>
            <div className={styles.spinner}>
                <div className={styles.cube1}></div>
                <div className={styles.cube2}></div>
            </div>
        </div>
    );
}