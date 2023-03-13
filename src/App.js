import './App.css';
import React, { useState } from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Add from './add.js';
import Transaction from './transaction.js';

function App() {
  const [show, setShow] = useState(false);
  const [showTrans, setShowTrans] = useState(false);
  const [buttonName, setButtonName] = useState({count: 0, name: 'ADD'});
  const [amount, setAmount] = useState(0);
  const [description, setDescription] = useState('');
  const [arr, setArr] = useState([]);
  const [data, setData] = useState(
    {balance: 0, expense: 0, income: 0}
  );

  function addFunc(){
    if(show){
      setShow(false);
    }else{
      setShow(true);
    }
    const newCount = buttonName.count + 1;
    const newName = newCount % 2 === 0 ? 'ADD' : 'Cancel';
    const newState = { count: newCount, name: newName };
    setButtonName(newState);
  }

  function addTrans(amount, description, radio){
    amount = amount.amount;
    amount = parseInt(amount, 10);
    description = description.description; 
    radio = radio.radio;

    if(description == '') description = 'dummy';
    
    if(radio == 'Expense'){
      setData({balance: data.balance - amount, expense: amount + data.expense, income: data.income});
    }else if(radio == 'Income'){
      setData({balance: data.balance + amount, expense: data.expense, income: amount + data.income});
    }
    addFunc();
    setAmount(amount);
    setDescription(description);
    setShowTrans(true);
    const obj = {description: description, amount: amount};
    setArr([...arr, obj]);
  }

  return (
    <div className="conatiner-fluid mt-5 overflow-hidden" >
      <div className="row" >
        <div className="col-4 mx-auto" >
          <h1 className='text-center'>Expense Tracker</h1>
          <div className="row mt-4">
            <div className="col-sm-9 py-2 fw-bold fs-5" >Balance: ${data.balance}</div>
            <button className="col-md-3 btn btn-dark" 
            onClick={addFunc}>{buttonName.name}</button>
          </div>

          {show && <Add addTrans={addTrans} />}
          
          {/* expense & income */}
          <div className="row p-3 justify-content-between" >
            <div className="col-md-5 " style={{border:'2px solid grey'}}>
              <p className='fs-4'>Expense</p>
              <div className="col-7 mb-3">
                <span className='fs-1' id="expense" style={{color:'red'}}>${data.expense}</span>
              </div>
            </div>
            <div className="col-md-5 " style={{border:'2px solid grey'}}>
            <p className='fs-4'>Income</p>
            <div className="col-7 mb-3">
              <span className='fs-1' id='income' style={{color:'green'}}>${data.income}</span>
            </div>
            </div>
          </div>

          {showTrans && <Transaction arr={arr} />}
        </div>
      </div>
    </div>
  );
}

export default App;
