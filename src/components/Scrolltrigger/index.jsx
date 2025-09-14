import styles from'./scrolltrigger.module.css';
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
  cubicBezier
} from "framer-motion";

function useParallax( value = MotionValue(0), distance ) {
  return useTransform(value, [0, 1], [-distance, distance],);
}

function Image({ banner }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 500);

  return (
    <div className={styles.bag}>
      <div ref={ref}>
        <img className={styles.photo} src={banner.image} alt="" />
      </div>
      <motion.h2 className={styles.title} style={{ y }}>{banner.name}</motion.h2>
    </div>
  );
}

export default function App({ banners }) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  return (
    <>
    <motion.div className={styles.progress} style={{ scaleX }} />
      {banners.map((banner) => (
        <Image banner={banner} />
      ))}
      {/* <motion.div className="progress" style={{ scaleX }} /> */}
    </>
  );
}
