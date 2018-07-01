import React, { Component } from 'react';
import CardViewPC from '../components/cardview/CardViewPC';

import withProjectCTX from '../hocs/withProjectCTX';

class CardViewCC extends Component {
  static defaultProps = {
    teamId: 1,
  };

  state = {
    visible: false,
    body: '',
  };

  newProjectTitleChange = e => {
    this.setState({ body: e.target.value });
  };

  newProjectShowModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleAddProject = body => {
    const obj = {
      title: body,
      userId: this.props.userId,
      teamId: this.props.teamId,
      subtitle: 'test',
    };
    this.props.projectFunc.Create(obj);
    this.setState({ body: '' });
  };
  newProjectOk = e => {
    this.handleAddProject(this.state.body);
    this.setState({
      visible: false,
    });
  };

  newProjectCancle = e => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <CardViewPC
        newProjectModal={this.state}
        newProjectShowModal={this.newProjectShowModal}
        newProjectCancle={this.newProjectCancle}
        newProjectOk={this.newProjectOk}
        newProjectTitleChange={this.newProjectTitleChange}
        {...this.props}
      />
    );
  }
}

export default withProjectCTX(CardViewCC);
