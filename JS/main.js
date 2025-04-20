// main.js - custom JS for SheepHelmet

// Sample product data (to be replaced with real data or loaded dynamically)
const products = [
    // 20 Full Face helmets
    { id: 'fullface-1', name: 'Nón Full Face 1', price: 1200000, type: 'fullface', image: '../images/sản phẩm1.jpg', isNew: true },
    { id: 'fullface-2', name: 'Nón Full Face 2', price: 1210000, type: 'fullface', image: '../images/sản phẩm2.jpg', isNew: true },
    { id: 'fullface-3', name: 'Nón Full Face 3', price: 1220000, type: 'fullface', image: '../images/sản phẩm3.jpg', isNew: true },
    { id: 'fullface-4', name: 'Nón Full Face 4', price: 1230000, type: 'fullface', image: '../images/sản phẩm4.jpg', isNew: true },
    { id: 'fullface-5', name: 'Nón Full Face 5', price: 1240000, type: 'fullface', image: '../images/sản phẩm5.jpg', isNew: true },
    { id: 'fullface-6', name: 'Nón Full Face 6', price: 1250000, type: 'fullface', image: '../images/sản phẩm6.jpg', isNew: false },
    { id: 'fullface-7', name: 'Nón Full Face 7', price: 1260000, type: 'fullface', image: '../images/sản phẩm1.jpg', isNew: false },
    { id: 'fullface-8', name: 'Nón Full Face 8', price: 1270000, type: 'fullface', image: '../images/sản phẩm2.jpg', isNew: false },
    { id: 'fullface-9', name: 'Nón Full Face 9', price: 1280000, type: 'fullface', image: '../images/sản phẩm3.jpg', isNew: false },
    { id: 'fullface-10', name: 'Nón Full Face 10', price: 1290000, type: 'fullface', image: '../images/sản phẩm4.jpg', isNew: false },
    { id: 'fullface-11', name: 'Nón Full Face 11', price: 1300000, type: 'fullface', image: '../images/sản phẩm5.jpg', isNew: false },
    { id: 'fullface-12', name: 'Nón Full Face 12', price: 1310000, type: 'fullface', image: '../images/sản phẩm6.jpg', isNew: false },
    { id: 'fullface-13', name: 'Nón Full Face 13', price: 1320000, type: 'fullface', image: '../images/sản phẩm1.jpg', isNew: false },
    { id: 'fullface-14', name: 'Nón Full Face 14', price: 1330000, type: 'fullface', image: '../images/sản phẩm2.jpg', isNew: false },
    { id: 'fullface-15', name: 'Nón Full Face 15', price: 1340000, type: 'fullface', image: '../images/sản phẩm3.jpg', isNew: false },
    { id: 'fullface-16', name: 'Nón Full Face 16', price: 1350000, type: 'fullface', image: '../images/sản phẩm4.jpg', isNew: false },
    { id: 'fullface-17', name: 'Nón Full Face 17', price: 1360000, type: 'fullface', image: '../images/sản phẩm5.jpg', isNew: false },
    { id: 'fullface-18', name: 'Nón Full Face 18', price: 1370000, type: 'fullface', image: '../images/sản phẩm6.jpg', isNew: false },
    { id: 'fullface-19', name: 'Nón Full Face 19', price: 1380000, type: 'fullface', image: '../images/sản phẩm1.jpg', isNew: false },
    { id: 'fullface-20', name: 'Nón Full Face 20', price: 1390000, type: 'fullface', image: '../images/sản phẩm2.jpg', isNew: false },
    // 20 1/2 helmets
    { id: 'half-1', name: 'Nón 1/2 1', price: 800000, type: 'half', image: '../images/sản phẩm3.jpg', isNew: false },
    { id: 'half-2', name: 'Nón 1/2 2', price: 808000, type: 'half', image: '../images/sản phẩm4.jpg', isNew: false },
    { id: 'half-3', name: 'Nón 1/2 3', price: 816000, type: 'half', image: '../images/sản phẩm5.jpg', isNew: false },
    { id: 'half-4', name: 'Nón 1/2 4', price: 824000, type: 'half', image: '../images/sản phẩm6.jpg', isNew: false },
    { id: 'half-5', name: 'Nón 1/2 5', price: 832000, type: 'half', image: '../images/sản phẩm1.jpg', isNew: false },
    { id: 'half-6', name: 'Nón 1/2 6', price: 840000, type: 'half', image: '../images/sản phẩm2.jpg', isNew: false },
    { id: 'half-7', name: 'Nón 1/2 7', price: 848000, type: 'half', image: '../images/sản phẩm3.jpg', isNew: false },
    { id: 'half-8', name: 'Nón 1/2 8', price: 856000, type: 'half', image: '../images/sản phẩm4.jpg', isNew: false },
    { id: 'half-9', name: 'Nón 1/2 9', price: 864000, type: 'half', image: '../images/sản phẩm5.jpg', isNew: false },
    { id: 'half-10', name: 'Nón 1/2 10', price: 872000, type: 'half', image: '../images/sản phẩm6.jpg', isNew: false },
    { id: 'half-11', name: 'Nón 1/2 11', price: 880000, type: 'half', image: '../images/sản phẩm1.jpg', isNew: true },
    { id: 'half-12', name: 'Nón 1/2 12', price: 888000, type: 'half', image: '../images/sản phẩm2.jpg', isNew: true },
    { id: 'half-13', name: 'Nón 1/2 13', price: 896000, type: 'half', image: '../images/sản phẩm3.jpg', isNew: true },
    { id: 'half-14', name: 'Nón 1/2 14', price: 904000, type: 'half', image: '../images/sản phẩm4.jpg', isNew: true },
    { id: 'half-15', name: 'Nón 1/2 15', price: 912000, type: 'half', image: '../images/sản phẩm5.jpg', isNew: false },
    { id: 'half-16', name: 'Nón 1/2 16', price: 920000, type: 'half', image: '../images/sản phẩm6.jpg', isNew: false },
    { id: 'half-17', name: 'Nón 1/2 17', price: 928000, type: 'half', image: '../images/sản phẩm1.jpg', isNew: false },
    { id: 'half-18', name: 'Nón 1/2 18', price: 936000, type: 'half', image: '../images/sản phẩm2.jpg', isNew: false },
    { id: 'half-19', name: 'Nón 1/2 19', price: 944000, type: 'half', image: '../images/sản phẩm3.jpg', isNew: false },
    { id: 'half-20', name: 'Nón 1/2 20', price: 952000, type: 'half', image: '../images/sản phẩm4.jpg', isNew: false },
    // 10 3/4 helmets
    { id: 'threequarter-1', name: 'Nón 3/4 1', price: 1000000, type: 'threequarter', image: '../images/sản phẩm5.jpg', isNew: false },
    { id: 'threequarter-2', name: 'Nón 3/4 2', price: 1009000, type: 'threequarter', image: '../images/sản phẩm6.jpg', isNew: false },
    { id: 'threequarter-3', name: 'Nón 3/4 3', price: 1018000, type: 'threequarter', image: '../images/sản phẩm1.jpg', isNew: false },
    { id: 'threequarter-4', name: 'Nón 3/4 4', price: 1027000, type: 'threequarter', image: '../images/sản phẩm2.jpg', isNew: false },
    { id: 'threequarter-5', name: 'Nón 3/4 5', price: 1036000, type: 'threequarter', image: '../images/sản phẩm3.jpg', isNew: true },
    { id: 'threequarter-6', name: 'Nón 3/4 6', price: 1045000, type: 'threequarter', image: '../images/sản phẩm4.jpg', isNew: true },
    { id: 'threequarter-7', name: 'Nón 3/4 7', price: 1054000, type: 'threequarter', image: '../images/sản phẩm5.jpg', isNew: true },
    { id: 'threequarter-8', name: 'Nón 3/4 8', price: 1063000, type: 'threequarter', image: '../images/sản phẩm6.jpg', isNew: false },
    { id: 'threequarter-9', name: 'Nón 3/4 9', price: 1072000, type: 'threequarter', image: '../images/sản phẩm1.jpg', isNew: false },
    { id: 'threequarter-10', name: 'Nón 3/4 10', price: 1081000, type: 'threequarter', image: '../images/sản phẩm2.jpg', isNew: false },
];

