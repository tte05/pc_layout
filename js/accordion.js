const programAccordions = document.querySelectorAll('.program-line__content');

programAccordions.forEach((programAccordion) => {
  const programTitle = programAccordion.querySelector('.program-line__title');
  const programDescr = programAccordion.querySelector('.program-line__descr');

  programTitle.addEventListener('click', () => {
    programDescr.classList.toggle('active');
  });
});