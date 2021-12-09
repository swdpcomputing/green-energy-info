import "./ElectricityTaker.css";

function ElectricityTaker(props) {
  const day = props.date.toLocaleString("en-GB", { day: "2-digit" });
  const month = props.date.toLocaleString("en-GB", { month: "long" });
  const year = props.date.toLocaleString("en-GB", { year: "numeric" });

  return (
    <div className="electricity-taker">
      <div>
        <div>{day}</div>
        <div>{month}</div>
        <div>{year}</div>
      </div>
      <div className="electricity-taker__description">
        <h2>{props.title}</h2>
        <div className="electricity-taker__amount">{props.amount}kW</div>
      </div>
    </div>
  );
}

export default ElectricityTaker;
