const nav = document.querySelector('#mainNav');
document.querySelector('#menuButton').addEventListener('click', () => nav.classList.add('open'));
document.querySelector('#navClose').addEventListener('click', () => nav.classList.remove('open'));
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => nav.classList.remove('open')));

document.querySelectorAll('.fav').forEach(button => {
  button.addEventListener('click', () => {
    const active = button.classList.toggle('active');
    button.setAttribute('aria-pressed', String(active));
    button.textContent = active ? '♥' : '♡';
  });
});

const area = document.querySelector('#area');
const brickType = document.querySelector('#brickType');
const brickCount = document.querySelector('#brickCount');
function calculateBricks() {
  const count = Math.ceil((Number(area.value) || 0) * Number(brickType.value) * 1.07);
  brickCount.textContent = count.toLocaleString('fa-IR');
}
area.addEventListener('input', calculateBricks);
brickType.addEventListener('change', calculateBricks);
calculateBricks();

const quoteForm = document.querySelector('#quoteForm');
const formFields = document.querySelector('#formFields');
const formSuccess = document.querySelector('#formSuccess');
quoteForm.addEventListener('submit', event => {
  event.preventDefault();
  formFields.hidden = true;
  formSuccess.hidden = false;
});
document.querySelector('#resetForm').addEventListener('click', () => {
  quoteForm.reset();
  formFields.hidden = false;
  formSuccess.hidden = true;
});
