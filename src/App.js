import "./App.css";
import Body from "./Component/Body";
import {Provider} from "react-redux";
import appStore from "./utils/Store/appStore";
function App() {
  return (
    <div className="App">
      <Provider store={appStore}>
        <Body />
      </Provider>
    </div>
  );
}

export default App;
