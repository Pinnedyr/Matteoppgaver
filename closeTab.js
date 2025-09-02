
document.addEventListener('keydown', function(event) {
  if (event.key === 'Alt') {
  
    document.body.innerHTML = '';
    document.title = '';

    window.location.href = 'about:blank';
  }
});


document.addEventListener('keydown', function(event) {
  if (event.key === 'Alt') {
    window.close(); 
  }
});
