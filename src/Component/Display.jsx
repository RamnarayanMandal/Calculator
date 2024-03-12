import React from 'react'
import style from './Display.module.css';
const Display = ({displayValue}) => {
  return (
    <div className={style.DispContainer}>
       <input  type="text" className="form-control pt-4 py-4 text-center fs-1 mt-4 fw-semibold" aria-describedby="basic-addon1" value={displayValue}/>
    </div>
  )
}

export default Display
