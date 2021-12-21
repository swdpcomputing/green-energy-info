import ElectricityTakers from "./components/ElectricityTakers";

const App = () => {
  const electricityTakerData = [
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
      <ElectricityTakers items={electricityTakerData} />
    </div>
  );
}

export default App;
