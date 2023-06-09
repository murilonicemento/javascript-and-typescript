import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Menu } from "./components/Menu";
import { Posts } from "./components/Posts";
import { Post } from "./components/Post";
import { Redirect } from "./components/Redirect";
import { NotFound } from "./components/NotFound";
import "./styles/global.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/post" element={<Posts />} />
        <Route path="/post" element={<Posts />}>
          <Route path=":id" element={<Post />} />
        </Route>
        {/* <Route path="/post/:id" element={<Posts />} /> */}
        <Route path="/redirect" element={<Redirect />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
