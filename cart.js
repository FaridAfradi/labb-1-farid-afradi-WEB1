
function showCart() 
{
    const storedProducts = JSON.parse(localStorage.getItem('cart'))
    const element = document.getElementById("cart-container")
    if (storedProducts.length > 0) 
    {
        for (let i = 0; i < storedProducts.length; i++) 
        {
            const cartProduct = storedProducts[i]
            const productEl = document.createElement("li")
            productEl.classList.add('row')
            const html = ` <div class="img"><img src="${cartProduct.image}" alt="${cartProduct.alt}" /></div>
          <h3>${cartProduct.name}</h3>
          <p>${cartProduct.price}</p>
         <button id="delete-${cartProduct.id}">Delete</button>`

            productEl.innerHTML = html

            element.appendChild(productEl)

            const deleteButton = document.getElementById(`delete-${cartProduct.id}`)
            deleteButton.addEventListener("click", function () 
            {
                removeFromCart(cartProduct.id)
            })
        }
    }

}
function removeFromCart(id) 
{
    let cart = JSON.parse(localStorage.getItem('cart'));
    let products = cart.filter(product => product.id !== id);

    localStorage.setItem('cart', JSON.stringify(products));

    document.getElementById('delete-button').addEventListener('click', function() 
{
  removeFromCart(id);
});

    showCart()
}





showCart();


