import React from 'react';
import styles from './CSSModule.module.scss';

const CSSModule = () => {
  return (
    <div className={`${styles.wrapper} ${styles.inverted}`} >
      안녕! 나는 <span className="something">CSSModule!</span>
      {console.log(styles)}
    </div>
  )
}
export default CSSModule;
