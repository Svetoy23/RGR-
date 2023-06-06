const imageWrappers = document.querySelectorAll('.image-wrapper'); 

imageWrappers.forEach(wrapper => { 

wrapper.addEventListener('click', () => { 

wrapper.classList.toggle('zoomed'); 

}); 

}); 