export default function events(state = [], action){
    var i;
    switch (action.type) {
        case "CREATE_EVENT":
            console.log("create Event at here");
            return [
                ...state.slice(0),
                {title:action.title,eventid:action.eventid,complete:action.complete}
            ];
        case "TOGGLE_STATUS_COMPLETE":
            console.log("TOGGLE_STATUS_COMPLETE at here");
            return state.map(obj =>
                obj.eventid === action.eventid ?
                { ...obj, complete: !obj.complete } :
                    obj
            );
        case "REMOVE_EVENT":
            console.log("REMOVE_EVENT at here");
            return state.filter(obj=>obj.eventid !== action.eventid);

        case "SET_COMPLETED_ALL":
            const completeMark =  state.every( obj => obj.complete );
            return state.map( obj => {  obj.complete = !completeMark;return obj; } );
        default:
            return state;
    }
}