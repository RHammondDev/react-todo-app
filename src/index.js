/* https://ibaslogic.com/react-tutorial-for-beginners/*/

import React from "react";
import ReactDOM  from "react-dom";
import { BrowserRouter as Route } from "react-router-dom";

//Import component
import ToDoContainer from "./functionBased/component/ToDoContainer";
//import Header from "./component/Header";

//Render
ReactDOM.render(
<React.StrictMode>
        <Route>
            <ToDoContainer/>
        </Route>
</React.StrictMode>,
document.getElementById("root")
)



//const element = <h1> Hello from ToDo React App!$#</h1>
//ReactDOM.render(element, document.getElementById("root"))