const INITIAL_STATE = { step: 10, number: 10 }

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'INC':
            return { ...state, number: state.number + state.step }
        case 'DEC':
            return { ...state, number: state.number - state.step }
        case 'STEP_CHANGED':
            return { ...state, step: +action.payload }
        default:
            return state
    }
}


/* const INITIAL_STATE = {
    data:[
        'React Native Course',
        'React Course'
    ]
}

export default (state=INITIAL_STATE,action) => {
    switch (action.type) {
        case 'ADD_COURSE':
            return  {...state, data:[...state.data,action.title]} 
        default:
            return state
    }

} */


