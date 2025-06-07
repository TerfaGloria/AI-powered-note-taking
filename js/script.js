const arrowIcons = document.querySelectorAll('.arrow-icon');

arrowIcons.forEach((icon) => {
  icon.addEventListener('click', () => {
    const answer = icon.closest('.FQA__secondary--question-1').querySelector('.answer');
    answer.classList.toggle('show-answer');
 } )
})




const showMoreButton = document.querySelector('.testimonials__author-button2 button');
const mobileAuthors = document.querySelector('.mobile');

showMoreButton.addEventListener('click', () => {
  mobileAuthors.classList.toggle('show-more');
  if (mobileAuthors.classList.contains('show-more')) {
    showMoreButton.textContent = 'Show less';
  } else {
    showMoreButton.textContent = 'Show more';
  }
});

