import React, { Component } from 'react';
import classNames from 'classnames';
import { Modal, Switch, Button, Icon, DatePicker } from 'antd';
import moment from 'moment';

import EditTextareaPC from '../utils/EditTextareaPC';
import MemberGroupPC from '../utils/MemberGroupPC';
import LabelPC from './LabelPC';
import ActivityPC from './ActivityPC';
// import ActivityCC from '../../containers/ActivityCC';
// import LabelSearchBar from '../utils/LabelSearchBar';
// import UserSearchBar from '../utils/UserSearchBar';

class TaskModalPC extends Component {
  static defaultProps = {
    taskMembers: [],
    task: {
      id: 0,
      title: '',
      body: '',
      complete: false,
      startDate: '',
      dueDate: '',
    },
    taskFunc: {
      Update: () => {},
    },
    taskModalStartDateChange: () => {},
    taskModalDueDateChange: () => {},
    taskModalCompleteConfirm: () => {},
    taskModalDeleteConfirm: () => {},
    taskOk: () => {},
    taskCancle: () => {},
  };
  render() {
    const {
      taskMembers,
      task,
      taskFunc,
      taskModalCompleteConfirm,
      taskModalDeleteConfirm,
      // taskModalStartDateChange,
      // taskModalDueDateChange,
      taskOk,
      taskCancel,
    } = this.props;
    const modalTitle = (
      <div className="task-modal-top">
        <div className="task-modal__complete">
          <Switch
            checkedChildren={<Icon type="check" />}
            unCheckedChildren={<Icon type="ellipsis" />}
            defaultChecked={task.complete}
            onClick={taskModalCompleteConfirm}
          />
          <span
            className={classNames(
              'complete-label',
              task.complete && 'complete-label--completed'
            )}
          >
            {task.complete ? 'completed' : 'uncomplete'}
          </span>
        </div>
        <Button
          className="task-modal__delete-button"
          onClick={taskModalDeleteConfirm}
          shape="circle"
          type="danger"
          icon="delete"
          title="delete this task"
        />
      </div>
    );
    const dateFormat = 'YYYY.MM.DD';
    return (
      <Modal
        visible={true}
        okText="Save"
        onOk={taskOk}
        onCancel={taskCancel}
        title={modalTitle}
        className="task-modal"
      >
        <div className="task-modal__title">
          <h2 className="modal-label">Title</h2>
          <EditTextareaPC
            body={task.title}
            keyType={'title'}
            datatype={'task'}
            editfunc={taskFunc.Update}
            {...this.props}
          />
        </div>
        <div className="task-modal__body">
          <h2 className="modal-label">Description</h2>
          <EditTextareaPC
            body={task.body}
            keyType={'body'}
            datatype={'task'}
            editfunc={taskFunc.Update}
            {...this.props}
          />
        </div>
        <div className="task-modal__date">
          <h2 className="modal-label">Due Date</h2>
          <DatePicker.RangePicker
            // defaultValue={[
            value={
              task.startDate && [
                moment(task.startDate, dateFormat),
                moment(task.dueDate, dateFormat),
              ]
            }
            format={dateFormat}
          />
        </div>
        <div className="task-modal__members">
          <h2 className="modal-label">Members</h2>
          <div className="task-modal__members-groups">
            <MemberGroupPC members={taskMembers} useRemove={true} />
          </div>
        </div>
        <div className="task-modal__labels">
          <h2 className="modal-label">Labels</h2>
          <LabelPC />
        </div>
        <div clasName="task-modal__activities">
          <h2 className="modal-label">Activity</h2>
          {/* <ActivityPC {...this.props} /> */}
          <ActivityPC />
        </div>
        {/* <UserSearchBar taskId={task.id} {...this.props} /> */}
        {/* <LabelSearchBar taskId={task.id} {...this.props} /> */}
        {/* <div>
          start date:
          <DatePicker
            onChange={taskModalStartDateChange}
            value={moment(task.startDate, 'YYYY.MM.DD')}
          />
        </div>
        <div>
          due date:
          <DatePicker
            onChange={taskModalDueDateChange}
            value={moment(task.dueDate, 'YYYY.MM.DD')}
          />
        </div> */}
      </Modal>
    );
  }
}

export default TaskModalPC;
