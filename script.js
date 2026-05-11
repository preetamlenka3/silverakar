// ADD TO CART ALERT

const cartButtons = document.querySelectorAll('.cart-btn');

cartButtons.forEach(button => {

  button.addEventListener('click', (e) => {

    e.preventDefault();

    alert('Product added to cart!');

  });

});