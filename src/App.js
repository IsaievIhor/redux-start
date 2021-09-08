import './App.css';
import React from "react";
import {useDispatch, useSelector} from "react-redux";


function App() {
    const dispatch = useDispatch()
    const cash = useSelector(state => state.cash.cash)
    console.log(cash)

    const addCash = (cash) => {
        dispatch({type:'ADD_CASH', payload: cash})
    }

    const getCash = (cash) => {
        dispatch({type:'GET_CASH', payload: cash})
    }

    return (
        <div className="app">
            <div style={{fontSize: '30px'}}>{cash}</div>
            <div style={{display: 'flex'}}>
                <button onClick={() => addCash(Number(prompt()))}>Пополнить счет</button>
                <button onClick={() => getCash(Number(prompt()))}>Снять со счета</button>
            </div>
        </div>
    );
}

export default App;
