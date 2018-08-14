/**
 * Created by aagonzal on 8/14/2018.
 */
import React from 'react';
import {GitSelectorField } from './GitSelectorField'

export class GitSelector extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <React.Fragment>
        <GitSelectorField
          fieldName="username"
          handleChange={this.props.handleChange}/>
        <GitSelectorField
          fieldName="reponame"
          handleChange={this.props.handleChange}/>
        <GitSelectorField
          fieldName="filename"
          handleChange={this.props.handleChange}/>
        <GitSelectorField
          fieldName="submit"
          handleSubmit={this.props.handleSubmit}/>

      </React.Fragment>
    )

  }
}