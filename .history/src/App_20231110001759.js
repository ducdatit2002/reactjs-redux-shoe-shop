import logo from "./logo.svg";
import "./App.css";

import Ex_Shoe_Redux from "./Ex_Shoe_Redux/Ex_Shoe_Redux";

function App() {
  return (
    <div className="App">
      {/* jsx :html + javascript */}
      {/* <h1 className="App-logo">Hello React App</h1> */}
      {/* --- day 1 --- */}
      {/* <FunctionComponet /> */}
      {/* <FunctionComponet></FunctionComponet> */}
      {/* <ClassComponent /> */}
      {/* <Ex_Layout /> */}
      {/* <DataBinding /> */}
      {/*<RenderWithMap /> */}
      {/* --- day 2 --- */}
      {/* <DemoState /> */}
      {/* <Ex_Car /> */}
      {/* <DemoProps /> */}
      {/* props reactjs */}
      {/* --- day 3 --- */}
      {/* <Ex_Phone /> */}
      {/* <Ex_Shoe /> */}
      {/* --- day 5: Redux --- */}
      {/* <DemoRedux /> */}
      <Ex_Shoe_Redux />
    </div>
  );
}

export default App;
// home page : header ~ 50 dòng html
// list page : header ~ 50

// component ~ hàm =>return về html
// tạo 1 component tên Header ( chứa 50 dòng html)
// home page : header ~ 1 dòng tên của componet
