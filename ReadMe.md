# ✅ To-Do List Web App

A clean, dynamic To-Do List built with **HTML**, **CSS**, and **Vanilla JavaScript** — no frameworks, no libraries.

---

## 📌 Task Info

| Field | Details |
|-------|---------|
| Internship | ElevateLabs Web Development Internship |
| Task | Task 2 — Build a To-Do List Web App |
| Tools Used | VS Code, Chrome Browser, Live Server |

---

## 🚀 Features

- ➕ **Add Tasks** — Type a task and press Enter or click "Add"
- ✅ **Mark Complete** — Click the checkbox to toggle a task as done
- 🗑️ **Delete Tasks** — Remove individual tasks with the × button
- 🔍 **Filter Tasks** — View All, Active, or Completed tasks
- 🧹 **Clear Completed** — Bulk-remove all finished tasks with one click
- 🔢 **Live Counter** — Shows how many tasks are still pending
- ⚡ **Instant UI Updates** — No page reload needed

---

## 📁 File Structure

```
todo-app/
├── index.html   → App structure and layout
├── style.css    → Styling, dark theme, animations
├── script.js    → All JavaScript logic
└── README.md    → Project documentation
```

---

## 🛠️ How to Run

1. Clone or download this repository
2. Open the folder in **VS Code**
3. Right-click `index.html` → **Open with Live Server**
4. The app opens in your browser at `http://127.0.0.1:5500`

> **No installation required.** Pure HTML/CSS/JS — works in any modern browser.

---

## 🧠 Key Concepts Used

| Concept | Where Used |
|---------|------------|
| DOM Manipulation | Creating/removing `<li>` elements dynamically |
| Event Listeners | Add button, Enter key, filter buttons |
| Event Delegation | Single listener on `<ul>` handles all task clicks |
| ES6 Features | `const`, `let`, arrow functions, template literals, array methods |
| Array Methods | `.push()`, `.filter()`, `.find()` for task state management |
| CSS Transitions | Smooth animations on task add, hover, and complete toggle |
| Dynamic Classes | `.completed` toggled via `classList` |

---

## 📸 App Preview

> Dark-themed UI with gold accents, smooth slide-in animations, and a live task counter.

---

## 💡 Interview Q&A (Quick Reference)

**1. How do you select elements in the DOM?**
Using `getElementById`, `querySelector`, or `querySelectorAll`.

**2. What are event listeners?**
Functions attached to elements that run when a specified event (like `click` or `keydown`) occurs.

**3. Explain event delegation.**
Attaching a single event listener to a parent element to handle events from its children — used here on the `<ul>` to handle check and delete clicks.

**4. How do you prevent default behavior in JS?**
By calling `event.preventDefault()` inside the event handler.

**5. `var` vs `let` vs `const`?**
`var` is function-scoped and hoisted. `let` and `const` are block-scoped. `const` cannot be reassigned.

**6. Bubbling vs Capturing?**
Bubbling: events travel from child → parent. Capturing: parent → child. Default is bubbling.

**7. How do you add/remove classes?**
`element.classList.add('class')`, `.remove('class')`, `.toggle('class')`.

**8. What is closure?**
A function that retains access to its outer scope even after the outer function has returned.

**9. Arrow functions?**
A shorter syntax for functions: `const fn = (x) => x * 2`. They don't have their own `this`.

**10. `==` vs `===`?**
`==` checks value with type coercion. `===` checks value AND type (strict equality).

---

Deployed link : https://rethika-2782.github.io/To-do-list-Elevate-labs-task-2-/

## 👤 Author

Rethika S
ElevateLabs Web Development Internship — Task 2
