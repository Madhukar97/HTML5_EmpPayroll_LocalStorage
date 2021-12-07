const salary = document.querySelector('#salary');
const output = document.querySelector('.salary-output');
salary.addEventListener('input', function () {
  output.textContent = salary.value;
});

const text = document.querySelector('#name');
const nameError = document.querySelector('.name-error');
text.addEventListener('input', function () {
  let nameRegex = RegExp('^[A-Z]{1}[a-zA-Z]{2,}$');
  if (nameRegex.test(text.value)) {
    nameError.textContent = '';
    let name = text.value;
  }
  else nameError.textContent = 'Name is Incorrect';
});

