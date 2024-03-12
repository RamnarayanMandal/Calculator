import React from 'react';
import styles from './Container.module.css'; // Assuming Container.module.css is in the same directory

const Container = (props) => {
  return (
    <div className={styles.Container}>
      <div className={styles.SubContainer}>
        {props.children}
      </div>
    </div>
  );
}

export default Container;
