// /js/main.js
import loadComponent from './utils/loadComponent.js';
import { initHeader } from './header.js';

const name = "Neeru Uppalapati";
let i = 0;
const speed = 50; // Typing speed in milliseconds

const typeWriter = () => {
  if (i < name.length) {
    document.getElementById("name").innerHTML += name.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  } else {
    // Remove caret after typing is complete
    document.getElementById("name").style.borderRight = 'none';
    // Start second typing animation
    typeWriter2();
  }
};

const typeWriter2 = () => {
  const text = "Engineering @ IMC Trading";
  let j = 0;
  const speed2 = 35; // Typing speed in milliseconds for second animation

  const typeWriterHelper = () => {
    if (j < text.length) {
      document.getElementById("study").innerHTML += text.charAt(j);
      j++;
      setTimeout(typeWriterHelper, speed2);
    }
  };

  typeWriterHelper();
};

window.addEventListener('DOMContentLoaded', async () => {
  try {
    // Load Header Component
    await loadComponent('header', 'components/header.html');
    initHeader();

    // Start Typing Animation
    typeWriter();
  } catch (error) {
    console.error('Error during initialization:', error);
  }
});
