import Date from "./Date";
import Card from './Card';
import "./ElectricityTaker.css";

const ElectricityTaker = (props) => {
  const clickHandler = () => {
    console.log("Clicked!");
  }
  
  return (
    <Card className="electricity-taker">
      <Date date={props.date} />
      <div className="electricity-taker__description">
        <h2>{props.title}</h2>
        <div className="electricity-taker__amount">{props.amount}kW</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ElectricityTaker;
