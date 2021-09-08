import './App.css';
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {addCustomerAction, removeCustomerAction} from "./store/customerReducer";
import {addCashAction, getCashAction} from "./store/cashReducer";


function App() {
    const dispatch = useDispatch()
    const cash = useSelector(state => state.cash.cash)
    const customer = useSelector(state => state.customer.customers)

console.log(customer)
    const addCash = (cash) => {
        dispatch(addCashAction(cash))
    }

    const getCash = (cash) => {
        dispatch(getCashAction(cash))
    }

    const addCustomer = (name) =>{
        const customer = {
            name,
            id: Date.now(),
        }
        dispatch(addCustomerAction(customer))
    }
    
    const removeCustomer = (customer) => {
      dispatch(removeCustomerAction(customer.id))
    }

    return (
        <div className="app">
            <div style={{fontSize: '30px'}}>{cash}</div>
            <div style={{display: 'flex'}}>
                <button onClick={() => addCash(Number(prompt()))}>Пополнить счет</button>
                <button onClick={() => getCash(Number(prompt()))}>Снять со счета</button>
                <button onClick={() => addCustomer(prompt())}>Добавить клиента</button>
            </div>
            <div>
                {customer.length > 0 ?
                        <div style={{fontSize: '24px'}}>
                            {customer.map(customer=>
                            <div onClick={()=>removeCustomer(customer)}>{customer.name}</div>
                            )}
                        </div>
                        :
                        <div style={{fontSize: '24px'}}>
                            Клиентов нет!
                        </div>
                }

            </div>
        </div>
    );
}

export default App;
