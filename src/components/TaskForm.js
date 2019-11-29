import React, { Component } from 'react';

export class TaskForm extends Component {

    constructor(props){
        super(props);
        this.state ={
            id: '',
            name: '',
            status: false
        };
    }
    componentDidMount(){
        if(this.props.task !== null){
            this.setState({
                id: this.props.task.id,
                name: this.props.task.name,
                status: this.props.task.status
            });
        }
    }

    UNSAFE_componentWillReceiveProps(nextProps){
        if(nextProps && nextProps.task){
            this.setState({
                id: nextProps.task.id,
                name: nextProps.task.name,
                status: nextProps.task.status
            });
        }
        else if(nextProps && nextProps.task === null){
            this.setState({
                id: '',
                name: '',
                status: false
            });
        }
    }

    onCloseForm = () => {
        this.props.onCloseForm();
    }

    onChangee = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        if(name === 'status'){
            value = target.value === 'true' ? true : false
        }
        this.setState({
            [name] : value 
        });
    }
    
    onSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state);
        // cancel and close form
        this.onClear();
        this.onCloseForm();
    }
    onClear = () => {
        this.setState({
            name: '',
            status: false
        });
    }

    render() {
        var {id} = this.state;
        return (
            <div>
                    <div className="card">
                        <h5 className="card-header alert-success" onClick = {this.onCloseForm}>
                            {id !== '' ? 'Cập nhật công việc' : 'Thêm công việc'}
                        <span className="fa fa-times-circle left-50"></span>
                        </h5>

                        <div className="card-body">
                            <form onSubmit = { this.onSubmit}>
                            <div className="form-group">
                                <label>Tên : </label>
                                <input 
                                    type="text" 
                                    name="name"
                                    className="form-control"
                                    value={this.state.name}
                                    onChange={this.onChangee}
                                    />
                            </div>

                            <div className="form-group">
                                <label>Trạng thái : </label>
                                <select 
                                    className="form-control"
                                    name="status"
                                    value={this.state.status}
                                    onChange={this.onChangee}
                                    >
                                <option value={true}>Kích hoạt</option>
                                <option value={false}>Ẩn</option>
                                </select><br/>

                                <div className="text-center">
                                    <button type="submit" className="btn btn-primary">
                                    <span className="fa fa-plus"></span>Lưu Lại
                                    </button>&nbsp;
                                    <button type="button" 
                                            className="btn btn-danger"
                                            onClick={this.onClear}
                                            >
                                    <span className="fa fa-times-circle"></span>Hủy bỏ
                                    </button>
                                </div>
                            </div>
                            </form>
                        </div>
                    </div>
            </div>
        );
    }
}

export default TaskForm;
