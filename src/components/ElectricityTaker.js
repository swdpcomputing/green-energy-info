import Date from "./Date";
import Card from './Card';
import "./ElectricityTaker.css";

const ElectricityTaker = (props) => {
  return (
    <Card className="electricity-taker">
      <Date date={props.date} />
      <div className="electricity-taker__description">
        <h2>{props.title}</h2>
        <div className="electricity-taker__amount">{props.amount}kW</div>
      </div>
    </Card>
  );
}

export default ElectricityTaker;
