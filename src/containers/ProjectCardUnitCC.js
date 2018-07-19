import React, { Component } from 'react';

import withTaskCTX from '../hocs/withTaskCTX';
import withActivityCTX from '../hocs/withActivityCTX';

import ProjectCardUnitPC from '../components/cardview/ProjectCardUnitPC';

import { createTask } from '../actions';

class ProjectCardUnitCC extends Component {
  static defaultProps = {
    project: {
      id: 0, // 현재 프로젝트의 아이디
    },
    taskFunc: {
      Create: obj => {}, // 정보를 받아서 task를 생성하는 함수
    },
  };

  state = {
    visible: false,
    title: '',
  };

  // componentDidMount = () => {
  //   this.props.taskFunc.projectFilter(this.props.project.id);
  // };

  newTaskTitleChange = e => {
    this.setState({ title: e.target.value });
  };

  newTaskShowEditor = () => {
    this.setState({
      visible: true,
    });
  };

  // create new task
  newTaskOk = () => {
    // title이 있어야 전송한다.
    if (this.state.title) {
      const contents = {
        title: this.state.title,
        body: this.state.body,
        teamId: 1,
        projectId: this.props.project.id,
        complete: false,
      };
      this.props.dispatch(createTask(contents));
    }
    this.newTaskCancel();
  };

  newTaskCancel = () => {
    this.setState({
      visible: false,
      title: '',
      // body: '',
    });
  };

  render() {
    return (
      <ProjectCardUnitPC
        taskNew={this.state}
        newTaskTitleChange={this.newTaskTitleChange}
        newTaskbodyChange={this.newTaskbodyChange}
        newTaskShowEditor={this.newTaskShowEditor}
        newTaskOk={this.newTaskOk}
        newTaskCancel={this.newTaskCancel}
        {...this.props}
      />
    );
  }
}

export default withActivityCTX(ProjectCardUnitCC);
