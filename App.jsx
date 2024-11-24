import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/template/Layout";
import Home from "./components/page/Home";
import List from "./components/page/List"
import Sidebar from "./components/page/Sidebar";
import Login from "./components/page/Login";
import Book from "./components/page/Book";
function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/sidebar" element={<Sidebar />} />
            <Route path="/list" element = { <List/>}/>
            <Route path="/book" element = { <Book/>}/>
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
