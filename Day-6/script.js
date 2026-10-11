
const products = [
    {
        name: "Organic Apples",
        price: 150,
        description: "Fresh and crunchy apples, rich in fiber.",
        image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400"
    },
    {
        name: "Fresh Carrots",
        price: 60,
        description: "Fresh carrots perfect for salads and cooking.",
        image: "https://images.unsplash.com/photo-1445282768818-728615cc910a?w=400"
    },
    {
        name: "Organic Tomatoes",
        price: 40,
        description: "Juicy tomatoes for curries and salads.",
        image: "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=400"
    },
    {
        name: "Fresh Bananas",
        price: 50,
        description: "Sweet bananas for a healthy snack.",
        image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400"
    },
    {
        name: "Organic Broccoli",
        price: 80,
        description: "Nutritious green broccoli for healthy meals.",
        image: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=400"
    },
    {
        name: "Fresh Oranges",
        price: 100,
        description: "Sweet oranges, a source of vitamin C.",
        image: "https://images.unsplash.com/photo-1547514701-42782101795e?w=400"
    },
    {
        name: "Pure Honey",
        price: 250,
        description: "Naturally sweet honey for everyday use.",
        image: "https://images.unsplash.com/photo-1587049352851-8d4e89133924?w=400"
    },
    {
        name: "Almonds",
        price: 150,
        description: "Crunchy almonds for a nutritious snack.",
        image: "https://images.unsplash.com/photo-1508061253366-f7da158b6d46?w=400"
    },
    {
        name: "Fresh Strawberries",
        price: 150,
        description: "Sweet and tangy strawberries for a treat.",
        image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=400"
    },
    {
        name: "Fresh Milk",
        price: 35,
        description: "A daily dairy essential for your family.",
        image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400"
    },
    {
        name: "Organic Potatoes",
        price: 45,
        description: "Versatile potatoes for everyday cooking.",
        image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400"
    },
    {
        name: "Green Grapes",
        price: 120,
        description: "Juicy grapes for a refreshing snack.",
        image: "https://images.unsplash.com/photo-1537640538966-79f369143f8f?w=400"
    }
];

let cart = [];

// Display products
function displayProducts(items) {
    const productList = document.getElementById("product-list");

    productList.innerHTML = "";

    if (items.length === 0) {
        productList.innerHTML =
            '<div class="col-12"><p>No products found.</p></div>';
        return;
    }

    items.forEach(function(product) {
        const index = products.indexOf(product);

        productList.innerHTML += `
            <div class="col-6 col-md-4 col-xl-3">
                <div class="card product-card">
                    <img src="${product.image}"
                         class="card-img-top"
                         alt="${product.name}"
                         loading="lazy">

                    <div class="card-body">
                        <h5>${product.name}</h5>

                        <p class="product-description">
                            ${product.description}
                        </p>

                        <p class="product-price">₹${product.price}</p>

                        <button class="btn btn-success w-100"
                            onclick="addToCart(${index})">
                            🛒 Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        `;
    });
}

// Add product to cart
function addToCart(index) {
    cart.push(products[index]);
    updateCart();
}

// Update cart and total
function updateCart() {
    const cartItems = document.getElementById("cart-items");
    const totalElement = document.getElementById("total");
    const countElement = document.getElementById("cart-count");

    let total = 0;

    countElement.textContent = cart.length;

    if (cart.length === 0) {
        cartItems.innerHTML =
            '<p class="empty-cart">Your cart is empty.</p>';

        totalElement.textContent = 0;
        return;
    }

    cartItems.innerHTML = "";

    cart.forEach(function(product, index) {
        total += product.price;

        cartItems.innerHTML += `
            <div class="cart-item">
                <div>
                    <span class="cart-item-name">${product.name}</span>
                    <br>
                    <span>₹${product.price}</span>
                </div>

                <button class="remove-btn"
                    onclick="removeItem(${index})">
                    Remove
                </button>
            </div>
        `;
    });

    totalElement.textContent = total;
}

// Remove a product
function removeItem(index) {
    cart.splice(index, 1);
    updateCart();
}

// Clear entire cart
function clearCart() {
    cart = [];
    updateCart();
}

// Place order demo
function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty! Please add a product.");
        return;
    }

    let total = 0;

    cart.forEach(function(product) {
        total += product.price;
    });

    alert(
        "Thank you for shopping at OrganicMart!\n" +
        "Your demo order total is ₹" + total +
        "\nNo real order or payment has been processed."
    );

    clearCart();
}

// Search products
document.getElementById("search").addEventListener("input", function() {
    const searchText = this.value.toLowerCase().trim();

    const filteredProducts = products.filter(function(product) {
        return product.name.toLowerCase().includes(searchText) ||
               product.description.toLowerCase().includes(searchText);
    });

    displayProducts(filteredProducts);
});

// Enquiry form
document.getElementById("enquiryForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("enquiryName").value.trim();
    const product = document.getElementById("enquiryProduct").value.trim();

    alert(
        "Thank you, " + name + "!\n" +
        "Your enquiry about " + product +
        " has been submitted in this demo."
    );

    this.reset();
});

// Load website
displayProducts(products);
updateCart();
