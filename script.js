let saldoInicial = 0;
let saldoRestante = 0;

window.onload = () => {
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
};

function comprarProducto(precio) {
    if (saldoRestante >= precio) {
        saldoRestante -= precio;
        alert(`Has comprado un producto por $${precio}.`);
    } else {
        alert("Saldo insuficiente para comprar este producto.");
    }
    document.getElementById('saldo-restante').textContent = saldoRestante.toFixed(2);
}
