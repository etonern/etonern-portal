//表示を切り替える
const popupTriggers = document.querySelectorAll('.popup-trigger');
const popups = document.querySelectorAll('.popup');

popupTriggers.forEach((popupTrigger, index) => {
  popupTrigger.addEventListener('click', () => {
    popups[index].style.display = 'flex';
  });
});
//
const closeBtns = document.querySelectorAll('.close-btn');

closeBtns.forEach((closeBtn, index) => {
  closeBtn.addEventListener('click', () => {
    popups[index].style.display = 'none';
  });
});

const popupsContainer = document.querySelector('.popups-container');

popupsContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('popup')) {
    e.target.style.display = 'none';
  }
});
