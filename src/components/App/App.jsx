import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "../Navbar/Navbar";

import Home from "../../pages/Home/Home";
import Income from "../../pages/Income/Income";
import IncomeEdit from "../../pages/Income/IncomeEdit";
import Expenses from "../../pages/Expenses/Expenses";
import ExpensesDetails from "../../pages/Expenses/ExpensesDetails";
import ExpensesEdit from "../../pages/Expenses/ExpensesEdit";
import Budget from "../../pages/Budget/Budget";
import Profile from "../../pages/Profile/Profile";
import Error from "../../pages/Error/Error";
import NotFound from "../../pages/NotFound/NotFound";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbar />

      <Routes>

        <Route path="/" element={ <Home/> } />
        <Route path="/income" element={ <Income/> }/>
        <Route path="/income/edit/:id" element={ <IncomeEdit/> }/>
        <Route path="/expenses" element={ <Expenses/> }/>
        <Route path="/expenses/:id" element={ <ExpensesDetails/> }/>
        <Route path="/expenses/edit/:id" element={ <ExpensesEdit /> }/>
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