// Cart stored in localStorage key 'sheephelmet_cart'
function getCart() {
    const cart = localStorage.getItem('sheephelmet_cart');
    return cart ? JSON.parse(cart) : {};
}

function saveCart(cart) {
    localStorage.setItem('sheephelmet_cart', JSON.stringify(cart));
    updateCartCount();
}

function updateCartCount() {
    const cart = getCart();
    let count = 0;
    for (const key in cart) {
        count += cart[key];
    }
    $('#cart-count').text(count);
}

function addToCart(productId) {
    const cart = getCart();
    if (cart[productId]) {
        cart[productId]++;
    } else {
        cart[productId] = 1;
    }
    saveCart(cart);
    alert('Đã thêm sản phẩm vào giỏ hàng');
}

function renderProducts(containerId, filterFn) {
    const container = $(containerId);
    container.empty();
    const filtered = products.filter(filterFn);
    filtered.forEach(p => {
        const card = $(`
            <div class="col-md-4 mb-4">
                <div class="product-card">
                    <a href="product-detail.html?id=${p.id}">
                        <img src="${p.image}" alt="${p.name}" class="card-img-top" />
                    </a>
                    <div class="card-body">
                        <h5 class="card-title">${p.name}</h5>
                        <p class="card-text">${p.price.toLocaleString('vi-VN')} ₫</p>
                        <a href="product-detail.html?id=${p.id}" class="btn btn-secondary btn-sm">Xem chi tiết</a>
                        <button class="btn btn-primary btn-sm mt-2 add-to-cart" data-id="${p.id}">Thêm vào giỏ</button>
                    </div>
                </div>
            </div>
        `);
        container.append(card);
    });
}


$(document).ready(function() {
    updateCartCount();

    // Render featured products (3 helmets)
    renderProducts('#featured-products', (p, i) => i < 3);

    // Render new products (3 helmets)
    renderProducts('#new-products', p => p.isNew);

    // Render all products on the products page
    renderProducts('#products-list', () => true); // Call renderProducts for the main product list

    // Add to cart button handler
    $(document).on('click', '.add-to-cart', function() {
        const id = $(this).data('id');
        addToCart(id);
    });
});