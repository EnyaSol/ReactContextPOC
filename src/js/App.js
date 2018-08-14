/**
 * Created by aagonzal on 8/9/2018.
 */

import React from "react";
import Button from "./Button"
import Table from "./table/Table"

import {PropertyContext} from "./provider/PropertyProvider"
import {getPropertyFile, loginToGit, getFileFromGit} from './utils/APIUtil'

import {SignInForm}      from './signIn/SignInForm'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
      isLoggedIn: false,
      properties: [
        {"Title 1" : "Aaron's test case 1"},
        {"Title 2" : "Aaron's test case 2"},
        {"Title 3" : "Aaron's test case 3"}
      ]
    }
  }


  handleClick(){
    getPropertyFile("Homepage")
      .then((res) =>{
        this.setState({properties: res })
      })
      .catch(err => console.log("fatal", err))
  }

  handleChange(e){

    if(e.target.name == 'username')
      this.setState({username: e.target.value});
    else
      this.setState({password: e.target.value});

  }

  handleSubmit(e){
    console.log("Submitting form");
    // loginToGit(this.state.username, this.state.password);
    getFileFromGit(this.state.username)
      .then(response => console.log(response))
      .catch(err => console.log("fatal", err));
    e.preventDefault();
  }


  render(){
    return(
      <React.Fragment>
      <PropertyContext.Provider value={this.state}>
          <Table/>
          <Button handleClick={this.handleClick.bind(this)}
                  text="Homepage"/>
      </PropertyContext.Provider>

      <Table/>
      <Button handleClick={this.handleClick.bind(this)}
              text="Reader"/>

      <SignInForm handleSubmit={this.handleSubmit.bind(this)}
                  handleChange={this.handleChange.bind(this)} />

      </React.Fragment>
    );
  }

}

export default App;