# Todo List Project Convention Guide

# General

- `App.css` must be in the `App.jsx` because it has the reset styles, colors and more.

Example:

```javascript
import "./App.css";
import App from "./App.jsx";
```

- Colors:

  - bg: `#ffffff`
  - bg-form: `#d8d8f2`
  - bg-btn: `#8758ff`
  - text-btn: `#fff`
  - bg-list-todo: `#858488`
  - text-input: `#000000`
  - text-list: `#fff`
  - bg-input: `#ffffff`
  - border: `#858488`

- Font:

  - font-family: `"Roboto", sans-serif`
  - width : `100%`

- width:
  - full-width: `300px`
- No inline CSS
- Indentation: 2 spaces

# Project folder structure

```
|--- docs/
|   |--- convention.md
|--- public/
|
|--- src/
|   |
|   |--- components/
|       |--- AddTask/
            |--- AddTaskForm.css
            |--- AddTaskForm.jsx
|       |--- ToDo/
            |--- ToDo.css
            |--- ToDo.jsx
|       |--- UpdateForm
            |--- UpdateForm.css
            |--- UpdateForm.jsx
|   |
|   |--- App.css
|   |--- App.jsx
|   |--- main.jsx
|
|--- index.html
|--- package.json
```

- `docs` folder store the `convention,md` file for the structure of project
- `src` folder contains the folder that need to write code on
  - `components` folder contains all the react components and each component has it's own css file.

Example: in `AddTask` folder, there are `AddTaskForm.jsx` and `AddTaskForm.css`

```
|--- AddTask/
|   |--- AddTaskForm.jsx
|   |--- AddTaskForm.css

```

# Naming Convention:

- Component name: PascalCase.
  - Example: `AddTaskForm.jsx`
- Function name: camelCase.
  - Example: `addTask`
- Variable name: camelCase.
  - Example: `const isCheck`
  - Example: `let isCheck`
- CSS class name: small letter with dash (-).
  - Example: `add-task-form`

# Annotation Rule

- Use `/* comment */` for comment
  - For single line comment use `//`
    - Example: `// comment`
  - For multiple line comment use **jsdoc syntax**.
    - Example:
      ```javascript
      /*
      * multiple line
      * comment
      /*
      ```
