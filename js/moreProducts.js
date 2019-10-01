/* Add event listener for open more items */

var btn_more_items = document.querySelector("#btn_more_items");

btn_more_items.addEventListener("click", function() {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1");

    xhr.addEventListener("load", function() {
    

        if (xhr.status == 200) {
            
            var response = xhr.responseText;
            var products = JSON.parse(response);
            
            products.forEach()(function(product) {
                addMoreProducts(product);
            });
        } 
    });

    xhr.send();
});
