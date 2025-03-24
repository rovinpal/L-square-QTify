import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import React from "react";
import HomePage from "./pages/Home";

function App() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage />}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;