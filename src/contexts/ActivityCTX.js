import React, { Component } from 'react';

const { Provider, Consumer } = React.createContext();

class ActivityProvider extends Component {
  state = {
    activities: [
      {
        id: 1,
        taskId: 1,
        userId: 1,
        body: '완료된 작업 별 정렬 구현중',
        logDate: '2018.06.01 2:41:48',
      },
      {
        id: 2,
        taskId: 2,
        userId: 2,
        body: '완료된 작',
        logDate: '2018.06.01 2:41:48',
      },
      {
        id: 3,
        taskId: 3,
        userId: 3,
        body: '완료 구현중',
        logDate: '2018.06.01 2:41:48',
      },
      {
        id: 4,
        taskId: 4,
        userId: 1,
        body: '완료된 작 구현중',
        logDate: '2018.06.01 2:41:48',
      },
      {
        id: 5,
        taskId: 5,
        userId: 2,
        body: '완료된 작업 별 ',
        logDate: '2018.06.01 2:41:48',
      },
    ],
  };

  render() {
    const value = this.state;
    return <Provider value={value}>{this.props.children}</Provider>;
  }
}

export { ActivityProvider, Consumer as ActivityConsumer };