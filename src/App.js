import React, { useState, useCallback } from 'react';
import Sidebar from './components/Sidebar';
import Editor from './components/Editor';
import Toast from './components/Toast';
import './App.css';

const INITIAL_NOTES = [
  {
    id: 1,
    title: 'Welcome to My Notes',
    body: 'Start writing your thoughts here. You can create, edit, and delete notes freely.\n\nThis is your private space to think.',
    tag: 'personal',
    updatedAt: Date.now() - 86400000 * 2,
  },
  {
    id: 2,
    title: 'Project Ideas',
    body: 'Build something with React.\nLearn more about design systems.\nExplore generative art.',
    tag: 'ideas',
    updatedAt: Date.now() - 3600000,
  },
  {
    id: 3,
    title: 'Weekly Tasks',
    body: '- Finish the quarterly report\n- Call with the team at 3pm\n- Review PRs before EOD',
    tag: 'todo',
    updatedAt: Date.now() - 600000,
  },
];

let nextId = 4;

export default function App() {
  const [notes, setNotes] = useState(INITIAL_NOTES);
  const [activeId, setActiveId] = useState(INITIAL_NOTES[0].id);
  const [search, setSearch] = useState('');
  const [toast, setToast] = useState('');

  const showToast = useCallback((msg) => {
    setToast(msg);
    setTimeout(() => setToast(''), 1800);
  }, []);

  const activeNote = notes.find((n) => n.id === activeId) || null;

  const filteredNotes = notes.filter((n) => {
    const q = search.toLowerCase();
    return n.title.toLowerCase().includes(q) || n.body.toLowerCase().includes(q);
  });

  const handleNewNote = () => {
    const note = {
      id: nextId++,
      title: '',
      body: '',
      tag: 'personal',
      updatedAt: Date.now(),
    };
    setNotes((prev) => [note, ...prev]);
    setActiveId(note.id);
  };

  const handleSelectNote = (id) => {
    setActiveId(id);
  };

  const handleSaveNote = (updatedNote) => {
    setNotes((prev) =>
      prev.map((n) =>
        n.id === updatedNote.id ? { ...updatedNote, updatedAt: Date.now() } : n
      )
    );
    showToast('Note saved');
  };

  const handleDeleteNote = (id) => {
    setNotes((prev) => prev.filter((n) => n.id !== id));
    const remaining = notes.filter((n) => n.id !== id);
    setActiveId(remaining.length > 0 ? remaining[0].id : null);
    showToast('Note deleted');
  };

  return (
    <div className="app-container">
      <div className="app-inner">
        {/* Top Bar */}
        <div className="top-bar">
          <h1 className="app-title">my notes</h1>
          <span className="note-count">
            {notes.length} {notes.length === 1 ? 'note' : 'notes'}
          </span>
        </div>

        {/* Search + New */}
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search notes…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="search-input"
          />
          <button className="btn-new" onClick={handleNewNote}>
            + New note
          </button>
        </div>

        {/* Layout */}
        <div className="layout">
          <Sidebar
            notes={filteredNotes}
            activeId={activeId}
            onSelect={handleSelectNote}
          />
          <Editor
            note={activeNote}
            onSave={handleSaveNote}
            onDelete={handleDeleteNote}
          />
        </div>
      </div>

      <Toast message={toast} />
    </div>
  );
}
