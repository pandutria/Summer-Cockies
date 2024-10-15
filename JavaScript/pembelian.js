document.querySelector('.search-button').addEventListener('click', function() {
    const searchQuery = document.querySelector('.input-container input').value.toLowerCase();
    const products = document.querySelectorAll('.product-item');
    const alert = document.querySelector('.notFound');

    let found = false;
    
    products.forEach(product => {
        const productName = product.getAttribute('data-name').toLowerCase();
        if (productName.includes(searchQuery)) {
            product.style.display = 'flex';
            found = true;
        } else {
            product.style.display = 'none';            
        }
    });

    if (found) {
        alert.style.display = 'none'; 
    } else {
        alert.style.display = 'block';
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const list = document.getElementById('list');
    const Ul = document.querySelector('.ul');

    list.addEventListener('click', function() {
        Ul.classList.toggle('active');
    });
});