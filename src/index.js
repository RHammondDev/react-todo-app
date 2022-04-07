import React from "react";
import ReactDOM  from "react-dom";
import { BrowserRouter as Route } from "react-router-dom";

//Import component
import ToDoContainer from "./functionBased/component/ToDoContainer";

//Render
ReactDOM.render(
<React.StrictMode>
        <Route>
            <ToDoContainer/>
        </Route>
</React.StrictMode>,
document.getElementById("root")
)
