import styles from "./loading.module.css";
import { Icon } from "@iconify/react";

function Loading() {
  return (
    <div className={styles.iconeLoading}>
      <Icon icon="line-md:loading-alt-loop" style={{ color: "#fff"}} />
    </div>
  );
}

export default Loading;
