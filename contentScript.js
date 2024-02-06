document.addEventListener('selectionchange', function () {
    const selection = window.getSelection().toString().trim();
    if (selection && !isNaN(parseFloat(selection))) {
      browser.runtime.sendMessage({ selection: parseFloat(selection) });
    }
  });
  
  document.body.addEventListener('input', function(event) {
    const text = event.target.value.toLowerCase();
    if (text.includes('inr') || text.includes('dollar')) {
      const modifiedText = text.replace('inr', 'convert INR into dollar')
                               .replace('dollar', 'convert dollar into INR');
      event.target.value = modifiedText;
    }
  });
  