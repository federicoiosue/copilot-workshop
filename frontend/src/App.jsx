/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Notes from "./pages/Notes";
import CreateNote from "./pages/CreateNote";
import EditNote from "./pages/EditNote";

import { useState, useEffect } from "react";

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetchNotes(); // Fetch notes when the app loads
  }, []);

  const fetchNotes = async () => {
    try {
      console.log("Fetching notes..."); // Debugging statement
      const response = await fetch('http://localhost:5042/notes');
      const data = await response.json();
      console.log("Fetched notes:", data); // Debugging statement
      setNotes(data);
    } catch (error) {
      console.error('Error fetching notes:', error);
    }
  };

  return (
    <main className="app w-screen h-screen flex justify-center py-3 p-2 items-center bg-gray-700 ">
      <Router>
        <Routes>
          <Route path="/" element={<Notes notes={notes} fetchNotes={fetchNotes} />} />
          <Route
            path="/create-note"
            element={<CreateNote setNotes={setNotes} fetchNotes={fetchNotes} />}
          />
          <Route
            path="/edit-note/:id"
            element={<EditNote notes={notes} setNotes={setNotes} fetchNotes={fetchNotes} />}
          />
        </Routes>
      </Router>
    </main>
  );
}

export default App;