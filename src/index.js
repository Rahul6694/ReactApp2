import React from "react";


import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";


ReactDOM.render(<div style={{backgroundColor:"light"}}>
<BrowserRouter><App/>
</BrowserRouter>
</div>,document.getElementById("root"));