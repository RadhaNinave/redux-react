import classes from './Counter.module.css';
import { useSelector,connect } from 'react-redux';
import { useDispatch } from 'react-redux';
const Counter = () => {
  const dispatch = useDispatch()
  
  const counter = useSelector(state=>state.counter)
  //const showCounter = useSelector(state=>state.counter.showCounter)
  const toggleCounterHandler = () => {
    dispatch({type : 'toggle'})
  }
  const incrementHandler =()=>{
     dispatch({type : 'increment'})
    //dispatch(counterAction.increment())
  }

  const decrementHandler =()=>{
    dispatch({type : 'decrement'})
    //dispatch(counterAction.decrement())
  }
  const incrementHandlerBy5 =()=>{
    dispatch({type : 'incrementBy5'})
   //dispatch(counterAction.increment())
 }

 const decrementHandlerBy5 =()=>{
   dispatch({type : 'decrementBy5'})
   //dispatch(counterAction.decrement())
 }
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
      <button onClick={incrementHandler}>Increment</button>
    
      <button onClick={decrementHandler}>Decrement</button>
      <button onClick={incrementHandlerBy5}>IncrementBy5</button>
      <button onClick={decrementHandlerBy5}>decrementBy5</button>
     
      </div>
    </main>
  );
};

export default Counter;
