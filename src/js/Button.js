/**
 * Created by aagonzal on 8/9/2018.
 */

import React from 'react';
import "../css/styles.css"

const Button = (props) => {
  return (
      <button className="btn primaryButton" onClick={() => props.handleClick()}>
        Retrieve {props.text} properties
      </button>
  )

}


export default Button;

