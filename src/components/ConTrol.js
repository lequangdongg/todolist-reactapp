import React, { Component } from 'react';
import Search from './Search';
import Sort from './Sort';

export class ConTrol extends Component {
    render() {
        return (
            <div className="row mt-30">
                <Search onSearch = {this.props.onSearch} />
                <Sort  onSort = {this.props.onSort} sortBy={this.props.sortBy} sortValue={this.props.sortValue} />
            </div>
        );
    }
}

export default ConTrol;
