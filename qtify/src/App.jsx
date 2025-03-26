import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import React from "react";
import HomePage from "./pages/HomePage/Home";
import AlbumPage from "./pages/AlbumPage/Album";

function App() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage />}/>
                    <Route path="/album/:albumId" element={<AlbumPage />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;