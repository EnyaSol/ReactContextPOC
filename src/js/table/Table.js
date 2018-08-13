/**
 * Created by aagonzal on 8/10/2018.
 */
import React from 'react'
import TableHeader from './TableHeader';
import TableRow from './TableRow'

export default class Table extends React.Component {


  render(){
    return (
        <table className="table">
          <TableHeader/>
          <tbody>
            <TableRow/>
          </tbody>
        </table>
    );
  }
}