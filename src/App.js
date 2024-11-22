import Router from "./router/Router";
import { useDispatch } from "react-redux";
import { setLogin } from "./redux/modules/user";

function App() {
  const dispatch = useDispatch();

  const isLogged = localStorage.getItem("isLogged");
  if (isLogged) {
    dispatch(setLogin(true));
  }

  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;
