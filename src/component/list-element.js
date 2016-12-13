import React,{ Component } from 'react';

export default class Element extends Component{
    render(){
        const { i } = this.props;
        const { toggleStatusComplete , removeEvent} = this.props.actions;
        const { complete, title, eventid } = this.props.event;
        return (
            <li className={ complete?'completed':'' } key={ eventid }>
                <div className="view">
                    <input className="toggle" type="checkbox" onClick={ toggleStatusComplete.bind(null,eventid)} checked={ complete } />
                    <label>{ title }</label>
                    <button className="destroy" onClick={removeEvent.bind(null,eventid)}></button>
                </div>
                <input className="edit" value="" />
            </li>
        )
    }
}