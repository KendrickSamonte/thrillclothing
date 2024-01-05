document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

let cart = [];

const checkoutModal = document.getElementById('checkoutModal');
const checkoutItemsElement = document.getElementById('checkout-items');
const totalPriceElement = document.getElementById('totalPrice');

const cartElement = document.querySelector('.cart');


const storedCart = localStorage.getItem('cart');
if (storedCart) {
  cart = JSON.parse(storedCart);
  updateCart();
}

function addToCart() {
  const productName = 'Secret Sauce'; 
  const productImage = '/medias/1.png'; 
  const productPrice = '600';

  const size = document.getElementById('size').value;
  const quantity = parseInt(document.getElementById('quantity').value);

  const item = {
    name: productName,
    image: productImage,
    price: productPrice,
    size: size,
    quantity: quantity,
  };

  cart.push(item);

  localStorage.setItem('cart', JSON.stringify(cart));

  updateCart();
}

function addToCartTwo() {
    const productName = 'Secret Sauce'; 
    const productImage = '/medias/2.png'; 
    const productPrice = '600';
  
    const size = document.getElementById('size').value;
    const quantity = parseInt(document.getElementById('quantity').value);
  
    const item = {
      name: productName,
      image: productImage,
      price: productPrice,
      size: size,
      quantity: quantity,
    };
  
    cart.push(item);
  
    localStorage.setItem('cart', JSON.stringify(cart));
  
    updateCart();
  }

  function addToCartThree() {
    const productName = 'Secret Sauce'; 
    const productImage = '/medias/3.png'; 
    const productPrice = '600';
  
    const size = document.getElementById('size').value;
    const quantity = parseInt(document.getElementById('quantity').value);
  
    const item = {
      name: productName,
      image: productImage,
      price: productPrice,
      size: size,
      quantity: quantity,
    };
  
    cart.push(item);
  
    localStorage.setItem('cart', JSON.stringify(cart));
  
    updateCart();
  }

  function addToCartFour() {
    const productName = 'Secret Sauce'; 
    const productImage = '/medias/4.png'; 
    const productPrice = '600';
  
    const size = document.getElementById('size').value;
    const quantity = parseInt(document.getElementById('quantity').value);
  
    const item = {
      name: productName,
      image: productImage,
      price: productPrice,
      size: size,
      quantity: quantity,
    };
  
    cart.push(item);
  
    localStorage.setItem('cart', JSON.stringify(cart));
  
    updateCart();
  }

  function addToCartFive() {
    const productName = 'Secret Sauce'; 
    const productImage = '/medias/5.png'; 
    const productPrice = '600';
  
    const size = document.getElementById('size').value;
    const quantity = parseInt(document.getElementById('quantity').value);
  
    const item = {
      name: productName,
      image: productImage,
      price: productPrice,
      size: size,
      quantity: quantity,
    };
  
    cart.push(item);
  
    localStorage.setItem('cart', JSON.stringify(cart));
  
    updateCart();
  }

  function addToCartSix() {
    const productName = 'Secret Sauce'; 
    const productImage = '/medias/6.png'; 
    const productPrice = '600';
  
    const size = document.getElementById('size').value;
    const quantity = parseInt(document.getElementById('quantity').value);
  
    const item = {
      name: productName,
      image: productImage,
      price: productPrice,
      size: size,
      quantity: quantity,
    };
  
    cart.push(item);
  
    localStorage.setItem('cart', JSON.stringify(cart));
  
    updateCart();
  }

  function addToCartSeven() {
    const productName = 'Secret Sauce'; 
    const productImage = '/medias/7.png'; 
    const productPrice = '600';
  
    const size = document.getElementById('size').value;
    const quantity = parseInt(document.getElementById('quantity').value);
  
    const item = {
      name: productName,
      image: productImage,
      price: productPrice,
      size: size,
      quantity: quantity,
    };
  
    cart.push(item);
  
    localStorage.setItem('cart', JSON.stringify(cart));
  
    updateCart();
  }

  function addToCartEight() {
    const productName = 'Secret Sauce'; 
    const productImage = '/medias/8.png'; 
    const productPrice = '600';
  
    const size = document.getElementById('size').value;
    const quantity = parseInt(document.getElementById('quantity').value);
  
    const item = {
      name: productName,
      image: productImage,
      price: productPrice,
      size: size,
      quantity: quantity,
    };
  
    cart.push(item);
  
    localStorage.setItem('cart', JSON.stringify(cart));
  
    updateCart();
  }

  function addToCartNine() {
    const productName = 'Secret Sauce'; 
    const productImage = '/medias/9.png'; 
    const productPrice = '600';
  
    const size = document.getElementById('size').value;
    const quantity = parseInt(document.getElementById('quantity').value);
  
    const item = {
      name: productName,
      image: productImage,
      price: productPrice,
      size: size,
      quantity: quantity,
    };
  
    cart.push(item);
  
    localStorage.setItem('cart', JSON.stringify(cart));
  
    updateCart();
  }


  function addToCartTen() {
    const productName = 'Secret Sauce'; 
    const productImage = '/medias/10.png'; 
    const productPrice = '600';
  
    const size = document.getElementById('size').value;
    const quantity = parseInt(document.getElementById('quantity').value);
  
    const item = {
      name: productName,
      image: productImage,
      price: productPrice,
      size: size,
      quantity: quantity,
    };
  
    cart.push(item);
  
    localStorage.setItem('cart', JSON.stringify(cart));
  
    updateCart();
  }

  function addToCartEleven() {
    const productName = 'Secret Sauce'; 
    const productImage = '/medias/11.png'; 
    const productPrice = '600';
  
    const size = document.getElementById('size').value;
    const quantity = parseInt(document.getElementById('quantity').value);
  
    const item = {
      name: productName,
      image: productImage,
      price: productPrice,
      size: size,
      quantity: quantity,
    };
  
    cart.push(item);
  
    localStorage.setItem('cart', JSON.stringify(cart));
  
    updateCart();
  }

  function addToCartTwelve() {
    const productName = 'Secret Sauce'; 
    const productImage = '/medias/12.png'; 
    const productPrice = '600';
  
    const size = document.getElementById('size').value;
    const quantity = parseInt(document.getElementById('quantity').value);
  
    const item = {
      name: productName,
      image: productImage,
      price: productPrice,
      size: size,
      quantity: quantity,
    };
  
    cart.push(item);
  
    localStorage.setItem('cart', JSON.stringify(cart));
  
    updateCart();
  }


