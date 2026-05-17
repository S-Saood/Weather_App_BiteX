export default function Stats({humidity, windSpeed, feelsLike}) {
  return (
    <section className="stats">
      <div className="stat glass">
        <span>Humidity</span>
        <strong>{humidity}%</strong>
      </div>
      <div className="stat glass">
        <span>Wind</span>
        <strong>{windSpeed} km/h</strong>
      </div>
      <div className="stat glass">
        <span>Feels Like</span>
        <strong>{feelsLike}°</strong>
      </div>
      <div className="stat glass red">
        <span>Air quality</span>
        <strong>{feelsLike}°</strong>
      </div>
    </section>
  );
}
