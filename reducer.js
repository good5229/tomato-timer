// Import

// Actions

const START_TIMER = 'START_TIMER';
const RESTART_TIMER = 'RESTAR_TIMER';
const ADD_SECOND = 'ADD_SECOND';

// Action Creators

function start_timer(){
    return {
        type: START_TIMER
    };
}

function restartTimer(){
    return {
        type: RESTART_TIMER
    };
}

function addSecond(){
    return {
        type: ADD_SECOND 
    };
}

// Reducers

const TIME_DURATION = 1500;

const initialState = {
    isPlaying: false,
    elapsedTime: 0,
    timerDuration: TIME_DURATION
}

function reducer(state = initialState, action){
    switch(action.type){
        case START_TIMER:
            return applyStartTimer(state, action);
        case RESTART_TIMER:
            return applyRestartTimer(state, action);
        case ADD_SECOND:
            return applyAddSecond(state, action);
    }
}
// Reducers functions

function applyStartTimer(state){
    return{
        isPlaying:true
    };
}

function applyRestartTimer(state){
    return{
        isPlaying:false,
        elapsedTime: 0
    };
}

function applyAddSecond(state){
    if(state.elapsedTime < TIMER_DURATION){
        return {
            elapsedTime: state.elapsedTime + 1
        };
    }else{
        return {
            isPlaying: false
        };
    }
}

// Export Action Creators
const actionCreator = {
    startTimer, restartTimer, addSecond
}

// Export Reducer

export default reducer;