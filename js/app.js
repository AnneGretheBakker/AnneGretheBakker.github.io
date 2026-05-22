import {toDutch} from "./toDutch.js";
import {toEnglish} from "./toEnglish.js";

/**
 * Makes every icon plus its text clickable and open the correct window
 */
document.addEventListener('click', (e) => {
  const clickable = e.target.closest('.iconClick');
  if (!clickable) return;

  e.stopPropagation();

  const iconDiv = clickable.closest('.icon');
  if (!iconDiv) return;

  const windowId = iconDiv.dataset.window;

  if (windowId === 'water' || windowId === "game" || windowId === "task") {
    const imgWindow = document.getElementById(`window-${windowId}-img`);
    if (imgWindow) imgWindow.style.display = 'block';
  }
  else if (windowId === "about") {
    const selfieWindow = document.getElementById(`window-selfie`);
    if (selfieWindow) selfieWindow.style.display = 'block';
  }

  const targetWindow = document.getElementById(`window-${windowId}`);
  if (targetWindow) {
    targetWindow.style.display = 'block';
    bringToFront(targetWindow);
  }

  const navlinks = document.querySelector(".nav-links");
  const imgNav = getImgNav(windowId);
  if (imgNav && !document.getElementById(`${windowId}Nav`)) {
    navlinks.innerHTML += `<img src="/img/${imgNav}.png" height="50px" class="navClick" id="${windowId}Nav">`;
  }
});

const startButton = document.querySelector('#startButton');
const changeLanguage = document.querySelector('#changeLanguage');
const toggleButton = document.getElementById('toggleLanguage');
let currentLanguage = 'en'; // 'en' of 'nl'

function updateLanguageUI() {
  if (currentLanguage === 'en') {
    toDutch();
    toggleButton.textContent = 'Verander de taal naar Engels';
  } else {
    toEnglish();
    toggleButton.textContent = 'Change language to Dutch';
  }
}

toggleButton.addEventListener('click', () => {
  updateLanguageUI();
  currentLanguage = (currentLanguage === 'en') ? 'nl' : 'en';
});

startButton.addEventListener('click', (e) => {
  e.stopPropagation();
  changeLanguage.style.display = 'block';
})

document.addEventListener('click', (event) => {
  const startBtn = event.target.closest('#startButton');
  const isInsideChangeLanguage = changeLanguage && changeLanguage.contains(event.target);

  if (startBtn) {
    changeLanguage.style.display = 'block';
    return;
  }

  if (!isInsideChangeLanguage) {
    changeLanguage.style.display = 'none';
  }
});

function getImgNav(windowId) {
  if (windowId === "about") {
    return "computer";
  }
  else if (windowId === "school") {
    return "folder";
  }
  else if (windowId === "personal") {
    return "internet";
  }
  else if (windowId === "resume") {
    return "notepad";
  }
  else if (windowId === "contact") {
    return "help";
  }
  else if (windowId === "water" || windowId === "task" || windowId === "game") {
    return windowId;
  }
  else {
    return "";
  }
}

document.querySelector('.nav-links').addEventListener('click', (e) => {
  const navIcon = e.target.closest('.navClick');
  if (!navIcon) return;
  e.stopPropagation();
  const windowId = navIcon.id.replace('Nav', ''); // "about" from "aboutNav"
  const windowElement = document.getElementById(`window-${windowId}`);
  if (windowElement) bringToFront(windowElement);
});

/**
 * Brings the window to the front by changing the zIndex of other windows to 1000 and the zIndex of this window to 1001
 *
 * @param win The window to bring to the front
 */
function bringToFront(win) {
  if (!win) return;
  document.querySelectorAll('.window').forEach(w => {
    w.style.zIndex = 1000;
  });
  win.style.zIndex = 1001;
}

/**
 * Changes the display of the window to none when clicked on the close button
 */
document.addEventListener('click', (e) => {
  const closeBtn = e.target.closest('.window-close');
  if (!closeBtn) return;

  const windowDiv = closeBtn.closest('.window');
  const windowId = windowDiv.id.replace('window-', '');
  windowDiv.style.display = 'none';

  const navIcon = document.getElementById(`${windowId}Nav`);
  if (navIcon) navIcon.remove();
});

