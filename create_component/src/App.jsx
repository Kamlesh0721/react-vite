import LikeButton from "./LikeButton";
import DynamicComponent from "./DynamicComponent";
import ReusableComponent from "./ReusableComponent";
function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <LikeButton></LikeButton>
      <DynamicComponent></DynamicComponent>
      {/*Reusabel component :  Random Number between 0 to 10 we will use this multipletime*/}
      <ReusableComponent></ReusableComponent>
      <ReusableComponent /> <ReusableComponent />
      <ReusableComponent />
      <ReusableComponent />
      <ReusableComponent />
      <ReusableComponent />
      <ReusableComponent />
      <ReusableComponent />
    </div>
  );
}
export default App;
