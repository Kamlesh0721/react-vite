function App() {
  let destinations = [
    "India Gate",
    "Red Fort",
    "Qutub Minar",
    "Lotus Temple",
    "Humayun's Tomb",
    "Akshardham Temple",
    "Jama Masjid",
    "Raj Ghat",
    "Chandni Chowk",
    "Connaught Place",
  ];
  return (
    <>
      <h1> Top Must-Visit Destinations in New Delhi</h1>
      <ul>
        {destinations.map((destination) => (
          <li key={destination}>{destination}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
