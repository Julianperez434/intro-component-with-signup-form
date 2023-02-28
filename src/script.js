let testInput = document.getElementById('test');
let errorDiv = document.getElementById('errorFirstName');

const testEmpty = (_) => {
  if (testInput.value == '' || testInput.value == 'First Name') {
    testInput.style.border = '0.1em solid var(--main-color)';
    errorFirstName.style.display = 'block';
  } else {
    errorDiv.style.display = 'none';
  }
}
