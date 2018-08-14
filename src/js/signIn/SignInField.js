/**
 * Created by aagonzal on 8/13/2018.
 */
import React from 'react'

export const SignInField = (props) =>{

  if(props.fieldName == 'submit')
    return renderSubmitButton(props)
  else
    return renderField(props)
}

const renderField = (props) => {
  return (   <label>
    {props.fieldName}
    <input
      name={props.fieldName}
      placeholder={props.fieldName}
      type={props.fieldName == "password" ? "password" : "text" }
      onChange={(e) => props.handleChange(e)}/>
  </label> )
}

const renderSubmitButton = (props) => {
  return(
    <input type="button"
           value="Submit"
           onClick={(e) => {props.handleSubmit(e)}}/>
  )
}
