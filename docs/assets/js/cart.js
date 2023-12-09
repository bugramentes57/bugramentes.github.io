// script.js


$('.add-to-cart-btn').on('click', function () {
    // Find the parent container of the clicked button
    const productContainer = $(this).closest('.product-item');

    // Find and extract the product name and price from the relevant elements
    const productName = productContainer.find('.product-title').text();
    const priceElement = productContainer.find('.price-amount');
    const price = parseFloat(priceElement.text().replace('TL', '')); // Assuming the price is in the format ₺XXX.XX
    const imageSource = productContainer.find('.product-thumnail').attr('src');

    // Call the addToCart function with the extracted parameters
    addToCart(productName, price, imageSource); // Replace 'path_to_your_image' with the actual image source
});

let cart = [];
let total = 0;

function addToCart(productName, price, source) {
    // Check if the item is already in the cart
    const existingItemIndex = cart.findIndex(item => item.name === productName);

    if (existingItemIndex !== -1) {
        // If the item is already in the cart, increase the quantity
        cart[existingItemIndex].quantity += 1;
    } else {
        // If the item is not in the cart, add a new item
        const newItem = {
            name: productName,
            price: price,
            Image: source,
            quantity: 1 // Set initial quantity to 1
        };

        cart.push(newItem);
    }

    // Recalculate the total
    total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    // Update the UI
    updateCartUI();
}

function removeFromCart(productName) {
    // Find the index of the item in the cart
    const itemIndex = cart.findIndex(item => item.name === productName);

    if (itemIndex !== -1) {
        // If the item is found in the cart
        if (cart[itemIndex].quantity > 1) {
            // If the item quantity is greater than 1, decrease the quantity
            cart[itemIndex].quantity -= 1;
        } else {
            // If the item quantity is 1, remove the item from the cart
            cart.splice(itemIndex, 1);
        }

        // Recalculate the total
        total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    }

    // Update the UI
    updateCartUI();
}

function updateCartUI() {
    const cartQtyElement = document.getElementById('cart-qty');
    const cartTotalElement = document.getElementById('cart-total');
    const cartListElement = document.getElementById('cart-list');

    cartQtyElement.textContent = cart.length;
    cartTotalElement.textContent = total.toFixed(2) + '₺';

    cartListElement.innerHTML = '';
    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <div class="minicart-item">
                <div class="thumb">
                    <a href="#"><img src="${item.Image}" width="90" height="90" alt="${item.name}"></a>
                </div>
                <div class="left-info">
                    <div class="product-title"><a href="#" class="product-name">${item.name}</a></div>
                    <div class="price">
                        <ins><span class="price-amount"><span class="currencySymbol">₺</span>${item.price.toFixed(2)}</span></ins>
                    </div>
                    <div class="qty">
                        <label for="cart[${item.name}][qty]">Qty:</label>
                        <input type="number" class="input-qty" name="cart[${item.name}][qty]" id="cart[${item.name}][qty]" value="${item.quantity}" disabled>
                    </div>
                </div>
                <div class="action">
                    <a href="#" class="edit"><i class="fa fa-pencil" aria-hidden="true"></i></a>
                    <a href="#" class="remove" onclick="removeFromCart('${item.name}', ${item.price})"><i class="fa fa-trash-o" aria-hidden="true"></i></a>
                </div>
            </div>
        `;
        cartListElement.appendChild(listItem);
    });
}
