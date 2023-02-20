import classes from './Counter.module.css';
import { useSelector,connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import { counterActions } from '../store';
const Counter = () => {
  const dispatch = useDispatch()
  
  const counter = useSelector(state=>state.counter)
  const showCounter = useSelector(state=>state.counter.showCounter)
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle())
  }
  const incrementHandler =()=>{
    // dispatch({type : 'increment'})
    dispatch(counterActions.increment())
  }

  const decrementHandler =()=>{
   // dispatch({type : 'decrement'})
    dispatch(counterActions.decrement())
  }
  const increaseHandler =()=>{
    //dispatch({type : 'increase'})
   dispatch(counterActions.increase(5))
 }


  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
      <button onClick={incrementHandler}>Increment</button>
    
      <button onClick={decrementHandler}>Decrement</button>
      <button onClick={increaseHandler}>IncrementBy5</button>
     
     
      </div>
      <button onClick={toggleCounterHandler}>toggle</button>
    </main>
  );
};

export default Counter



