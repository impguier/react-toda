export function createEvent (title,eventid,complete){
    return {
        type:"CREATE_EVENT",
        title,
        eventid,
        complete
    }
}
export function toggleStatusComplete(eventid){
    return {
        type:"TOGGLE_STATUS_COMPLETE",
        eventid
    }
}
export function setCompletedAll(){
    return {
        type:"SET_COMPLETED_ALL"
    }
}
export function setUncompletedAll(){
    return {
        type:"SET_UNCOMPLETE_ALL"
    }
}
export function removeEvent(eventid){
    return {
        type:"REMOVE_EVENT",
        eventid
    }
}