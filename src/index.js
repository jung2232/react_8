import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Detail from "./components/Detail";
import SignUp from "./components/Signup";
import Login from "./components/Login";
import Main from "./components/Main";
import Upload from "./components/Upload";
import { Provider } from "react-redux";
import store from "./redux/config/configStore";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/:id" element={<Detail />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Main" element={<Main />} />
        <Route path="/Upload" element={<Upload />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);
