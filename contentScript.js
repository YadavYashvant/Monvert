document.addEventListener('selectionchange', function () {
    const selection = window.getSelection().toString().trim();
    if (selection && !isNaN(parseFloat(selection))) {
      browser.runtime.sendMessage({ selection: parseFloat(selection) });
    }
  });
  