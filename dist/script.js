document.addEventListener('DOMContentLoaded', () => {
  
  var parent = document.querySelector('.splitview'),
               topPanel = parent.querySelector('.top'),
               handle = parent.querySelector('.handle'),
               skewHack = 0, delta = 0;
  
  if (parent.className.indexOf('skewed') != -1) {
    skewHack = 1000;
  }
  
  parent.addEventListener('mousemove', function(event) {
    
    /* Get the delta between the
       mouse ptr. and central pt. */
    delta = (event.clientX - window.innerWidth / 2) * 0.5;
    
    /* Move the handle according
       to click & mouse pos. */
    handle.style.left = event.clientX + delta + 'px';
    
    /* Adjust the top panel width */
    topPanel.style.width = event.clientX + skewHack + delta + 'px';
  });
});