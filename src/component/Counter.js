import { useSelector, useDispatch } from "react-redux";

import { counterActions } from "../store";
const CounterS = () => {

    const dispatch = useDispatch()
    const counter = useSelector(state => state.counter.counter);

    const incrementHandler = () => {
        dispatch(counterActions.increment())
    }

    const decrementHandler = () => {
        dispatch(counterActions.decrement())
    }

    const increseby5 = () => {
        dispatch(counterActions.increase(5))
    }

    return (
        <div>
            <p>{counter}</p>
            <button onClick={incrementHandler}>Increment</button>
            <button onClick={decrementHandler}>Decrement</button>
            <button onClick={increseby5}>Increment By 5</button>
        </div>
    )

}
export default CounterS;