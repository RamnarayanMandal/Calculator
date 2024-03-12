import React from 'react';
import style from './Button.module.css';

function Button(props) {
    let buttons = ['C', '1', '2', '+', '3', '4', '-', '5', '6', '*', '7', '8', '/', '=', '9', '0', '.'];

    return (
        <>
            {buttons.map((buttonLabel, index) => (
                <button key={index} type="button" className={style.button} onClick={() => props.onClickTextValues(buttonLabel)}>
                    {buttonLabel}
                </button>
            ))}
        </>
    );
}

export { Button };
