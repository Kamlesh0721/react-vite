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
  // let destinations = [];

  // method 1 of conditional rendering
  // if (destinations.length === 0) {
  //   return <p>I don't know</p>;
  // }

  return (
    // Method 2
    // <>

    //   {destinations.length === 0 ? (
    //     <p>I don't know</p>
    //   ) : (
    //     <>
    //       <h1> Top Must-Visit Destinations in New Delhi</h1>
    //       <ul>
    //         {destinations.map((destination) => (
    //           <li key={destination}>{destination}</li>
    //         ))}
    //       </ul>
    //     </>
    //   )}
    // </>
    <>
      {destinations.length === 0 && <p>I don't know</p>}
      {destinations.length !== 0 && (
        <>
          <h1> Top Must-Visit Destinations in New Delhi</h1>
          <ul>
            {destinations.map((destination) => (
              <li key={destination}>{destination}</li>
            ))}
          </ul>
        </>
      )}
    </>
  );
}

export default App;
