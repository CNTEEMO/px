
document.addEventListener('contextmenu', function(event) {
  event.preventDefault(); 
}, false);


document.addEventListener('keydown', function(event) {

  if (event.keyCode === 123) {
    event.preventDefault();
  }

  if (event.ctrlKey && event.shiftKey && event.keyCode === 73) {
    event.preventDefault();
  }
 
  if (event.ctrlKey && event.shiftKey && event.keyCode === 74) {
    event.preventDefault();
  }

  if (event.ctrlKey && event.keyCode === 85) {
    event.preventDefault();
  }
}, false);


document.addEventListener('selectstart', function(event) {
  event.preventDefault(); 
}, false);

document.addEventListener('copy', function(event) {
  event.preventDefault();
}, false);


document.addEventListener('dragstart', function(event) {
  event.preventDefault(); 
}, false);
