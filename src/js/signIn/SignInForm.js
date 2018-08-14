/**
 * Created by aagonzal on 8/13/2018.
 */
import React from 'react'
import {SignInField} from './SignInField'

export class SignInForm extends React.Component {

  constructor(props){
    super(props)
  }


  render(){
    return(
      <form className="form-inline">
        <div className="form-group">
          <SignInField fieldName="username"
                       handleChange={this.props.handleChange}/>
          <SignInField fieldName="password"
                       handleChange={this.props.handleChange}/>
          <SignInField fieldName="submit"
                       handleSubmit={this.props.handleSubmit}/>
        </div>
      </form>
    )
  }
}