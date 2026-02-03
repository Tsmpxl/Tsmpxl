
function activeButtonEl(buttonToggle) {

  const button = document.querySelector(buttonToggle);

  if (button.classList.contains('is-toggled')) {
    button.classList.remove('is-toggled');

  } else {
    const previousButton = document.querySelector('.is-toggled');
      if (previousButton) {
        previousButton.classList.remove('is-toggled');
      };
    button.classList.add('is-toggled');
  }
}



