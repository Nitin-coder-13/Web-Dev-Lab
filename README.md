# My Notes App

A single-page notes application built with React.js. Supports creating, viewing, editing, and deleting notes.

## Features

- View all notes in a sidebar list
- Create new notes with a single click
- Edit title, body, and tag for any note
- Delete notes with a confirmation step
- Search notes by title or body in real time
- Toast notifications for save and delete actions
- Light/dark mode via CSS media query

## Prerequisites

- [Node.js](https://nodejs.org/) v16 or higher
- npm (comes bundled with Node.js)

## Setup & Running in VS Code

### 1. Open the project
Open the `notes-app` folder in VS Code:
```
File → Open Folder → select notes-app
```

### 2. Open the integrated terminal
```
Terminal → New Terminal   (or Ctrl + `)
```

### 3. Install dependencies
```bash
npm install
```

### 4. Start the development server
```bash
npm start
```

The app will open automatically at **http://localhost:3000**

## Project Structure

```
notes-app/
├── public/
│   └── index.html          # HTML entry point
├── src/
│   ├── components/
│   │   ├── Editor.js       # Note editor (title, body, tags, save/delete)
│   │   ├── Editor.css
│   │   ├── Sidebar.js      # Notes list panel
│   │   ├── Sidebar.css
│   │   ├── Toast.js        # Notification toast
│   │   └── Toast.css
│   ├── App.js              # Root component + state management
│   ├── App.css
│   ├── index.js            # React entry point
│   └── index.css           # Global styles + CSS variables
└── package.json
```
