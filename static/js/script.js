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
        description: "Smart and energy-efficient TV appliances. Crystal-clear display with rich sound for immersive viewing.",
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
            discount: 3000, off: 50 },
             { title: "Men and Women Dress ", description: "Trendy and comfortable men’s & women’s wear — perfect for casual, office, or special occasions", price: 20000, img: "card4.webp", discount: 3000, off: 50 }
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

                <button class="btn btn-secondary text-light add-to-cart"
                    data-name="${product.title}"
                    data-price="${product.price}"
                    data-img="${product.img}">
                    Add to cart
                </button>
            </div>
        </div>
    `;

    container.appendChild(col);
});


// ---------- ADD TO CART ----------
document.addEventListener("click", (e) => {

    if (e.target.classList.contains("add-to-cart")) {

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
});


// ---------- UPDATE CART UI ----------
function updateCartUI() {
    cartItemsContainer.innerHTML = "";
    let total = 0;

    cart.forEach(item => {
        total += item.price * item.qty;

        cartItemsContainer.innerHTML += `
            <div class="d-flex justify-content-between align-items-center mb-2">
                <div>
                    <strong>${item.name}</strong><br>
                    Qty: ${item.qty}
                </div>
                <div>₹${item.price * item.qty}</div>
            </div>
        `;
    });

    cartTotal.textContent = "₹" + total;
}
