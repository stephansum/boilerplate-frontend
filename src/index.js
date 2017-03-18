import "./index.scss";

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";



var App = React.createClass({
    render: function() {
        return (
            <h1>React is up and running :-)</h1>
        );
    }
});


ReactDOM.render(<App />, document.getElementById("app"));