import React from "react";
import Btn from "./components/atoms/btn";
import Sidebar from "./components/organisms/sidebar";
import Header from "./components/organisms/header";

function App() {
  const sayHello = () => {
    console.log("Hello");
  };

  return (
    <div className="App">
      <Header></Header>
      {/* <Btn text="Button" onClick={sayHello}></Btn> */}
      <Sidebar></Sidebar>
    </div>
  );
}

export default App;
