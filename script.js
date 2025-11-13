const button = document.getElementById('calc');
const ansDiv = document.getElementById('ans');

button.addEventListener('click', () => {
  const prices = document.querySelectorAll('.price');
  let total = 0;

  prices.forEach(p => {
    const val = parseFloat(p.innerText.trim());
    if (!isNaN(val)) {
      total += val;
    }
  });

  ansDiv.innerText = total;
});
