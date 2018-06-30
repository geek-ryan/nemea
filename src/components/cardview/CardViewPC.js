import React, { Component } from 'react';
import { Icon, Modal } from 'antd';

import ProjectCardUnitPC from './ProjectCardUnitPC';

<<<<<<< HEAD
=======
import '../../../node_modules/antd/dist/antd.css';

>>>>>>> 5dcca9d36e00e39415376588ef13dbb164552312
class CardViewPC extends Component {
  static defaultProps = {
    teamId: 1,
    userId: 1,
  };

  state = {
    visible: false,
    body: '',
  };

  handleChange = e => {
    this.setState({ body: e.target.value });
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

  // modal project -------------------------------

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    this.handleAddProject(this.state.body);
    this.setState({
      visible: false,
    });
  };
  handleCancel = e => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <React.Fragment>
        {this.props.projectState.projects.map(project => (
          <ProjectCardUnitPC
            key={project.id}
            {...this.props}
            project={project}
          />
        ))}

        <div onClick={this.showModal}>
          <Icon type="plus" /> Add New Project
        </div>
        <Modal
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <input
            value={this.state.body}
            onChange={this.handleChange}
            placeholder="project title"
          />
        </Modal>
      </React.Fragment>
    );
  }
}

export default CardViewPC;
