/**
 * Created by aagonzal on 8/14/2018.
 */
import React from 'react'
import styles from '../../css/styles.css'

export const GitSelectorField = (props) =>{
  if(props.fieldName == "submit")
    return renderSubmitButton(props)
  else
    return renderSelectorField(props)

}

const renderSubmitButton = (props) => {
  return(
    <input type="button"
           className={styles.fieldItem + " btn btn-default"}
           value="Submit"
           onClick={(e) => {props.handleSubmit(e)}}/>
  )
}

const renderSelectorField = (props) => {
  return (
    <label for={props.fieldName}>
      {props.fieldName}:
      <input
        id={props.fieldName}
        className={styles.fieldItem + " form-control"}
        name={props.fieldName}
        type="text"
        onChange={(e) => props.handleChange(e)}/>
    </label>
  )
}