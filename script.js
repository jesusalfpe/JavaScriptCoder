let saldoInicial = 0;
let saldoRestante = 0;

window.onload = () => {
    while (true) {
        saldoInicial = parseFloat(prompt("Ingrese el saldo inicial de la tarjeta:"));
        if (!isNaN(saldoInicial) && saldoInicial > 0) {
            break;
        } else {
            alert("Por favor, ingrese un valor válido para el saldo inicial.");
        }
    }
    saldoRestante = saldoInicial;
    document.getElementById('saldo-inicial').textContent = saldoInicial.toFixed(2);
    document.getElementById('saldo-restante').textContent = saldoRestante.toFixed(2);

    startShopping();
};

function startShopping() {
    let shopping = true;
    while (shopping) {
        let option = prompt("Seleccione un producto para comprar:\n1. Producto 1 ($10)\n2. Producto 2 ($20)\n3. Producto 3 ($30)\n4. Finalizar compra").toLowerCase();
        switch (option) {
            case '1':
                if (saldoRestante >= 10) {
                    saldoRestante -= 10;
                    alert("Has comprado Producto 1 por $10.");
                } else {
                    alert("Saldo insuficiente para comprar Producto 1.");
                }
                break;
            case '2':
                if (saldoRestante >= 20) {
                    saldoRestante -= 20;
                    alert("Has comprado Producto 2 por $20.");
                } else {
                    alert("Saldo insuficiente para comprar Producto 2.");
                }
                break;
            case '3':
                if (saldoRestante >= 30) {
                    saldoRestante -= 30;
                    alert("Has comprado Producto 3 por $30.");
                } else {
                    alert("Saldo insuficiente para comprar Producto 3.");
                }
                break;
            case '4':
                shopping = false;
                alert("Compra finalizada. Saldo restante: $" + saldoRestante.toFixed(2));
                break;
            default:
                alert("Opción no válida. Por favor, elija una opción válida.");
        }
        document.getElementById('saldo-restante').textContent = saldoRestante.toFixed(2);
    }
}
