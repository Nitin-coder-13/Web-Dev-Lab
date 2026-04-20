import React from 'react';
import './Sidebar.css';

function fmtDate(ts) {
  return new Date(ts).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}

function preview(body) {
  return body.replace(/\n/g, ' ').slice(0, 50) || 'Empty note';
}

export default function Sidebar({ notes, activeId, onSelect }) {
  if (notes.length === 0) {
    return (
      <div className="sidebar">
        <div className="sidebar-empty">No notes found</div>
      </div>
    );
  }

  return (
    <div className="sidebar">
      {notes.map((note) => (
        <div
          key={note.id}
          className={`note-item ${note.id === activeId ? 'active' : ''}`}
          onClick={() => onSelect(note.id)}
        >
          <div className="note-item-title">{note.title || 'Untitled'}</div>
          <div className="note-item-preview">{preview(note.body)}</div>
          <div className="note-item-date">{fmtDate(note.updatedAt)}</div>
        </div>
      ))}
    </div>
  );
}
