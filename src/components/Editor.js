import React, { useState, useEffect } from 'react';
import './Editor.css';

const TAGS = ['personal', 'work', 'ideas', 'todo'];

function fmtDate(ts) {
  return new Date(ts).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}

export default function Editor({ note, onSave, onDelete }) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [tag, setTag] = useState('personal');
  const [confirmDelete, setConfirmDelete] = useState(false);

  // Sync local state when active note changes
  useEffect(() => {
    if (note) {
      setTitle(note.title);
      setBody(note.body);
      setTag(note.tag);
      setConfirmDelete(false);
    }
  }, [note?.id]);

  if (!note) {
    return (
      <div className="editor-panel editor-blank">
        <div className="blank-icon">📓</div>
        <div className="blank-text">Select a note or create a new one</div>
      </div>
    );
  }

  const handleSave = () => {
    onSave({ ...note, title: title.trim(), body, tag });
  };

  const handleDelete = () => {
    if (confirmDelete) {
      onDelete(note.id);
    } else {
      setConfirmDelete(true);
    }
  };

  return (
    <div className="editor-panel">
      {/* Tag Pills */}
      <div className="editor-tags">
        {TAGS.map((t) => (
          <span
            key={t}
            className={`tag ${tag === t ? 'active' : ''}`}
            onClick={() => setTag(t)}
          >
            {t}
          </span>
        ))}
      </div>

      {/* Title */}
      <input
        className="editor-title"
        placeholder="Note title…"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      {/* Body */}
      <textarea
        className="editor-body"
        placeholder="Start writing…"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />

      {/* Actions */}
      <div className="editor-actions">
        {confirmDelete ? (
          <div className="confirm-row">
            <span className="confirm-label">Delete this note?</span>
            <button className="btn-confirm-delete" onClick={handleDelete}>
              Yes, delete
            </button>
            <button className="btn-cancel" onClick={() => setConfirmDelete(false)}>
              Cancel
            </button>
          </div>
        ) : (
          <>
            <button className="btn-delete" onClick={handleDelete}>
              Delete
            </button>
            <span className="editor-meta">edited {fmtDate(note.updatedAt)}</span>
            <button className="btn-save" onClick={handleSave}>
              Save
            </button>
          </>
        )}
      </div>
    </div>
  );
}