/**
 * Makes the window draggable
 *
 * @param win The window to drag
 */
let dragTarget = null;
let dragOffsetX = 0, dragOffsetY = 0;

document.addEventListener('mousedown', (e) => {
  const bar = e.target.closest('.window-bar');
  if (!bar) return;
  const win = bar.closest('.window');
  if (!win) return;

  // Start slepen
  dragTarget = win;
  dragOffsetX = e.clientX - win.offsetLeft;
  dragOffsetY = e.clientY - win.offsetTop;
  win.style.position = 'absolute';
  bringToFront(win);

  e.preventDefault(); // voorkom tekstselectie tijdens slepen
});

document.addEventListener('mousemove', (e) => {
  if (!dragTarget) return;
  let newLeft = e.clientX - dragOffsetX;
  let newTop = e.clientY - dragOffsetY;
  dragTarget.style.left = newLeft + 'px';
  dragTarget.style.top = newTop + 'px';
});

document.addEventListener('mouseup', () => {
  dragTarget = null;
});

/**
 * Brings any window to the front when clicked anywhere inside it.
 */
document.addEventListener('mousedown', (e) => {
  if (e.target.closest('.window-close')) return;
  const win = e.target.closest('.window');
  if (win) bringToFront(win);
});

// Game slide show array
const gameImages = [
  '/img/gameimg1.png',
  '/img/gameimg2.png',
  '/img/gameimg3.jpg'
];

// Set first image as current image
let currentImageIndex = 0;

const gameWindow = document.getElementById('window-game-img');
const slideshowImg = document.getElementById('game-slideshow');

/**
 * Updates game image to current image
 */
function updateGameImage() {
  if (slideshowImg) {
    slideshowImg.src = gameImages[currentImageIndex];
  }
}

/**
 * Initialize slideshow by adding event listeners to buttons
 */
function initGameSlideshow() {
  const prevBtn = document.querySelector('#window-game-img .prev-btn');
  const nextBtn = document.querySelector('#window-game-img .next-btn');

  if (prevBtn && nextBtn && slideshowImg) {
    // Previous button
    prevBtn.addEventListener('click', () => {
      currentImageIndex = (currentImageIndex - 1 + gameImages.length) % gameImages.length;
      updateGameImage();
    });

    // Next button
    nextBtn.addEventListener('click', () => {
      currentImageIndex = (currentImageIndex + 1) % gameImages.length;
      updateGameImage();
    });
  }
}

/**
 * Initialize game slideshow when everything is loaded
 */
document.addEventListener('DOMContentLoaded', initGameSlideshow);

// Task slide show array
const taskImages = [
  '/img/taskimg1.png',
  '/img/taskimg2.png'
];

// Set first image as current image
let currentImageIndexTask = 0;

const taskWindow = document.getElementById('window-task-img');
const slideshowImgTask = document.getElementById('task-slideshow');

/**
 * Updates task image to current image
 */
function updateTaskImage() {
  if (slideshowImgTask) {
    slideshowImgTask.src = taskImages[currentImageIndexTask];
  }
}

/**
 * Initialize slideshow by adding event listeners to buttons
 */
function initTaskSlideshow() {
  const prevBtn = document.querySelector('#window-task-img .prev-btnT');
  const nextBtn = document.querySelector('#window-task-img .next-btnT');

  if (prevBtn && nextBtn && slideshowImg) {
    // Previous button
    prevBtn.addEventListener('click', () => {
      currentImageIndexTask = (currentImageIndexTask - 1 + taskImages.length) % taskImages.length;
      updateTaskImage();
    });

    // Next button
    nextBtn.addEventListener('click', () => {
      currentImageIndexTask = (currentImageIndexTask + 1) % taskImages.length;
      updateTaskImage();
    });
  }
}

/**
 * Initialize task slideshow when everything is loaded
 */
document.addEventListener('DOMContentLoaded', initTaskSlideshow);
