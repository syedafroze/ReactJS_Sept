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
import ParentToChild from "./Updation/ParentToChild/ParentClass";
import Hover from "./HOC/Hover";
import ClickCounter from "./HOC/ClickCounter";
import Main from "./RenderProps/Main";
import Portal from "./Portal/portal";
import AClass from "./ContextApi/AClass";
import {Provider} from './ContextApi/context';
import Fetch from './Apis/Fetch';
import Axios from './Apis/Axios'
function App() {
  let name = "Neha";
  //JSX - javascript xml
  return (
    <div className="App">
   {/* <Fetch></Fetch> */}
<Axios></Axios>

      {/* <Provider value ={name}>
      <h2> ReactJS</h2>
      <Main person={name}></Main>
      <AClass person={name}></AClass>
      </Provider> */}
      {/* 
      <Hover></Hover>
      <ClickCounter></ClickCounter> */}

      {/* <FComp person="Devika and Swathi"></FComp>
      <ClassComp person={name} ></ClassComp>
      {/* <FComp1></FComp1> */}
      {/* <FuncA></FuncA>  */}
      {/* <ClassComp2></ClassComp2>
      <EFun1></EFun1> */}
      {/* <Class1></Class1> */}
      {/* <Form></Form> */}
      {/* <Todo></Todo> */}
      {/* <ParentToChild></ParentToChild>
      <ChildToParent></ChildToParent> */}
    </div>
  );
}

export default App;

//ReactHooks - they have introduced few lifecycle of class and also the state into functions ,

//Redux - state management 


