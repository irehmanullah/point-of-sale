import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import Main from "./views/Main";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <HashRouter>
    <Main />
  </HashRouter>,
  rootElement
);
