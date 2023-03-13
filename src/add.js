import React, { useState } from "react";

export default function Add(props) {
    const [amount, setAmount] = useState(0);
    const [description, setDescription] = useState('');
    const [radio, setRadio] = useState('');

    function handleInput(e){
        if(e.target.name === 'amount'){
            setAmount(e.target.value);
        }else if (e.target.name === "description") {
            setDescription(e.target.value);
        }
        if(e.target.name === 'type'){
            const set = (e.target.id == 'flexRadioDefault1')? 'Expense': 'Income';
            setRadio(set);
        }
    }
  return (
    <>
      <div
        className="container m-auto my-3"
      >
        {/* Amount */}
        <input type="Number" 
        className="form-control " 
        placeholder="Amount" 
        name="amount"
        required
        onChange={handleInput}/>{" "}
        <br />

        {/* Description */}
        <input type="text" 
        className="form-control" 
        placeholder="Description" 
        name="description"
        required
        onChange={handleInput}/> 
        <br/>

        {/* Expense */}
        <input
          className="form-check-input"
          type="radio"
          name="type"
          id="flexRadioDefault1" 
          onChange={handleInput}
          required
        />
        <label className="form-check-label mx-2" htmlFor="flexRadioDefault1">
          Expense
        </label>

        {/* Income */}
        <input
          className="form-check-input"
          type="radio"
          name="type"
          id="flexRadioDefault2"
          onChange={handleInput}
          required
        />
        <label className="form-check-label mx-2 mb-2" htmlFor="flexRadioDefault2">
          Income
        </label>
        <br />

        {/* Button */}
        <div className="row">
        <button className="btn btn-dark" 
        onClick={()=>props.addTrans({amount}, {description}, {radio})}>Add Transaction</button>
        </div>
      </div>
    </>
  );
}
