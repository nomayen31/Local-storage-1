console.log('connect');

const addProduct = () =>{
    const productField = document.getElementById('product-name')
    const quantityField = document.getElementById('product-quantity')
    const product = productField.value;
    const quantity = quantityField.value;
    productField.value = '';
    quantityField.value = '';


    console.log(product, quantity);
    displayProduct(product, quantity)
}


const displayProduct = (product,quantity ) =>{
    const productContainer = document.getElementById('product-container')
    const li = document.createElement("li")
   li.innerText = `${product} : ${quantity}`
   productContainer.appendChild(li)
}