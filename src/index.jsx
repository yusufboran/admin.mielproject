import { CssBaseline } from "@mui/material";
import ReactDOM from "react-dom";
import { BrowserRouter,HashRouter } from "react-router-dom";
import App from "./app/App";

ReactDOM.render(
  <HashRouter>
    <CssBaseline />
    <App />
  </HashRouter>,
  document.getElementById("root")
);
