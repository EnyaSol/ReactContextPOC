/**
 * Created by aagonzal on 8/9/2018.
 */

import React from "react";
import Button from "./Button"
import Table from "./table/Table"

import {PropertyContext} from "./provider/PropertyProvider"
import {getPropertyFile} from './utils/APIUtil'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      properties: [
        {"Title 1" : "Aaron's test case 1"},
        {"Title 2" : "Aaron's test case 2"},
        {"Title 3" : "Aaron's test case 3"}
      ]
    }
  }


  handleClick(){
    getPropertyFile("Homepage").then((res) =>{
        this.setState({properties: res })
      }
    )
  }

  render(){
    return(
      <React.Fragment>
      <PropertyContext.Provider value={this.state}>
          <Table/>
          <Button handleClick = {this.handleClick.bind(this)} text="Homepage"/>
      </PropertyContext.Provider>

      <Table/>
      <Button handleClick = {this.handleClick.bind(this)} text="Reader"/>
      </React.Fragment>
    );
  }

}

export default App;