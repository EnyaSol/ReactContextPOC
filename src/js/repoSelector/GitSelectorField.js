/**
 * Created by aagonzal on 8/14/2018.
 */
import React from 'react'

export const GitSelectorField = (props) =>{
  if(props.fieldName == "submit")
    return renderSubmitButton(props)
  else
    return renderSelectorField(props)

}

const renderSubmitButton = (props) => {
  return(
    <input type="button"
           value="Submit"
           onClick={(e) => {props.handleSubmit(e)}}/>
  )
}

const renderSelectorField = (props) => {
  return (
    <label>
      {props.fieldName}
      <input
        name={props.fieldName}
        type="text"
        onChange={(e) => props.handleChange(e)}/>
    </label>
  )
}