/**
 * Created by aagonzal on 8/9/2018.
 */

import React from 'react';
import "../css/styles.css"

const Button = (props) => {
  return (
      <button className="btn btn-primary" onClick={() => props.handleClick()}>
        Retrieve Mock {props.text} properties
      </button>
  )

}


export default Button;

