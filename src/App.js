import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import VideoDetail from "./pages/VideoDetail";
import Videos from "./pages/Videos";
import SearchHeader from "./components/SearchHeader";
function App() {
  return (
    <Router>
      <SearchHeader />
      <Routes>
        <Route path="/" element={<Videos />} errorElement={<NotFound />} />,
        <Route path="/videos" element={<Videos />} />
        <Route path="/videos/:keyword" element={<Videos />} />
        <Route path="/videos/watch/:keyword" element={<VideoDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
