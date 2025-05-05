function scrollExploreMore(direction, containerId) {
  const container = document.getElementById(containerId);
  const scrollAmount = 320;
  container.scrollBy({
    left: direction === 'left' ? -scrollAmount : scrollAmount,
    behavior: 'smooth'
  });
}

const faqButtons = document.querySelectorAll('.faq-question');

faqButtons.forEach(button => {
  button.addEventListener('click', () => {
    const currentAnswer = button.nextElementSibling;
    const currentPlus = button.querySelector('.plus-sign');
    const isVisible = currentAnswer.classList.contains('show');

    faqButtons.forEach(btn => {
      const answer = btn.nextElementSibling;
      const plusSign = btn.querySelector('.plus-sign');
      answer.classList.remove('show');
      plusSign.textContent = '+';
    });

    if (!isVisible) {
      currentAnswer.classList.add('show');
      currentPlus.textContent = '−';
    }
  });
});

const backToTopButton = document.getElementById("backToTop");

window.onscroll = function () {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
};

backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
