# TEACHERS-CARD-GREETINGS


(❁´◡`❁) 🌐
LIVE VIEW 
 https://cortesjamesandrew86-ship-it.github.io/TEACHERS-CARD-GREETINGS/

 <div align="center">

# ✦ Teachers’ Day Greeting Card

### An interactive, animated message card made with appreciation for **Sir Randy Bello**

A small web project with a book-style opening animation, a typewriter message, a portrait, and a custom fire cursor.

<br />

![HTML](https://img.shields.io/badge/HTML5-Structure-e76f35?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-Design-3976c6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-Interaction-e7c34b?style=for-the-badge&logo=javascript&logoColor=222222)
![Responsive](https://img.shields.io/badge/Responsive-Mobile%20%26%20Desktop-3a9b73?style=for-the-badge)

</div>

---

## 🌟 About the Project

This project is a personalized **Teachers’ Day greeting card webpage** created to show gratitude to a teacher. Instead of a regular static card, it presents the greeting as a digital book. Visitors can click the cover to open the card and reveal a message that appears with a typing effect.

The design uses a dark navy background, warm gold details, and cream-colored pages to give the card a polished and professional look.

## ✨ Features

- **Animated book cover** — click the cover to open or close the greeting card.
- **Typing message effect** — the personal greeting is typed onto the inside page when the card opens.
- **Teacher portrait** — displays the provided photo in a decorative circular frame.
- **Custom fire cursor** — a small flame follows the mouse pointer on supported desktop devices.
- **Responsive layout** — adapts to smaller screens and mobile devices.
- **Interactive feedback** — a short notification appears when the card is opened.
- **Reduced-motion support** — respects the device preference for reduced animation.
- **Easy to customize** — edit the greeting, teacher’s name, colors, and layout in the project files.

## 🖥️ Preview

The page includes a title section, an interactive book card, a teacher portrait and appreciation section, and a simple footer.

> **Interaction:** Open the webpage and click the book cover to reveal the inside message. Click it again to close the card.

## 🧰 Built With

| Technology | Purpose |
|---|---|
| HTML5 | Page structure and content |
| CSS3 | Layout, colors, responsive styling, and book/cursor effects |
| JavaScript | Book interaction, typing animation, notification, and cursor movement |
| Google Fonts | DM Sans and Playfair Display typography |

No framework or package installation is required.

## 📁 Project Structure

```text
teachers-day-message-card/
│
├── index.html
├── style.css
├── script.js
└── assets/
    └── randy-bello.jpg
```

- `index.html` — contains the card content and page structure.
- `style.css` — controls the visual design, responsive layout, and animations.
- `script.js` — manages the opening/closing interaction, typewriter effect, and fire cursor.
- `assets/randy-bello.jpg` — the teacher portrait shown on the page.

## 🚀 Getting Started

### 1. Download or clone the project

Download the project files and place them in one folder, keeping the `assets` folder and its image in the same structure shown above.

### 2. Open the webpage

Open `index.html` in a modern web browser. You can also use **Live Server** in Visual Studio Code while editing.

### 3. Enjoy the card

Click the book cover to open the greeting. The message will begin typing after the cover animation starts.

## 🎨 Customization

### Change the greeting message

Open `script.js` and edit the `message` text:

```js
const message = "Your personalized Teachers’ Day message goes here.";
```

Keep the message inside quotation marks.

### Change the teacher’s name

In `index.html`, update the name wherever it appears, including the inside greeting, cover, and appreciation section.

### Change the colors

Open `style.css` and adjust the variables near the top of the file:

```css
:root {
  --navy: #101b2b;
  --navy-soft: #18283d;
  --cream: #f7f2e8;
  --paper: #fffdf7;
  --gold: #d6ad69;
  --gold-light: #f0d9a7;
  --ink: #273347;
  --muted: #9aa4b1;
}
```

### Replace the portrait

Replace `assets/randy-bello.jpg` with your preferred image and keep the filename the same. If you use a different filename or location, update the image `src` in `index.html` as well.

## 🌐 Browser Support

Designed for current desktop and mobile browsers. The custom fire cursor is intended for devices with a mouse or fine pointer; touch devices use their normal touch interaction.

Google Fonts are loaded online. If the page is opened without internet access, the browser will use the fallback fonts defined in the stylesheet.

## 📌 Notes

- Keep all project files in their expected locations so the CSS, JavaScript, and portrait load correctly.
- The card is a front-end project and does not require a server, database, or account.
- You are welcome to personalize the message and styling for your own greeting.

## 💛 Acknowledgment

Created as a digital expression of respect and appreciation for **Sir Randy Bello** and the teachers who inspire their students every day.

<div align="center">

**Happy Teachers’ Day!** ✦

*Made with gratitude.*

</div>
