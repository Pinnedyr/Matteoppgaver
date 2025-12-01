document.addEventListener('keydown', function(event) {
  if (event.key === 'Alt') {

    window.close();


    setTimeout(function() {
      if (!window.closed) {
        document.body.innerHTML = '';
        document.title = '';
        window.location.href = 'about:blank';
      }
    }, 50);
  }
});
