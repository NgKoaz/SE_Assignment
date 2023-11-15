import axios from "axios";
import { UserContextProvider } from "./assets/UserContext";
import Main from "./Main";

function App() {
  axios.defaults.baseURL = "http://localhost:4000";
  axios.defaults.withCredentials = true;
  return (
    <UserContextProvider>
      <Main />
    </UserContextProvider>
  );
}

export default App;
