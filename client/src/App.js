import React, {useState, useEffect} from "react"
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';

import MainPage from "./pages/MainPage";
import Form from "./pages/Form";

function App() {
  return (
    <Router>
    <Routes>
        <Route exact path='/' element={<MainPage />} />
        <Route path='/form' element={<Form />} />
    </Routes>
    </Router>
  )
}

export default App;