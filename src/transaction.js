export default function Transaction(props) {
  return (
    <>
      <h3>Transactions</h3>
      {props.arr.map((transaction, idx) => {
        return (
          <div key={idx} className="row p-2 my-1" style={{ border: "1px solid black" }}>
            <div className="col-6 ">{transaction.description}</div>
            <div className="col-6 text-end">${transaction.amount}</div>
          </div>
        );
      })}
    </>
  );
}
