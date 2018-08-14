/**
 * Created by aagonzal on 8/13/2018.
 */
import React from 'react'
import styles from '../../css/styles.css'

export const SignInField = (props) =>{

  if(props.fieldName == 'submit')
    return renderSubmitButton(props)
  else
    return renderField(props)
}

const renderField = (props) => {
  return (
    <label for={props.fieldname} className={styles.siFieldItem}>
    {props.fieldName}:
    <input
      name={props.fieldName}
      className={styles.fieldItem + " form-control"}
      type={props.fieldName == "password" ? "password" : "text" }
      onChange={(e) => props.handleChange(e)}/>
  </label> )
}

const renderSubmitButton = (props) => {
  return(
    <input type="button"
           className={styles.fieldItem + " btn btn-default"}
           value="Submit"
           onClick={(e) => {props.handleSubmit(e)}}/>
  )
}
