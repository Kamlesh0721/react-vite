function ReusableComponent() {
  let min = 1; // Ensure the min is rounded up
  let max = 10; // Ensure the max is rounded down
  let randomNo = Math.floor(Math.random() * (max - min + 1)) + min;
  return <h2 style={{ "background-color": "aqua" }}>{randomNo}</h2>;
}

export default ReusableComponent;
