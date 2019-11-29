import React, { Component } from 'react';

export class Sort extends Component {

    // UNSAFE_componentWillReceiveProps(nextProps){
    //     console.log(nextProps)
    // }

    onClick = (sortBy, sortValue) => {
        this.props.onSort(sortBy,sortValue);
    }

    render() {

        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="dropdown">
                    <button
                        className="btn btn-primary dropdown-toggle"
                        type="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                    >
                        Sắp xếp<span className="caret-square-down"></span>
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                        <button className="dropdown-item" type="button" onClick={() => this.onClick('name',1)}><p className={(this.props.sortBy === 'name' && this.props.sortValue === 1) ? 'sort_selected' : ''}>Từ A-Z</p></button>
                        <button className="dropdown-item" type="button" onClick={() => this.onClick('name',-1)}><p className={(this.props.sortBy === 'name' && this.props.sortValue === -1) ? 'sort_selected' : ''}>Từ Z-A</p></button>
                        <button className="dropdown-item" type="button" onClick={() => this.onClick('status',1)}><p className={(this.props.sortBy === 'status' && this.props.sortValue === 1) ? 'sort_selected' : ''}>Trạng thái kích hoạt</p></button>
                        <button className="dropdown-item" type="button" onClick={() => this.onClick('status',-1)}><p className={(this.props.sortBy === 'status' && this.props.sortValue === -1) ? 'sort_selected' : ''}>Trạng thái ẩn</p></button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Sort;
