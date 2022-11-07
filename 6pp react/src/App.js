import "./App.css";
import "./Components/Header";
import Header from "./Components/Header";
import Home from "./Components/Home";

// function Mynewcomponent(props) {
//   return (
//     <div className={props.cn}>
//       {props.name} : {props.income}
//     </div>
//   );
// }

function App() {
  return (
    <>
      {/* Helloooo <Mynewcomponent cn={"p"} name={"suraj"} income={1000} />{" "}
      <Mynewcomponent cn={"p"} x={"verma"} income={600} />
      <Mynewcomponent cn={"p"} x={"nice"} income={900} /> */}
      <Header name={"suraj"} />
      <Home />
    </>
  );
}

export default App;
