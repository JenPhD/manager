import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import { employeesFetch } from '../actions';
import ListItem from './ListItem';


class EmployeeList extends Component {
  componentWillMount() {
    this.props.employeesFetch();

    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    //nextProps are the next set of props that this component
    //will be rendered with
    //this.props is still the old set of props

    this.createDataSource(nextProps);
  }

  createDataSource({ employees }) {
    //ds = datasource
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    //rows expect an array, not object returned from firebase
    //need to convert using lodash in mapStatetoProps below
    this.dataSource = ds.cloneWithRows(employees);
  }

  renderRow(employee) {
    return <ListItem employee={employee} />
  }

  render() {
    console.log(this.props);
    return (
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow}
        />
    );
  }
}

const mapStateToProps = state => {
  //using lodash to convert emplyees from object to array
  //val is the employee model, uid is the key or unique id
  const employees = _.map(state.employees, (val, uid) => {
    //push in all the values and return id, map puts into array
    return { ...val, uid };
  });

  return { employees };
};

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);