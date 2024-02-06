document.addEventListener('DOMContentLoaded', function () {
    const dollarInput = document.getElementById('dollarAmount');
    const rupeeOutput = document.getElementById('rupeeAmount');
  
    dollarInput.addEventListener('input', function () {
      const dollarAmount = parseFloat(dollarInput.value);
      if (!isNaN(dollarAmount)) {
        const rupeeAmount = dollarAmount * 74.25; // Assuming 1 dollar = 74.25 rupees
        rupeeOutput.textContent = rupeeAmount.toFixed(2);
      } else {
        rupeeOutput.textContent = '0';
      }
    });
  });
  