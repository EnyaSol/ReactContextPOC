/**
 * Created by aagonzal on 8/8/2018.
 */
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

class Index extends React.Component {

  render(){
    return(
      <App/>
    );
  }
};

ReactDOM.render(<Index/>, document.getElementById("app"));
