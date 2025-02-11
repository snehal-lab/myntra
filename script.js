$(document).ready(function(){
    $("body").ripples({
resolution: 512,
dropRadius: 20,
perturbance: 0.04,
});

  $(".poster").ripples({
resolution: 512,
dropRadius: 20,
perturbance: 0.04,
});
});


// Example JavaScript to handle a basic interaction, such as a search box focus effect.
document.querySelector('.search input').addEventListener('focus', function() {
    this.style.border = '2px solid #f0a';
});

document.querySelector('.search input').addEventListener('blur', function() {
    this.style.border = '1px solid #ccc';
});