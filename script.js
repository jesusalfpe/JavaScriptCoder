let saldoInicial = 0;
let saldoRestante = 0;
let carrito = [];
let products = [];

window.onload = async () => {
    while (true) {
        saldoInicial = parseFloat(prompt("Ingrese el saldo inicial de la tarjeta:"));
        if (!isNaN(saldoInicial) && saldoInicial > 0) {
            saldoRestante = saldoInicial;
            break;
        } else {
            alert("Por favor, ingrese un valor válido para el saldo inicial.");
        }
    }
    document.getElementById('saldo-inicial').textContent = saldoInicial.toFixed(2);
    document.getElementById('saldo-restante').textContent = saldoRestante.toFixed(2);
    
    await loadProducts();
    displayProducts();
};

async function loadProducts() {
    try {
        const response = await fetch('productos.json');
        products = await response.json();
    } catch (error) {
        console.error('Error cargando productos:', error);
    }
}

function displayProducts() {
    const productsContainer = document.getElementById('products');
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'product';
        productElement.innerHTML = `
            <h2>${product.name}</h2>
            <p>Precio: $${product.price}</p>
            <button onclick="agregarAlCarrito(${product.id})">Agregar al carrito</button>
        `;
        productsContainer.appendChild(productElement);
    });
}

function agregarAlCarrito(productId) {
    const product = products.find(p => p.id === productId);
    carrito.push(product);
    actualizarCarrito();
}

function eliminarDelCarrito(index) {
    carrito.splice(index, 1);
    actualizarCarrito();
}

function actualizarCarrito() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    let total = 0;
    carrito.forEach((item, index) => {
        const cartItem = document.createElement('li');
        cartItem.innerHTML = `
            ${item.name} - $${item.price}
            <button onclick="eliminarDelCarrito(${index})">Eliminar</button>
        `;
        cartItems.appendChild(cartItem);
        total += item.price;
    });
    document.getElementById('total-carrito').textContent = total.toFixed(2);
}

function realizarCompra() {
    const totalCarrito = parseFloat(document.getElementById('total-carrito').textContent);
    if (saldoRestante >= totalCarrito) {
        saldoRestante -= totalCarrito;
        alert(`Compra realizada con éxito. Total: $${totalCarrito}`);
        carrito = [];
        actualizarCarrito();
        document.getElementById('saldo-restante').textContent = saldoRestante.toFixed(2);
    } else {
        alert("Saldo insuficiente para realizar la compra.");
    }
}
