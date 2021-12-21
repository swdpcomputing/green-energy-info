import "./Date.css";

const Date = (props) => {
  const day = props.date.toLocaleString("en-GB", { day: "2-digit" });
  const month = props.date.toLocaleString("en-GB", { month: "long" });
  const year = props.date.toLocaleString("en-GB", { year: "numeric" });

  return (
    <div className="date">
      <div className="date-day">{day}</div>
      <div className="date-month">{month}</div>
      <div className="date-year">{year}</div>
    </div>
  );
}

export default Date;
