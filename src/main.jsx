import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

<<<<<<< HEAD
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
=======
const basename =
  import.meta.env.MODE === "production"
    ? "/seyontechdigitalmediasite"
    : "/";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter basename={basename}>
>>>>>>> f43e37feefdb14e79acdbc38c4b9fcba64d60ee4
    <App />
  </BrowserRouter>
);