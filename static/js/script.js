// ---------- CART SETUP ----------
let cart = [];

const offcanvasBody = document.querySelector(".offcanvas-body");
offcanvasBody.innerHTML = `
  <div id="cart-items"></div>
  <hr>
  <div class="d-flex justify-content-between align-items-center">
    <strong>Total:</strong>
    <strong id="cart-total">₹0</strong>
  </div>
`;

const cartItemsContainer = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");


// ---------- PRODUCT LIST ----------
const products = [
    {
        title: "Laptop",
        description: "Lightweight laptop with sharp display and smooth multitasking.",
        price: 49000,
        img: "card1.2.jpg",
        discount: 70000,
        off: 30
    },
    {
        title: "Shoes",
        description: "Comfortable and stylish shoes for daily wear.",
        price: 2500,
        img: "card2.jpg",
        discount: 5000,
        off: 50
    },
    {
        title: "Toys",
        description: "Fun and safe toys for imagination.",
        price: 1200,
        img: "card3.jpeg",
        discount: 2400,
        off: 50
    },

    {
        title: "TV and Appliances",
        description: "Smart and energy-efficient TV appliances.",
        price: 20000, img: "card77.jpg",
        discount: 3000, off: 50
    },
    {
        title: " Grocery's",
        description: "Fresh and quality groceries for your daily needs. Carefully packed for hygiene and taste.",
        price: 20000,
        img: "card6.jpg",
        discount: 3000,
        off: 50
    },
    {
        title: "Stationery items",
        description: "High-quality stationery item designed for everyday writing and office needs.",
        price: 20000,
        img: "card5.jpg",
        discount: 3000, off: 50
    },
    { title: "Men and Women Dress ",
         description: "Trendy and comfortable men’s & women’s wear — perfect for casual, office, or special occasions",
          price: 20000, img: "card4.webp",
           discount: 3000, off: 50 }
];


// ---------- DISPLAY PRODUCTS ----------
const container = document.querySelector('.row');

products.forEach(product => {
    const col = document.createElement('div');
    col.className = 'col col-12 col-sm-6 col-md-4 col-lg-3';

    col.innerHTML = `
        <div class="card">
            <img src="static/image/${product.img}" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title">${product.title}</h5>
                <p class="card-text">${product.description}</p>

                <p>
                    <del style="color: gray;">Rs:${product.discount}</del>
                    <small><sup style="color:red">${product.off}%</sup></small>
                    <strong> Rs:${product.price}</strong>
                </p>
                <button class="btn-premium add-to-cart addCartBtn"
                data-name="${product.title}"
                data-price="${product.price}"
                data-img="${product.img}">
                Add to Cart
                </button>
            </div>
        </div>
    `;

    container.appendChild(col);
});


// ---------- ADD TO CART ----------
// Handle quantity and remove buttons
// ---------- CLICK HANDLER FOR ADD, + , - , REMOVE ----------
document.addEventListener("click", (e) => {

    // =============================
    // ADD TO CART (ANIMATION INCLUDED)
    // =============================
    if (e.target.classList.contains("add-to-cart")) {

        // Button animation
        e.target.classList.add("added-effect");
        setTimeout(() => {
            e.target.classList.remove("added-effect");
        }, 500);

        const name = e.target.dataset.name;
        const price = parseInt(e.target.dataset.price);
        const img = e.target.dataset.img;

        const existing = cart.find(item => item.name === name);

        if (existing) {
            existing.qty++;
        } else {
            cart.push({ name, price, img, qty: 1 });
        }

        updateCartUI();
    }

    // =============================
    // INCREASE QUANTITY
    // =============================
    if (e.target.classList.contains("increase")) {
        let index = e.target.dataset.index;
        cart[index].qty++;
        updateCartUI();
    }

    // =============================
    // DECREASE QUANTITY
    // =============================
    if (e.target.classList.contains("decrease")) {
        let index = e.target.dataset.index;

        if (cart[index].qty > 1) {
            cart[index].qty--;
        } else {
            cart.splice(index, 1);  // remove item if qty becomes zero
        }
        updateCartUI();
    }

    // =============================
    // REMOVE ITEM
    // =============================
    if (e.target.classList.contains("remove-btn")) {
        let index = e.target.dataset.index;
        cart.splice(index, 1);
        updateCartUI();
    }

});


// ---------- UPDATE CART UI ----------
function updateCartUI() {
    cartItemsContainer.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price * item.qty;

        cartItemsContainer.innerHTML += `
            <div class="cart-item-box">

                <div class="cart-item-left">
                    <img src="static/image/${item.img}" class="cart-item-img">

                    <div>
                        <div class="cart-item-name">${item.name}</div>

                        <div class="cart-item-qty-box">
                            <button class="qty-btn decrease" data-index="${index}">−</button>
                            <span class="qty-number">${item.qty}</span>
                            <button class="qty-btn increase" data-index="${index}">+</button>
                        </div>
                    </div>
                </div>

                <div class="cart-item-right">
                    <div class="cart-item-price">₹${item.price * item.qty}</div>
                    <button class="remove-btn" data-index="${index}">Remove</button>
                </div>

            </div>
        `;
    });

    cartTotal.textContent = "₹" + total;

    // Update cart counter
    document.getElementById("cart-count").textContent = cart.length;
}

