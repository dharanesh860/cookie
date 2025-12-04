// Initialize cart from localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let cartTotal = 0;

// DOM Elements
const cartModal = document.createElement('div');
cartModal.className = 'cart-modal';
cartModal.innerHTML = `
    <div class="cart-header">
        <h3>Your Cart</h3>
        <button class="close-cart">×</button>
    </div>
    <div class="cart-items"></div>
    <div class="cart-total">
        <p>Total: ₹<span>0.00</span></p>
        <button class="btn btn-primary checkout-btn">Check out</button>
    </div>
`;

document.body.appendChild(cartModal);

// Example products (Replace or add products per page)

// Product data
const products = [
    {
        id: 1,
        name: 'Chocolate cookies',
        price: 450,
        image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        description: 'Our star performer - always gets the biggest laughs!',
        ingredients: 'Premium chocolate chips, butter, flour, sugar, vanilla extract',
        allergens: 'Contains dairy, wheat, and soy'
    },
    {
        id: 2,
        name: 'Dry fruit cookies',
        price: 400,
        image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        description: 'Crunchy, nutty, and full of surprises!',
        ingredients: 'Peanut butter, peanuts, flour, sugar, eggs',
        allergens: 'Contains peanuts, wheat, and eggs'
    },
    {
        id: 3,
        name: 'Almond cookies',
        price: 400,
        image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        description: 'Never the same cookie twice - that\'s our promise!',
        ingredients: 'Oats, raisins, cinnamon, flour, butter',
        allergens: 'Contains wheat and dairy'
    }
    ,
    {
        id: 4,
        name: 'Coffee cookies',
        price: 300,
        image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        description: 'Never the same cookie twice - that\'s our promise!',
        ingredients: 'Oats, raisins, cinnamon, flour, butter',
        allergens: 'Contains wheat and dairy'
    }
    ,
    {
        id: 5,
        name: 'Fresh fruit butter cookies',
        price: 450,
        image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        description: 'Never the same cookie twice - that\'s our promise!',
        ingredients: 'Oats, raisins, cinnamon, flour, butter',
        allergens: 'Contains wheat and dairy'
    }
    ,
    {
        id: 6,
        name: 'Nuts cookies',
        price: 450,
        image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        description: 'Never the same cookie twice - that\'s our promise!',
        ingredients: 'Oats, raisins, cinnamon, flour, butter',
        allergens: 'Contains wheat and dairy'
    }
    ,
    {
        id: 7,
        name: 'Oats cookies',
        price: 450,
        image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        description: 'Never the same cookie twice - that\'s our promise!',
        ingredients: 'Oats, raisins, cinnamon, flour, butter',
        allergens: 'Contains wheat and dairy'
    }
    ,
    {
        id: 8,
        name: 'Ice cream cookies',
        price: 450,
        image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        description: 'Never the same cookie twice - that\'s our promise!',
        ingredients: 'Oats, raisins, cinnamon, flour, butter',
        allergens: 'Contains wheat and dairy'
    },
//Brownies
    {
        id: 9,
        name: 'Chese cake brownie',
        price: 200,
        image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        description: 'Never the same cookie twice - that\'s our promise!',
        ingredients: 'Oats, raisins, cinnamon, flour, butter',
        allergens: 'Contains wheat and dairy'
        
    },
    {
        id: 10,
        name: 'Triple chocolate brownie',
        price: 200,
        image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        description: 'Never the same cookie twice - that\'s our promise!',
        ingredients: 'Oats, raisins, cinnamon, flour, butter',
        allergens: 'Contains wheat and dairy'
    },
    {
        id: 11,
        name: 'Oreo brownie',
        price: 200,
        image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        description: 'Never the same cookie twice - that\'s our promise!',
        ingredients: 'Oats, raisins, cinnamon, flour, butter',
        allergens: 'Contains wheat and dairy'
    },
    {
        id: 12,
        name:'Waffer brownie',
        price: 200,
        image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        description: 'Never the same cookie twice - that\'s our promise!',
        ingredients: 'Oats, raisins, cinnamon, flour, butter',
        allergens: 'Contains wheat and dairy'
    },
    {
        id: 13,
        name: 'Oats brownie',
        price: 200,
        image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        description: 'Never the same cookie twice - that\'s our promise!',
        ingredients: 'Oats, raisins, cinnamon, flour, butter',
        allergens: 'Contains wheat and dairy'
    },
    {
        id: 14,
        name: 'Nuts brownie',
        price: 200,
        image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        description: 'Never the same cookie twice - that\'s our promise!',
        ingredients: 'Oats, raisins, cinnamon, flour, butter',
        allergens: 'Contains wheat and dairy'
    },
    {
        id: 15,
        name: 'Butterscotch brownie',
       price: 200,
        image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        description: 'Never the same cookie twice - that\'s our promise!',
        ingredients: 'Oats, raisins, cinnamon, flour, butter',
        allergens: 'Contains wheat and dairy'
    },
    {
        id: 16,
        name: 'Biscof brownie',
       price: 200,
        image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        description: 'Never the same cookie twice - that\'s our promise!',
        ingredients: 'Oats, raisins, cinnamon, flour, butter',
        allergens: 'Contains wheat and dairy'
    },
    {
        id: 17,
        name: 'Honey chocolate brownie',
        price: 200,
        image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        description: 'Never the same cookie twice - that\'s our promise!',
        ingredients: 'Oats, raisins, cinnamon, flour, butter',
        allergens: 'Contains wheat and dairy'
    },
    {
        id: 18,
        name: 'desicated Coconut with white chocolate brownie',
       price: 200,
        image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        description: 'Never the same cookie twice - that\'s our promise!',
        ingredients: 'Oats, raisins, cinnamon, flour, butter',
        allergens: 'Contains wheat and dairy'
    },
    //ice-cupcake
    { 
     id: 19,
        name: 'Blueberry ice-cupcake',
       price: 280,
        image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        description: 'Never the same cookie twice - that\'s our promise!',
        ingredients: 'Oats, raisins, cinnamon, flour, butter',
        allergens: 'Contains wheat and dairy'
    },
    { 
     id: 20,
        name: 'Strawberry ice-cupcake',
       price: 280,
        image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        description: 'Never the same cookie twice - that\'s our promise!',
        ingredients: 'Oats, raisins, cinnamon, flour, butter',
        allergens: 'Contains wheat and dairy'
    },
    { 
     id: 21,
        name: 'Mulberry ice-cupcake',
       price: 280,
        image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        description: 'Never the same cookie twice - that\'s our promise!',
        ingredients: 'Oats, raisins, cinnamon, flour, butter',
        allergens: 'Contains wheat and dairy'
    },
    { 
     id: 22,
        name: 'Fresh fruit ice-cupcake',
       price: 280,
        image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        description: 'Never the same cookie twice - that\'s our promise!',
        ingredients: 'Oats, raisins, cinnamon, flour, butter',
        allergens: 'Contains wheat and dairy'
    },
    //popcorn
    { 
     id: 23,
        name:'Cheddar chese popcorn',
       price: 180,
        image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        description: 'Never the same cookie twice - that\'s our promise!',
        ingredients: 'Oats, raisins, cinnamon, flour, butter',
        allergens: 'Contains wheat and dairy'
    },
    { 
     id: 24,
        name: 'Butter-salt popcorn',
       price: 180,
        image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        description: 'Never the same cookie twice - that\'s our promise!',
        ingredients: 'Oats, raisins, cinnamon, flour, butter',
        allergens: 'Contains wheat and dairy'
    },
    { 
     id: 25,
        name: 'carmel popcorn',
       price: 180,
        image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        description: 'Never the same cookie twice - that\'s our promise!',
        ingredients: 'Oats, raisins, cinnamon, flour, butter',
        allergens: 'Contains wheat and dairy'
    }
];
// Cart operations
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    updateCart();
    localStorage.setItem('cart', JSON.stringify(cart)); // ✅ Save to localStorage
    showNotification('Added to cart! 🍪');
    animateCartIcon();
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
    localStorage.setItem('cart', JSON.stringify(cart)); // ✅ Save to localStorage
    showNotification('Removed from cart! 👋');
}

