


const cryptocurrencies =
    [
        { id: 123, name: "Bitcoin", symbo: "BTC", image: "./assets/btc.jpg", alt: "some alt text", price: 200 },
        { id: 456, name: "Ethereum", symbol: "ETH", image: "./assets/eth.jpg", alt: "some alt text", price: 200 },
        { id: 789, name: "XRP", symbol: "XRP", image: "./assets/xrp.png", alt: "some alt text", price: 200 }
    ];


function addToCart(id) 
{
    const product = cryptocurrencies.find((obj) => obj.id === id)
    let cart = [];
    if (localStorage.getItem('cart')) {
        cart = JSON.parse(localStorage.getItem('cart'));
    }
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));

}



function showProducts() 
{
    const element = document.getElementById("products")
    for (let i = 0; i < cryptocurrencies.length; i++) 
    {
        const product = cryptocurrencies[i]
        const productEl = document.createElement("li")
        productEl.classList.add('col')
        const html = ` <div class="img"><img src="${product.image}" alt="${product.alt}" /></div>
          <h3>${product.name}</h3>
          <p>${product.price}</p>
          <button id="buy-${product.id}">Buy</button>`

        productEl.innerHTML = html

        element.appendChild(productEl)
        const addToCartButton = document.getElementById(`buy-${product.id}`)
        addToCartButton.addEventListener("click", function () {
            addToCart(product.id)
        })
    }
}






showProducts()
