const products = [
    {
        id: 101,
        name: "Laptop",
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
        price: 55000,
        description: "High-performance laptop suitable for work and development."
    },
    {
        id: 102,
        name: "Smartphone",
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
        price: 25000,
        description: "Latest smartphone with powerful features."
    },
    {
        id: 103,
        name: "Headphones",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
        price: 3000,
        description: "High-quality wireless headphones."
    },
    {
        id: 104,
        name: "Smart Watch",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
        price: 5000,
        description: "Smart watch with fitness tracking features."
    },
    {
        id: 105,
        name: "Camera",
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
        price: 45000,
        description: "Professional camera for photography."
    },
    {
        id: 106,
        name: "Keyboard",
        image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3",
        price: 2500,
        description: "Mechanical keyboard for comfortable typing."
    },
    {
        id: 107,
        name: "Mouse",
        image: "https://images.unsplash.com/photo-1527814050087-3793815479db",
        price: 1500,
        description: "Wireless mouse with smooth performance."
    },
    {
        id: 108,
        name: "Tablet",
        image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0",
        price: 22000,
        description: "Portable tablet for work and entertainment."
    },
    {
        id: 109,
        name: "Speaker",
        image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1",
        price: 4000,
        description: "Portable speaker with clear sound."
    },
    {
        id: 110,
        name: "Monitor",
        image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf",
        price: 18000,
        description: "Full HD monitor for work and gaming."
    },
    {
        id: 111,
        name: "Printer",
        image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6",
        price: 12000,
        description: "Fast and efficient printer."
    },
    {
        id: 112,
        name: "USB Drive",
        image: "https://images.unsplash.com/photo-1618060932014-4deda4932554",
        price: 1000,
        description: "Portable USB storage device."
    },
    {
        id: 113,
        name: "Power Bank",
        image: "https://images.unsplash.com/photo-1609592424432-4d6d8b7c8b6f",
        price: 1800,
        description: "High-capacity power bank."
    },
    {
        id: 114,
        name: "Gaming Console",
        image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3",
        price: 45000,
        description: "Next-generation gaming console."
    },
    {
        id: 115,
        name: "VR Headset",
        image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac",
        price: 30000,
        description: "Immersive virtual reality headset."
    },
    {
        id: 116,
        name: "Webcam",
        image: "https://images.unsplash.com/photo-1587826080692-f439cd0b70da",
        price: 3500,
        description: "HD webcam for online meetings."
    }
];

let cart = [];

showProducts(products);

function showProducts(productList) {
    const productcontainer = document.getElementById("product_container");
    productcontainer.innerHTML = "";

    productList.forEach(function (product) {
        const card = document.createElement("div");
        card.classList.add("card");

        const section1 = document.createElement("section");
        section1.classList.add("product_logo");

        const productimage = document.createElement("img");
        productimage.src = product.image;

        section1.appendChild(productimage);

        const section2 = document.createElement("section");
        section2.classList.add("product_detail");

        const productname = document.createElement("h1");
        productname.textContent = product.name;

        const productdescription = document.createElement("p");
        productdescription.classList.add("description");
        productdescription.textContent = product.description;

        const productprice = document.createElement("p");
        productprice.classList.add("price");
        productprice.textContent = product.price;

        const addtocart = document.createElement("button");
        addtocart.textContent = "Add🛒";
        addtocart.addEventListener("click", addBasketItems);

        function addBasketItems() {
            const existingproduct = cart.find(function (prod) {
                return prod.id === product.id;
            });

            if (existingproduct) {
                existingproduct.quantity++;
            } else {
                const item = {
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    quantity: 1
                };

                cart.push(item);
            }

            document.getElementById("qty").firstChild.textContent = cart.length;
            console.log(cart);
        }

        section2.appendChild(productname);
        section2.appendChild(productdescription);
        section2.appendChild(productprice);
        section2.appendChild(addtocart);

        card.appendChild(section1);
        card.appendChild(section2);

        productcontainer.appendChild(card);
    });
}

const Search = document.getElementById("search");
Search.addEventListener("input", searchProduct);

const cartLink = document.getElementById("cartModal");
cartLink.addEventListener("click", showCart);

function showCart() {
    let subTotal = 0;
    const billTable = document.getElementById("billing");
    let tablecode = "";

    tablecode += `<table class="table table-border table-striped">

<tr>
<th>Product Id</th>
<th>Name</th>
<th>Price</th>
<th>Quantity</th>
<th>Total</th>
<th>Action</th>
</tr>`;

    cart.forEach(function (item) {
        let total = item.price * item.quantity;
        subTotal = subTotal + total;

        let x = `<tr>
<td>${item.id}</td>
<td>${item.name}</td>
<td>${item.price}</td>
<td>
<button class="btn btn-outline-danger btn-sm" onClick="decreaseQty(${item.id})">-</button>
<span>${item.quantity}</span>
<button class="btn btn-outline-success btn-sm" onClick="increaseQty(${item.id})">+</button>
</td>
<td>${total}</td>
<td class="text-center">
<button class="btn btn-outline-danger btn-sm" onClick="removeItem(${item.id})">
<i class="bi bi-trash"></i>
</button>
</td>
</tr>`;

        tablecode += x;
    });

    tablecode += `<tr class="text-end">
<td colspan="4">Total Billing</td>
<td colspan="2">${subTotal}</td>
</tr>`;

    tablecode += `</table>`;
    billTable.innerHTML = tablecode;
}

function increaseQty(productId) {
    const existingproduct = cart.find(function (prod) {
        return prod.id === productId;
    });
    
    existingproduct.quantity++;
    showCart();
}

function decreaseQty(productId) {
    const existingproduct = cart.find(function (prod) {
        return prod.id === productId;
    });

    if (existingproduct.quantity > 1) {
        existingproduct.quantity--;
    } else {
        alert("Do you Really wanted to remove this item ? use remove button");
    }

    showCart();
}

function removeItem(productId) {
    cart = cart.filter(function (prod) {
        return prod.id !== productId;
    });

    showCart();
    document.getElementById("qty").firstChild.textContent = cart.length;
}

function searchProduct() {
    let searchedText = document.getElementById("search").value; 
    const filterProducts = products.filter(function (prod) {
        return prod.name.toLowerCase().includes(searchedText.toLowerCase());
    });

    showProducts(filterProducts);
}