function updateCart() {
  const cartItemsElement = document.getElementById('cart-items');
  cartItemsElement.innerHTML = '';

  cart.forEach(item => {
    const li = document.createElement('li');
    li.innerHTML = `
      <img src="${item.image}" alt="${item.name}" width="50">
      <p>${item.name} <span>Size:</span> ${item.size}, <span>Quantity:</span> ${item.quantity}, <span>Total:</span> ₱${(item.price * item.quantity).toFixed(2)}</p>
    `;
    cartItemsElement.appendChild(li);
  });

  updateCartBadge();
}

function updateCartBadge() {
  const cartBadge = document.querySelector('.cart::before');
  cartBadge.textContent = cart.length;
}

function closeCart() {
    document.querySelector('.cart').style.display = 'none';
  }

  
function updateCheckoutModal() {
    checkoutItemsElement.innerHTML = '';
    let total = 0;
  
    cart.forEach(item => {
      const li = document.createElement('li');
      li.innerHTML = `
      <div class="checkPage">
        <img class="checkout-img" src="${item.image}" alt="${item.name}" width="50">
        <p class="checkout-p"> <span>${item.name}</span> <br><span>Size:</span> ${item.size}, <br><span>Quantity:</span>
         ${item.quantity}, <br><span>Total:</span> ₱${(item.price * item.quantity).toFixed(2)}</p>
      </div>
      `;
      checkoutItemsElement.appendChild(li);
  
      total += item.price * item.quantity;
    });
  
    totalPriceElement.textContent = total.toFixed(2);
  }
  
  function openCheckout() {
    updateCheckoutModal();
    checkoutModal.style.display = 'block';
  }
  
  function closeCheckout() {
    checkoutModal.style.display = 'none';
  }
  
  function processCheckout() {
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
  
  
    alert(`Order placed!\nName: ${name}\nAddress: ${address}\nTotal: ₱${totalPriceElement.textContent}`);
  
    cart = [];
    localStorage.removeItem('cart');
    updateCart();
    closeCheckout();
  }

  function toggleCart() {
    cartElement.style.display = (cartElement.style.display === 'none' || cartElement.style.display === '') ? 'grid' : 'none';
  }

  function removeItem(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
  }
  
  
  document.getElementById('cart-items').addEventListener('click', function (event) {
    const removeButton = event.target.closest('.remove-item');
    if (removeButton) {
      const index = parseInt(removeButton.getAttribute('data-index'));
      removeItem(index);
    }
  });
  

  function updateCart() {
    const cartItemsElement = document.getElementById('cart-items');
    cartItemsElement.innerHTML = '';
  

    cart.forEach((item, index) => {
      const li = document.createElement('li');
      li.innerHTML = `
        <img src="${item.image}" alt="${item.name}" width="90">
        <p>${item.name} <br><span>Size:</span> ${item.size}, <br><span>Quantity:</span> ${item.quantity},<br>
        <span>Total:</span> ₱${(item.price * item.quantity).toFixed(2)}</p>
        <button class="remove-item" data-index="${index}">Remove</button>
      `;
      cartItemsElement.appendChild(li);
    });
  
    updateCheckoutModal();
  }
  
  
  