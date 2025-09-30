const products = [
    {
        title: "Laptop",
        description: "Lightweight laptop with sharp display and smooth multitasking. Perfect for office, school, or travel.",
        price:49000,
        img: "card1.2.jpg",
        discount:70000,
        off:30
    },
    {
        title: "Shoes",
        description: "Comfortable and stylish shoes for daily wear. Designed for durability and all-day support.",
        price:2500 ,
        img: "card2.jpg",
        discount:5000,
        off:50,
    },
    {
        title: "Toys",
        description: "Fun and safe toys that spark imagination. Perfect for learning and playtime",
        price: 1200,
        img: "card3.jpeg",
        discount:2400,
        off:50
    },
    {
        title: "TV and Appliances",
        description: "Smart and energy-efficient TV appliances. Crystal-clear display with rich sound for immersive viewing.",
        price: 20000,
        img: "card77.jpg",
        discount:3000,
        off:50
    },
    {
        title: " Grocery's",
        description: "Fresh and quality groceries for your daily needs. Carefully packed for hygiene and taste.",
        price: 20000,
        img: "card6.jpg",
        discount:3000,
        off:50
    },
    {
        title: "Stationery items",
        description: "High-quality stationery item designed for everyday writing and office needs.",
        price: 20000,
        img: "card5.jpg",
        discount:3000,
        off:50
        
    },
    {
        title: "Men and Women Dress  ",
        description: "Trendy and comfortable men’s & women’s wear — perfect for casual, office, or special occasions",
        price: 20000,
        img: "card4.webp",
        discount:3000,
        off:50
        
        
    },
    {
        title: "vr",
        description: "Enjoy vr ",
        price: 20000,
        img: "static/img/product/vr.jpg",
        discount:3000,
        off:50
    },

]

const container = document.querySelector('.row')

products.forEach(product => {
    const col = document.createElement('div')
    col.className = ' col col-12 col-sm-6 col-md-4 col-lg-3'
    col.innerHTML = `
                <div class="card">
                            <img src="static/image/${product.img}" class="card-img-top">
                            <div class="card-body">
                                <h5 class="card-title"> ${product.title} </h5>
                                <p class="card-text">${product.description}
                                </p>
                                 <p><del><span style="color: gray;">Rs:${product.discount}</span></del>
                    <small><sup style="color:red">${product.off}%</sup></small>
                    <strong style="color: black; text-decoration: none;> <span style="color: black; text-decoration: none;"> Rs:${product.price}</span></p>
                                <button class=" btn btn-secondary text-light">Add to cart</button>
                            </div>
                        </div>
    `
    container.appendChild(col);
});