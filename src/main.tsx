import { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles/index.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Suspense fallback={<div>...loading</div>}>
    <App />
  </Suspense>
);
