console.log('connect');

const addProduct = () =>{
    const productField = document.getElementById('product-name')
    const quantityField = document.getElementById('product-quantity')
    const product = productField.value;
    const quantity = quantityField.value;
    productField.value = '';
    quantityField.value = '';


    console.log(product, quantity);
    displayProduct(product, quantity);saveProductToLocalStorage(product, quantity)
}


const displayProduct = (product,quantity ) =>{
    const productContainer = document.getElementById('product-container')
    const li = document.createElement("li")
   li.innerText = `${product} : ${quantity}`
   productContainer.appendChild(li)
}

const getStoredShoppingCard = () =>{
    let cart = {}
    const storedCard = localStorage.getItem('cart');
    if (storedCard) {
        cart = JSON.parse(storedCard)
    }
    return cart;
}

const saveProductToLocalStorage = (product, quantity) =>{

const cart = getStoredShoppingCard()
cart[product] = quantity;
// console.log(cart);
const cartStringify = JSON.stringify(cart);
localStorage.setItem('cart', cartStringify)


console.log(cartStringify);


}

const displayProductsFromLocalStorage = () =>{
    const savedCart = getStoredShoppingCard();
    for (const product in savedCart) {
        const quantity = savedCart[product];
        displayProduct(product,quantity)
        console.log(product, quantity);
    }
    console.log(savedCart);
}

displayProductsFromLocalStorage()