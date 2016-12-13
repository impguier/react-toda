import React,{ Component } from 'react';
import Element from './list-element';
export default class List extends Component{
    render(){
        return (
           <ul className="todo-list">
               {
                   this.props.events.map(
                       (event,i) =><Element {...this.props} key={i} i={i} event={event} />
                    )
               }
           </ul>
        )
    }
}