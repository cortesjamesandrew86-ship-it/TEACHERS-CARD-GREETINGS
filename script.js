const book = document.getElementById('greetingBook');
const coverButton = document.getElementById('coverButton');
const typedMessage = document.getElementById('typedMessage');
const typingCaret = document.getElementById('typingCaret');
const tapHint = document.querySelector('.tap-hint');
const cursor = document.querySelector('.fire-cursor');
const toast = document.getElementById('toast');

const message = "Thank you for sharing your knowledge, guiding us with patience, and encouraging us to keep learning. Your effort and kindness help make every lesson meaningful. We may not always say it, but we truly appreciate the time and care you give to your students. May you continue to inspire many more minds and hearts. Wishing you happiness, good health, and a wonderful Teachers’ Day!";

let opened = false;
let typingTimer;

function typeMessage() {
  clearInterval(typingTimer);
  typedMessage.textContent = "";
  typingCaret.style.display = "inline-block";
  let index = 0;
  typingTimer = setInterval(() => {
    typedMessage.textContent += message.charAt(index);
    index += 1;
    if (index >= message.length) {
      clearInterval(typingTimer);
      typingCaret.style.display = "none";
    }
  }, 27);
}

coverButton.addEventListener('click', () => {
  opened = !opened;
  book.classList.toggle('open', opened);
  coverButton.setAttribute('aria-label', opened ? 'Close the greeting card' : 'Open the greeting card');
  tapHint.innerHTML = opened
    ? '<span class="tap-icon">↶</span> Click the cover to close the card'
    : '<span class="tap-icon">↗</span> Click the cover to open your message';
  if (opened) {
    window.setTimeout(typeMessage, 650);
    toast.textContent = 'A message made with gratitude for Sir Randy';
    toast.classList.add('show');
    window.setTimeout(() => toast.classList.remove('show'), 2600);
  } else {
    clearInterval(typingTimer);
    typedMessage.textContent = "";
    typingCaret.style.display = 'inline-block';
  }
});

// A small flame follows the pointer on devices with a mouse.
if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
  cursor.style.opacity = '1';
  window.addEventListener('pointermove', (event) => {
    cursor.style.left = `${event.clientX}px`;
    cursor.style.top = `${event.clientY}px`;
  });
  document.querySelectorAll('button, a').forEach((element) => {
    element.addEventListener('pointerenter', () => cursor.classList.add('active'));
    element.addEventListener('pointerleave', () => cursor.classList.remove('active'));
  });
}
