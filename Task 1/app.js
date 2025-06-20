const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('change', function() {
  if (this.checked) {
    document.body.style.background = '#232946';
    document.querySelector('.quiz-card').style.background = '#fff';
    document.querySelector('.quiz-card').style.color = '#232946';
  } else {
    document.body.style.background = '#f4f6fa';
    document.querySelector('.quiz-card').style.background = '#232946';
    document.querySelector('.quiz-card').style.color = '#fff';
  }
});