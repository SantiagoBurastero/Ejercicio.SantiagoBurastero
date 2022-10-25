let buying = true,
    total = 0,
    discount = 0

const getDiscount = total => {
    if (total > 2000){
        discount = total * 0.2
        total = total - discount
    }else if (total <= 2000 && total > 1000){
        discount = total * 0.15
        total = total - discount
    }else{
        discount = total * 0.1
        total = total - discount
    }
    return total
}

const addToCart = product => {
    switch (product) {
        case 1:
            total += 3000
            break;
        case 2:
            total += 800
            break;
        case 3:
            total += 5000
            break;
        case 4:
            total += 7500
            break;
    }
}

while (buying) {
    let products = parseInt(prompt("Elija el producto que desea agregar al carrito: 1.Guitarra($3000), 2.cuerdas($800), 3.Sintetizador($5000), 4.Drum machine($7500"))
    addToCart(products)

    let keepBuying = prompt("¿Desea seguir comprando? (si/no):")
    while (keepBuying !== "no" && keepBuying !== "si") {
        keepBuying = prompt("Responda: si/no")
    }

    if (keepBuying === "no") {
        buying = false
        total = getDiscount(total)
    }
}

alert(`Total de la compra: $${total}. Ahorrado: $${discount}`)