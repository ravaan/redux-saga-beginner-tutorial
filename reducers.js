export default function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      console.log(`Inc Reducer: ${state}`);
      return state + 3
    case 'DECREMENT':
      let i;
      // for (i = 0; i < 100000000; i++){
      //   if(i%10000 === 0) console.log('waiting');
      // }
      console.log(`Dec Reducer: ${state}`);
      return state - 1
    case 'INCREMENT_ASYNC':

      return
    default:
      return state
  }
}
