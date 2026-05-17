export default function Forecast() {
  return (
    <section className="forecast">
      {["Mon", "Tue", "Wed", "Thu", "Fri"].map(day => (
        <div key={day} className="forecast-card glass">
          <span>{day}</span>
          <strong>0°</strong>
        </div>
      ))}
    </section>
  );
}
