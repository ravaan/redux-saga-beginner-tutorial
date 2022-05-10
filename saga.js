import {put, takeEvery, all, call, select} from 'redux-saga/effects'
const delay = (ms) => new Promise(res => setTimeout(res, ms))
function* helloSaga() {
    console.log('Hello Saga!')
}

export const getProject = (state) => state

function* decrementAsync(){
    let a = yield select(getProject)
    // for (let i = 0; i < 100000000; i++){
    //     if(i%10000 === 0) console.log('waiting');
    // }
    console.log(`Dec Saga: ${a}`);
    yield print()
}

function* incrementAsync(){
    let a = yield select(getProject)
    console.log(`Increment Value A: ${a}`)
    // console.log(`Async Saga Val: ${a}`)
    // console.log('Increment async started');
    yield delay(1000)
    // console.log("delay done");
    yield put({type: 'INCREMENT'})
    // console.log("Increment Dispatched");
    let b = yield select(getProject)
    console.log(`Increment Value B: ${b}`)
    yield put({type: 'DECREMENT'})
    // console.log("Decrement Dispatched");

}

function* watchIncrementAsync(){
    yield takeEvery('INCREMENT_ASYNC', incrementAsync)
    yield takeEvery('DECREMENT', decrementAsync)

}

export default function* rootSaga(){
    yield all([
        helloSaga(),
        watchIncrementAsync()
    ])
}
function print(){
    console.log("print function triggered in yield");
    return 100
}
