/**
 * Created by aagonzal on 8/10/2018.
 */

import React from 'react';
import {PropertyContext} from '../provider/PropertyProvider'

const TableRow = () => {
  return(

      <PropertyContext.Consumer>
        {(context) => renderRows(context)}
      </PropertyContext.Consumer>

  )
}

function renderRows(context) {
  if(context && context["properties"]){
    return context["properties"].map((property, index) =>{
        return(
          <tr key={index}>
            <td>{Object.entries(property)[0][0]}</td>
            <td>{Object.entries(property)[0][1]}</td>
          </tr>);
      }
    )
  } else return ''

}
export default TableRow;