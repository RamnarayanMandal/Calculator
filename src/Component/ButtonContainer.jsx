import React from 'react'
import style from './ButtonContainer.module.css';

const ButtonContainer = (props) => {
  return (
    <div className={style.ButtonContainer}>
        {props.children}
      </div>
  )
}

export default ButtonContainer
