import Date from "./Date";
import "./ElectricityTaker.css";

function ElectricityTaker(props) {
  return (
    <div className="electricity-taker">
      <Date date={props.date} />
      <div className="electricity-taker__description">
        <h2>{props.title}</h2>
        <div className="electricity-taker__amount">{props.amount}kW</div>
      </div>
    </div>
  );
}

export default ElectricityTaker;
