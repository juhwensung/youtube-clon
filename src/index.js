import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ReactDOM from "react-dom/client";
import App from "./App";
import { YoutubeApiProvider } from "./context/YoutubeApiContext";
import "./index.css";

const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <YoutubeApiProvider>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </YoutubeApiProvider>
);
