import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import Main from "./views/Main";

const rootElement = document.getElementById("root");

ReactDOM.createRoot(rootElement as HTMLElement).render(
  <HashRouter>
    <Main />
  </HashRouter>
);
