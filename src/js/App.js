/**
 * Created by aagonzal on 8/9/2018.
 */

import React  from "react";
import Button from "./Button"
import Table  from "./table/Table"
import styles from "../css/styles.css"

import {PropertyContext}  from "./provider/PropertyProvider"
import {getPropertyFile, loginToGit, getFileFromGit} from './utils/APIUtil'

import {SignInForm}      from './signIn/SignInForm'
import {GitSelector}     from './repoSelector/GitSelector'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
      reponame: '',
      filename: '',
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
    if(e.target.name == 'password')
      this.setState({password: e.target.value});
    if(e.target.name == 'reponame')
      this.setState({reponame: e.target.value});
    if(e.target.name == 'filename')
      this.setState({filename: e.target.value});

  }

  handleSubmit(e){
    console.log("Submitting form");
    // loginToGit(this.state.username, this.state.password);
    getFileFromGit(this.state.username, this.state.reponame, this.state.filename)
      .then(response =>
        this.setState({
          properties: response
        })
      )
      .catch(err => console.log("fatal", err));
    e.preventDefault();
  }


  render(){
    return(
  <div className={"container " + styles.mainContainer}>
      <div className={styles.docHeader}>
        <h1 className={styles.docHeaderText}>React Context - Property POC</h1>
      </div>
      <div className={styles.outlineBlock + " row"} >
        <h4 className={styles.exampleHeading}>Properties - with state feeding ReactContext</h4>
        <PropertyContext.Provider value={this.state}>
            <Table/>
            <Button handleClick={this.handleClick.bind(this)}
                    text="Homepage"/>
        </PropertyContext.Provider>
      </div>

      <div className={styles.outlineBlock + " row"} >
        <h4 className={styles.exampleHeading}>Properties - without state feeding ReactContext</h4>

        <Table/>
        </div>

      <div className={styles.outlineBlock + " row"} >
        <h4 className={styles.exampleHeading}>Login to github to load repos via your user (future implementation)</h4>
        <SignInForm handleSubmit={this.handleSubmit.bind(this)}
                    handleChange={this.handleChange.bind(this)}/>
      </div>

     <div className={styles.outlineBlock + " row"} >
       <h4 className={styles.exampleHeading}>Provide Git username, reponame, & filename you wish to load properties from</h4>
       <GitSelector handleChange={this.handleChange.bind(this)}
                   handleSubmit={this.handleSubmit.bind(this)}/>
      </div>
    </div>
    );
  }

}

export default App;