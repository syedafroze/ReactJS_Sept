import logo from "./logo.svg";
import "./App.css";
import FComp from "./Component/FunctionalComponent";
import ClassComp from "./Component/ClassComp";
import FComp1 from "./Props/FComp1";
import FuncA from "./State/FuncA";
import ClassComp2 from "./LifeCycleMethods/ClassComp2";
import EFun1 from "./ErrorHandling/EFun1";
import Class1 from "./PureComponent/Class1";
import Form from "./Refs/Form";
import Todo from "./TodoList/Todo";
import ChildToParent from "./Updation/ChildToParent/ParentClass";
import ParentToChild from './Updation/ParentToChild/ParentClass'
import Hover from "./HOC/Hover";
import ClickCounter from "./HOC/ClickCounter";
function App() {
  let name = "Neha";
  //JSX - javascript xml
  return (
    <div className="App">
      <h2> ReactJS</h2>

      <Hover></Hover>
      <ClickCounter></ClickCounter>

      {/* <FComp person="Devika and Swathi"></FComp>
      <ClassComp person={name} ></ClassComp>
      {/* <FComp1></FComp1> */}
      {/* <FuncA></FuncA>  */}
      {/* <ClassComp2></ClassComp2>
      <EFun1></EFun1> */}
      <Class1></Class1>
      {/* <Form></Form> */}
      {/* <Todo></Todo> */}
      <ParentToChild></ParentToChild>
      <ChildToParent></ChildToParent>
    </div>
  );
}

export default App;
//-----------pending ---
//renderProps
//contextApi
//fetchApi
//axios
//portal






//ReactHooks
//Redux 

//Testing ()

