import React, { Component } from 'react';
import TaskItem from './TaskItem';

export class TaskList extends Component {

  constructor(props){
    super(props);
    this.state ={
      filterName: '',
      filterStatus: -1 // all : -1, active : 1, deactive : 0
    }
  }

  onChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    this.props.onFilter(name === 'fifterName' ? value : this.state.filterName, name === 'filterStatus' ? value : this.statefilterStatus,)
    this.setState({
      [name] : value
    });
  }

    render() {
        var { taskslist } = this.props;
        var { filterName, filterStatus } = this.state;
        var elmTasks = taskslist.map((task, index) => {
          return <TaskItem  
                    key={task.id} 
                    index={index} 
                    task={task} 
                    onUpdateStatusTaskList={this.props.onUpdateStatusApp}
                    onDeleteTaskList = { this.props.onDeleteApp}
                    onUpdateTaskList = {this.props.onUpdateApp}
                    />;
        });
        
        return (
            <div>
                <table className="table table-bordered table-hover">
                    <thead>
                      <tr className="table-success">
                        <th scope="col">STT</th>
                        <th scope="col">Tên</th>
                        <th scope="col">Trạng thái</th>
                        <th scope="col">Hành động</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row"></th>
                        <td>
                            <input 
                                type="text"
                                className="form-control"
                                name="filterName"
                                value={filterName}
                                onChange={this.onChange}
                            />
                        </td>
                        <td>
                            <select
                              className="form-control"
                              name="filterStatus"
                              value={filterStatus}
                                onChange={this.onChange}
                            >
                                <option value={-1}>Tất cả</option>
                                <option value={0}>Ẩn</option>
                                <option value={1}>Kích hoạt</option>
                            </select>
                        </td>
                        <td></td>
                      </tr>
                          {/* <TaskItem /> */}
                          { elmTasks }
                          
                    </tbody>
                  </table>
            </div>
        );
    }
}

export default TaskList;
