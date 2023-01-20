import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import SignIn from "./page/Sign/SignIn";
import SignUp from "./page/Sign/SignUp";
import { Provider } from "react-redux";
import store from "./redux/config/configStore";
import Upload from "./components/board/Upload";
import Detail from "./components/board/Detail";
import Home from "./page/Main/Home";
import Layout from "./components/Layout";
import MyPage from "./components/MyPage/MyPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/:id" element={<Detail />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Upload" element={<Upload />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
