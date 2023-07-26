import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
<<<<<<< HEAD
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "./Store/store.jsx";
import Characters from "./Components/Characters.jsx";
=======
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "./Store/store.jsx";
import Characters from "./Components/Characters.jsx"
>>>>>>> 203803b99f004f9592d6cebc40cec5a29a8c2289

const store = configureStore();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
<<<<<<< HEAD
      <Provider store={store}>
        <App />
=======
    <Provider store={store}>
      <App />
>>>>>>> 203803b99f004f9592d6cebc40cec5a29a8c2289
      </Provider>
    </Router>
  </React.StrictMode>
);
