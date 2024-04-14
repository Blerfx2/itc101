function price_of() {
    var price;
    var taxrate = 0.08;
    var riceqty = parseFloat(document.getElementById("riceqty").value);
    var entree = document.getElementById("entree").value;
    var entreeqty = parseFloat(document.getElementById("entreeqty").value);
    var appqty = parseFloat(document.getElementById("appqty").value);
    var drinksize = document.getElementById("drinksize").value;
    var drinkqty = parseFloat(document.getElementById("drinkqty").value);

    // Calculates the price
    price = riceqty * 3.00;

    if (entree == "standard") {
        price = price + (2.45 * entreeqty);
    } else if (entree == "special") {
        price = price + (3.70*entreeqty);
    }


    price = price + (appqty * 2.00);
    
    if (drinksize == "small") {
        price = price + (drinkqty * 2.10);
    } else if (drinksize == "medium") {
        price = price + (drinkqty * 2.30);
    } else if (drinksize == "large") {
        price = price + (drinkqty * 2.50);
    }
    

    price = price + price * taxrate;
    
    // Don't touch this
    document.querySelector('h1').textContent = "Total Price: $" + price.toFixed(2);
}
