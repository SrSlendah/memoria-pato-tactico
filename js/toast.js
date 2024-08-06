document.addEventListener("DOMContentLoaded", function() {
    const image = document.getElementById('abandonado');
    const toast = document.getElementById('toast');
  
    image.addEventListener('touchstart', function() {
      showToast();
    });
  
    function showToast() {
      toast.classList.add('show');
      setTimeout(function() {
        toast.classList.remove('show');
      }, 3000);
    }
  });
  