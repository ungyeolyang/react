import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Articles from "./pages/Articles";
import Article from "./pages/Article";
import Layout from "./pages/Layout";
import Login from "./pages/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" eliment={<Login />} />
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/profiles/:username" element={<Profile />} />
          </Route>
          <Route path="/articles" element={<Articles />}>
            <Route path=":id" element={<Article />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
