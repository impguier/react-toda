import React,{ Component } from 'react';
import uuid from 'uuid/v4';
export default class Create extends Component{
    enterEvent(e){
        if(e.keyCode === 13){
            if(e.target.value.trim().length){
                this.props.createEvent(e.target.value, uuid(), false);
                e.target.value="";
            }
        }
    }
    render(){
        return (
            <input placeholder="What needs to be done?" onKeyUp={ this.enterEvent.bind(this) } className="new-todo"/>
        )
    }
}