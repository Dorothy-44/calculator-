const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
let currentInput = '';

function updateDisplay() {
  display.textContent = currentInput || '0';
}

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.dataset.value;
    const action = button.dataset.action;

    if (action === 'clear') {
      currentInput = '';
    } else if (action === 'equals') {
      try {
        const expression = currentInput.replace(/\^/g, '**');
        currentInput = eval(expression).toString();
      } catch {
        currentInput = 'Error';
      }
    } else if (action === 'DEL') {
      currentInput = currentInput.slice(0, -1);
    }
    else if(action === '^' ){
      currentInput = Math.pow(currentInput, '^');
    }
    else if (value) {
      currentInput += value;
    }

    updateDisplay();
  });
});

document.addEventListener('keydown', (e) => {
  const allowed = '0123456789/*-+.^%';
  if (allowed.includes(e.key)) {
    currentInput += e.key;
  } else if (e.key === 'Enter') {
    try {
      const expression = currentInput.replace(/\^/g, '**');
      currentInput = eval(expression).toString();
    } catch {
      currentInput = 'Error';
    }
  } else if (e.key === 'Backspace') {
  currentInput = currentInput.slice(0, -1);
  } 
  else if(action === '^' ){
      currentInput = Math.pow(currentInput, '^');
  }
  else if (e.key.toLowerCase() === 'c') {
    currentInput = '';
  }
  updateDisplay();
});
