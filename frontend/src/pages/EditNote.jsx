import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

/**
 * EditNote component allows users to modify existing notes.
 * It provides functionality to edit the title and details of a note,
 * save the changes, and delete the note if needed.
 */
const EditNote = () => {
  const { id } = useParams(); // Get the note ID from the URL
  const navigate = useNavigate(); // For navigation after saving or deleting
  const [note, setNote] = useState({ title: "", content: "" });
  const [error, setError] = useState("");

  // Fetch the note details when the component loads
  useEffect(() => {
    fetch(`http://localhost:5042/notes/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch note");
        }
        return response.json();
      })
      .then((data) => setNote(data))
      .catch((err) => setError(err.message));
  }, [id]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNote({
      ...note,
      [name]: value,
    });
  };

  // Handle form submission to save changes
  const handleSave = (e) => {
    e.preventDefault();
    fetch(`http://localhost:5042/notes/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to update note");
        }
        return response.json();
      })
      .then(() => navigate("/")) // Redirect to the home page after saving
      .catch((err) => setError(err.message));
  };

  // Handle note deletion
  const handleDelete = () => {
    fetch(`http://localhost:5042/notes/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to delete note");
        }
        return response.json();
      })
      .then(() => navigate("/")) // Redirect to the home page after deletion
      .catch((err) => setError(err.message));
  };

  return (
    <section className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Edit Note</h1>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleSave} className="space-y-4">
        <div>
          <label htmlFor="title" className="block font-medium">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={note.title}
            onChange={handleChange}
            className="w-full border rounded p-2"
            required
          />
        </div>
        <div>
          <label htmlFor="content" className="block font-medium">
            Content
          </label>
          <textarea
            id="content"
            name="content"
            value={note.content}
            onChange={handleChange}
            className="w-full border rounded p-2"
            rows="5"
            required
          ></textarea>
        </div>
        <div className="flex justify-between">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Save
          </button>
          <button
            type="button"
            onClick={handleDelete}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Delete
          </button>
        </div>
      </form>
    </section>
  );
};

export default EditNote;
