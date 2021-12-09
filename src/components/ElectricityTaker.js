import "./ElectricityTaker.css";

function ElectricityTaker(props) {
  return (
    <div className="electricity-taker">
      <h2>{props.title}</h2>
      <div className="electricity-taker__description">
        <h3>{props.date.toISOString()}</h3>
        <div className="electricity-taker__amount">{props.amount}kW</div>
      </div>
    </div>
  );
}

export default ElectricityTaker;
