import React, { Component } from 'react';
import { Modal, Form, Input } from 'antd';
const FormItem = Form.Item;
class TeamModalPC extends Component {
  static defaultProps = {
    visible: false,
    title: '',
    onCancel: () => {},
    form: {},
  };
  componentDidMount() {
    this.props.form.setFieldsValue({
      name: this.props.name,
    });
  }

  handleChange = value => {
    this.props.form.setFieldsValue({
      name: value,
    });
  };

  handleSave = () => {
    const form = this.props.form;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }
      this.props.onSave(values);
    });
  };

  render() {
    const { visible, title, onCancel, form } = this.props;
    const { getFieldDecorator } = form;

    return (
      <Modal
        visible={visible}
        title={title}
        okText="Save"
        onCancel={onCancel}
        onOk={this.handleSave}
        width={320}
      >
        <Form layout="vertical">
          <FormItem label="Team name">
            {getFieldDecorator('name', {
              rules: [
                {
                  required: true,
                  message: 'Please input the team name!',
                },
              ],
              onChange: e => this.handleChange(e),
            })(<Input autocomplete="off" />)}
          </FormItem>
          {this.props.children}
        </Form>
      </Modal>
    );
  }
}

export default Form.create()(TeamModalPC);
