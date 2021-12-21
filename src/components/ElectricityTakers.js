import ElectricityTaker from "./ElectricityTaker";
import Card from './Card';
import "./ElectricityTakers.css"

const ElectricityTakers = (props) => {
  return (
    <Card className="electricity-takers">
      <ElectricityTaker
        title={props.items[0].title}
        date={props.items[0].date}
        amount={props.items[0].amount}
      />
      <ElectricityTaker
        title={props.items[1].title}
        date={props.items[1].date}
        amount={props.items[1].amount}
      />
      <ElectricityTaker
        title={props.items[2].title}
        date={props.items[2].date}
        amount={props.items[2].amount}
      />
      <ElectricityTaker
        title={props.items[3].title}
        date={props.items[3].date}
        amount={props.items[3].amount}
      />
    </Card>
  );
}

export default ElectricityTakers;
