import React,{ Component } from 'react';

export default class ToggleAll extends Component{
    render() {
        const { setCompletedAll } = this.props.actions;
        return (
            <input className="toggle-all" type="checkbox" onClick={setCompletedAll.bind(this)}  />
        )
    }
}