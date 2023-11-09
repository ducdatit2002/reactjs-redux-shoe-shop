import logo from "./logo.svg";
import "./App.css";
import FunctionComponet from "./DemoComponent/FunctionComponet/FunctionComponet";
import ClassComponent from "./DemoComponent/ClassComponent/ClassComponent";
import Ex_Layout from "./Ex_Layout/Ex_Layout";
import DataBinding from "./DataBinding/DataBinding";
import RenderWithMap from "./RenderWithMap/RenderWithMap";
import DemoState from "./DemoState/DemoState";
import Ex_Car from "./Ex_Car/Ex_Car";
import DemoProps from "./DemoProps/DemoProps";
import Ex_Phone from "./Ex_Phone/Ex_Phone";
import Ex_Shoe from "./Ex_Shoe/Ex_Shoe";
import DemoRedux from "./DemoRedux/DemoRedux";
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
