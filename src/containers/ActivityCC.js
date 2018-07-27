import React, { Component } from 'react';

import ActivityPC from '../components/cardview/ActivityPC';

import { connect } from 'react-redux';
import { createActivity, deleteActivity } from '../actions';

const moment = require('moment');

class ActivityCC extends Component {
  state = {
    body: '',
  };

  handleChange = e => {
    this.setState({ body: e.target.value });
  };

  handleAddActivity = () => {
    const obj = {
      body: this.state.body,
      taskId: this.props.task.id,
      userId: this.props.userCurrent,
      logDate: moment(),
    };
    // this.props.activityFunc.Create(obj);
    this.props.dispatch(createActivity(obj));
    this.setState({ body: '' });
  };

  handleDeleteActivity = e => {
    const id = parseInt(e.target.value, 10);
    // const func = this.props.activityFunc.Delete;
    // func(id);
    this.props.dispatch(deleteActivity(id));
  };

  render() {
    return (
      <ActivityPC
        activeFormBody={this.state.body}
        handleChange={this.handleChange}
        handleAddActivity={this.handleAddActivity}
        handleDeleteActivity={this.handleDeleteActivity}
        {...this.props}
      />
    );
  }
}

const pullingUserId = state => {
  return { userCurrent: state.currentReducer.userId };
};

const pullingUsers = state => {
  return { users: state.users };
};

const pullingActivities = state => {
  const activities = state.activityReducer;
  const currentTask = state.currentReducer.taskId;
  const filtered = activities.filter(el => el.taskId === currentTask);
  return {
    activities: filtered.sort(
      (b, a) => moment(a.logDate).format('X') - moment(b.logDate).format('X')
    ),
  };
};

const combine = state => {
  const aaa = pullingUserId(state);
  const bbb = pullingActivities(state);
  const ccc = pullingUsers(state);
  return { ...aaa, ...bbb, ...ccc };
};

export default connect(combine)(ActivityCC);
