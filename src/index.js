import ReactDOM from "react-dom/client";
import App from "./App";
import "./globals.css";
import { Provider } from "react-redux";
import store from "./redux/store/configStore";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
