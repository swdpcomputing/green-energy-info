import "./ElectricityTaker.css";

function ElectricityTaker() {
  const takerTitle = "Microwave";
  const electricityDate = new Date(2021, 2, 23);
  const amountOfElectricity = "1.2434";

  return (
    <div className="electricity-taker">
      <h2>{takerTitle}</h2>
      <div className="electricity-taker__description">
        <h3>{electricityDate.toISOString()}</h3>
        <div className="electricity-taker__amount">{amountOfElectricity}kW</div>
      </div>
    </div>
  );
}

export default ElectricityTaker;
