document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.button');
  buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
      const target = event.target.closest('button');
      if (target && target.type === 'button') {
        alert('This form is a placeholder. Replace with your booking or contact integration.');
      }
    });
  });
});
