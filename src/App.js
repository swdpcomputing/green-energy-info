import ElectricityTaker from "./components/ElectricityTaker";

function App() {
  const electrictyTakers = [
    {
      title: "Microwave",
      date: new Date(2021, 2, 2),
      amount: "1.243",
    },
    {
      title: "TV",
      date: new Date(2021, 2, 3),
      amount: "3.221",
    },
    {
      title: "HiFi",
      date: new Date(2021, 2, 4),
      amount: "1.221",
    },
    {
      title: "Car Charging",
      date: new Date(2021, 2, 5),
      amount: "5.342",
    },
  ];
  return (
    <div>
      <h2>Some Stuff</h2>
      <ElectricityTaker
        title={electrictyTakers[0].title}
        date={electrictyTakers[0].date}
        amount={electrictyTakers[0].amount}
      ></ElectricityTaker>
      <ElectricityTaker
        title={electrictyTakers[1].title}
        date={electrictyTakers[1].date}
        amount={electrictyTakers[1].amount}
      ></ElectricityTaker>
      <ElectricityTaker
        title={electrictyTakers[2].title}
        date={electrictyTakers[2].date}
        amount={electrictyTakers[2].amount}
      ></ElectricityTaker>
      <ElectricityTaker
        title={electrictyTakers[3].title}
        date={electrictyTakers[3].date}
        amount={electrictyTakers[3].amount}
      ></ElectricityTaker>
    </div>
  );
}

export default App;
