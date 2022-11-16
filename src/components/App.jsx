import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./Navbar";

import Home from "../pages/Home";
import Income from "../pages/Income";
import Expenses from "../pages/Expenses";
import Budget from "../pages/Budget";
import Profile from "../pages/Profile";

import Error from "../pages/Error";
import NotFound from "../pages/NotFound";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbar />

      <Routes>

        <Route path="/" element={ <Home/> } />
        <Route path="/income" element={ <Income/> }/>
        <Route path="/expenses" element={ <Expenses/> }/>
        <Route path="/budget" element={ <Budget/> } />
        <Route path="/profile" element={ <Profile/> } />

        {/* Components for error handling */}
        <Route path="/error" element={ <Error/> } />
        <Route path="/*" element={ <NotFound/> } />

      </Routes>
    </div>
  );
}

export default App;
