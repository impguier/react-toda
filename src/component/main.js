import React,{ Component } from 'react';

import Create from './create';
import ToggleAll from './toggleAll';
import List from './list';
//this.setState({'filterName':'showAll'})
const FILTER = {
    showAll:function(event){
        return event;
    },
    showCompleted:function(event){
        return event.complete == true;
    },
    showActived:function(event){
        return event.complete == false;
    }
}
export default class Main extends Component{
    constructor(){
        super();
        this.state = {
            filterName:'showAll'
        }
    }
    setStateFunc(text){
        this.setState({'filterName':text});
    }
    renderToggleAll () {
        const { events } = this.props;
        if(events.length > 0){
            const { setCompletedAll } = this.props;
            return (<ToggleAll actions={{setCompletedAll}}></ToggleAll>);
        }
    }
    renderFooter () {
        const { events, showAll, showCompleted, showActived} = this.props;
        if(events.length > 0){
            return (
                <footer className="footer">
                    <span className="todo-count">
                        <strong>{events.length}</strong>
                        <span> </span>
                        <span>item</span>
                        <span>left</span>
                    </span>
                    <ul className="filters" data-reactid=".0.2.1">
                        <li>
                            <a href="#/" onClick={this.setStateFunc.bind(this,'showAll')} className={this.state.filterName === 'showAll'?'selected':''}>All</a>
                        </li>
                        <li>
                            <a href="#/" onClick={this.setStateFunc.bind(this,'showCompleted')} className={this.state.filterName === 'showCompleted'?'selected':''}>Completed</a>
                        </li>
                        <li>
                            <a href="#/" onClick={this.setStateFunc.bind(this,'showActived')} className={this.state.filterName === 'showActived'?'selected':''}>Actived</a>
                        </li>
                    </ul>
                </footer>
            )
        }
    }
    renderList(){
        const { toggleStatusComplete ,removeEvent,events } = this.props;
        var evs = events.filter( FILTER[this.state.filterName] );
        return (
            <List actions={{'toggleStatusComplete':toggleStatusComplete,'removeEvent':removeEvent}} events={ evs }></List>
        )
    }
    render (){
        const { createEvent } = this.props;
        return (
            <div className="todoapp">
                <header>
                    <Create createEvent = { createEvent } />
                </header>
                <section className="main">
                    { this.renderToggleAll() }
                    { this.renderList() }
                </section>
                { this.renderFooter() }
            </div>
        )
    }
}