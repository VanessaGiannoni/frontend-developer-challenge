/* Calling API using Fetch.  */

function getAPI() {
    var content = document.querySelector('#products')
    fetch('https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1') 
    .then(response => response.json())
    .then(data => {
        
        content.innerHTML = `
        
            <img src="${data.products['0'].image}" alt="img do produto" name="product_img" id="product_img">
            <p id="product_name">${data.products['0'].name}</p>
            <p id="description"> ${data.products['0'].description}</p>
            <p id="old_price">De: R$ ${data.products['0'].oldPrice}</p>
            <p id="price"><strong>Por: R$ ${data.products['0'].price}</strong></p>
            <p id="or">ou ${data.products['0'].installments.count}x de R$ ${data.products['0'].installments.value} </p>
            <input type="button" value="Comprar" id="btn_comprar">

        
                `
    });
}