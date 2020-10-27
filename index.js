const redux = require('redux')
const createStore = redux.createStore
const combineReducers = redux.combineReducers

const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'

function buyIceCream(){
    return{
        type: BUY_ICECREAM
    }
}
function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'First redux action'
    }
}

// (prevState, action) => newState

/* const initialState = {
    numOfCakes: 10,
    numOfIceCream: 20
} */

/* const reducer = (state = initialState, action) =>  {
    switch(action.type) {
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }
        case BUY_ICECREAM: return {
            ...state,
            numOfIceCream: state.numOfIceCream - 1
        }
        default: return state
    }
} */

const initialStateCakes = {
    numOfCakes: 10
}

const initialStateIceCream = {
    numOfIceCream: 20
}

const reducerCakes = (state = initialStateCakes, action) =>  {
    switch(action.type) {
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }
        default: return state
    }
}


const reducerIceCream = (state = initialStateIceCream, action) =>  {
    switch(action.type) {
        case BUY_ICECREAM: return {
            ...state,
            numOfIceCream: state.numOfIceCream - 1
        }
        default: return state
    }
}
const rootReducer = combineReducers({
    cake: reducerCakes,
    iceCream: reducerIceCream
})
const store = createStore(rootReducer)
console.log('initial state', store.getState())
const unsubscribe = store.subscribe(() => console.log('Updated state', store.getState()))
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
.unsubscribe()
