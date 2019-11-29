import React, { Component } from 'react';

export class TaskItem extends Component {
    OnUpdateStatus = () => {
       this.props.onUpdateStatusTaskList(this.props.task.id);
    }
    onDelete = () => {
        this.props.onDeleteTaskList(this.props.task.id);
    }
    onUpdate = () => {
        this.props.onUpdateTaskList(this.props.task.id);
    }

    render() {
        var {task, index} = this.props;

        return (
                <tr>
                    <th scope="row">{index + 1}</th>
                    <td>{task.name}</td>
                    <td>
                        <span className={ task.status === true ? 'badge badge-danger' : 'badge badge-success'} onClick={this.OnUpdateStatus}>
                                        {task.status === true ? 'Kích hoạt' : ' Ẩn '}
                        </span>
                    </td>
                    <td>
                        <button type="submit" 
                        className="btn btn-warning" 
                        onClick={this.onUpdate}>
                            <span className="fa fa-edit"></span>Sửa
                        </button>&nbsp;
                        <button type="button" className="btn btn-danger" onClick={this.onDelete}>
                            <span className="fa fa-times-circle"></span>Xóa
                        </button>
                    </td>
                </tr>
        );
    }
}

export default TaskItem;
