document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    const product = getProductById(productId);

    if (product) {
        document.getElementById('productName').textContent = product.name;
        document.getElementById('productTitle').textContent = product.name;
        document.getElementById('productDescription').textContent = product.description;
        document.getElementById('productPrice').textContent = `Harga Satuan: Rp ${product.price.toLocaleString()}`;
        document.getElementById('productImage').src = product.image;

        const unitPrice = parseFloat(product.price);
        const quantityInput = document.querySelector('.quantity-input');
        const totalPriceElement = document.querySelector('#totalAmount');

        function updateTotalPrice() {
            const quantity = parseInt(quantityInput.value);
            const totalPrice = quantity * unitPrice;
            totalPriceElement.textContent = totalPrice.toLocaleString();
        }

        document.querySelector('.quantity-btn.plus').addEventListener('click', () => {
            quantityInput.value = parseInt(quantityInput.value) + 1;
            updateTotalPrice();
        });

        document.querySelector('.quantity-btn.minus').addEventListener('click', () => {
            if (parseInt(quantityInput.value) > 1) {
                quantityInput.value = parseInt(quantityInput.value) - 1;
                updateTotalPrice();
            }
        });

        quantityInput.addEventListener('input', updateTotalPrice);
        updateTotalPrice();
    } else {
        alert("Produk tidak ditemukan!");
        window.location.href = '/Html/product.html';
    }
});
