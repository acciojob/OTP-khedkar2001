const inputs = document.querySelectorAll('.code');

inputs.forEach((input, index) => {
  input.addEventListener('keydown', (e) => {
    // Allow only digits, backspace, tab, arrows
    if (
      (e.key >= '0' && e.key <= '9') ||
      e.key === 'Backspace' ||
      e.key === 'ArrowLeft' ||
      e.key === 'ArrowRight' ||
      e.key === 'Tab'
    ) {
      // allow keys
    } else {
      e.preventDefault();
    }
  });

  input.addEventListener('input', (e) => {
    const value = e.target.value;
    if (value.length > 1) {
      e.target.value = value.slice(-1);
    }
    if (value.length === 1 && index < inputs.length - 1) {
      inputs[index + 1].focus();
    }
  });

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Backspace') {
      e.preventDefault();
      if (input.value) {
        input.value = '';
      } else if (index > 0) {
        inputs[index - 1].focus();
        inputs[index - 1].value = '';
      }
    } else if (e.key === 'ArrowLeft' && index > 0) {
      inputs[index - 1].focus();
    } else if (e.key === 'ArrowRight' && index < inputs.length - 1) {
      inputs[index + 1].focus();
    }
  });
});

window.onload = () => {
  inputs[0].focus();
};
