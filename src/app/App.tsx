import React from "react";
import "../style/global.scss";
import { Router } from "../router/router";
import { HashRouter } from "react-router-dom";
import { ConfigProvider } from "antd";

function App() {
  return (
    <ConfigProvider csp={{nonce: 'antd'}}>
      <HashRouter>
        <Router />
      </HashRouter>
    </ConfigProvider>
  );
}

export default App;