function updateQuantity(productId, newQuantity) {
    if (newQuantity < 1) {
        removeFromCart(productId);
        return;
    }

    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity = newQuantity;
        updateCart();
        localStorage.setItem('cart', JSON.stringify(cart)); // ✅ Save to localStorage
    }
}

function updateCart() {
    const cartItems = document.querySelector('.cart-items');
    const cartCount = document.querySelector('.cart-count');
    const cartTotalElement = document.querySelector('.cart-total span');

    if (!cartItems || !cartCount || !cartTotalElement) return;

    cartItems.innerHTML = '';
    cartTotal = 0;

    cart.forEach(item => {
        cartTotal += item.price * item.quantity;
        cartItems.innerHTML += `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}">
                <div class="cart-item-details">
                    <h4>${item.name}</h4>
                    <p>₹${item.price} x ${item.quantity}</p>
                    <div class="quantity-controls">
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, ${item.quantity - 1})">-</button>
                        <span>${item.quantity}</span>
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, ${item.quantity + 1})">+</button>
                    </div>
                </div>
                <button class="remove-item" onclick="removeFromCart(${item.id})">×</button>
            </div>
        `;
    });

    cartCount.textContent = cart.reduce((total, item) => total + item.quantity, 0);
    cartTotalElement.textContent = cartTotal.toFixed(2);
}

// UI helpers
function toggleCart() {
    cartModal.classList.toggle('active');
    document.body.style.overflow = cartModal.classList.contains('active') ? 'hidden' : '';
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);
    setTimeout(() => {
        notification.classList.add('fade-out');
        setTimeout(() => notification.remove(), 300);
    }, 2000);
}

function animateCartIcon() {
    const cartIcon = document.querySelector('.cart-badge');
    if (!cartIcon) return;
    cartIcon.classList.add('bounce');
    setTimeout(() => cartIcon.classList.remove('bounce'), 1000);
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    updateCart();

    const cartLink = document.querySelector('a[href="#cart"]');
    if (cartLink) {
        cartLink.addEventListener('click', (e) => {
            e.preventDefault();
            toggleCart();
        });
    }

    const closeCart = document.querySelector('.close-cart');
    if (closeCart) {
        closeCart.addEventListener('click', toggleCart);
    }

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => addToCart(parseInt(button.dataset.id)));
    });

    document.querySelectorAll('.quick-view').forEach(button => {
        button.addEventListener('click', () => {
            const productCard = button.closest('.product-card');
            const productId = parseInt(productCard.querySelector('.add-to-cart').dataset.id);
            showQuickView(productId);
        });
    });
    document.querySelector('.checkout-btn').addEventListener('click', () => {
  window.location.href = 'buy.html?fromCart=true';
});



        
    
});

