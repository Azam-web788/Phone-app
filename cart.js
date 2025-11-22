var phone = localStorage.getItem("products")
var phones = JSON.parse(phone)
console.log(phones);


const parent = document.querySelector(".parent")
const total = document.querySelector(".total")
const disableButton = document.querySelector(".disableButton")

phones.map((item , index) =>{
    parent.innerHTML += `<div style="
  width: 300px;
  max-width: 500px;
  margin: 20px auto;
  padding: 24px;
  border: 1px solid #ddd;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  gap: 12px;
  background-color: #fff;
  font-family: 'Segoe UI', sans-serif;
  position: relative;
">
<img src="${item.imageUrl}" alt="${item.name}" style="
    width: 100%;
    aspect-ratio: 3 / 2;
    object-fit: contain;
    border-bottom: 1px solid #eee;
    background-color: #f9f9f9;
  " />
  <h2 style="margin: 0; font-size: 20px; color: #333;">
    <strong>Brand:</strong> ${item.brand}
  </h2>
  
  <h3 style="margin: 0; font-size: 18px; color: #555;">
    <strong>Model:</strong> ${item.name}
  </h3>

  <div style="display: flex; align-items: center; gap: 10px;">
    <span style="font-size: 16px; color : black"><strong>Quantity:</strong></span>
    <button onclick="increase(${index})" style="
      width: 32px;
      height: 32px;
      font-size: 18px;
      border: none;
      background-color: #27ae60;
      color: white;
      border-radius: 6px;
      cursor: pointer;
    ">+</button>
    
    <span id="output${index}" style="min-width: 30px; text-align: center; font-weight: bold; color: #2c3e50;">${item.quantity}</span>
    
    <button onclick="decrease(${index})" style="
      width: 32px;
      height: 32px;
      font-size: 18px;
      border: none;
      background-color: #e74c3c;
      color: white;
      border-radius: 6px;
      cursor: pointer;
    ">-</button>
  </div>

  <p style="margin: 0; font-size: 16px; color: #2c3e50;">
    Price: <strong>$<span id="price${index}">${item.price * item.quantity}</span></strong>
  </p>

  <button onclick="delEle(${index})" style="
    padding: 10px 20px;
    background-color: #f39c12;
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    align-self: flex-start;
    cursor: pointer;
    transition: background-color 0.3s ease;
  " onmouseover="this.style.backgroundColor='#e67e22'" onmouseout="this.style.backgroundColor='#f39c12'">
    <i class="fa-solid fa-trash"></i> Delete
  </button>
</div>

`
        localStorage.setItem("products" , phones)
        totalPrice()
    })
    function increase(index) {
        var output = document.querySelector(`#output${index}`)
        var priceElement = document.querySelector(`#price${index}`)
        const quantity = parseInt(output.innerHTML)
        const newQuantity = quantity + 1
        output.innerHTML = newQuantity
        phones[index].quantity = newQuantity
        const price = phones[index].price
        const newPrice = price * newQuantity
        priceElement.innerHTML = newPrice
        localStorage.setItem("products" , phones)
        totalPrice()
    }
    function decrease(index) {
    const output = document.querySelector(`#output${index}`);
    const priceElement = document.querySelector(`#price${index}`);
    const quantity = parseInt(output.innerHTML);

    if (quantity > 1) {
        const newQuantity = quantity - 1;
        output.innerHTML = newQuantity;

        phones[index].quantity = newQuantity; // ✅ update the array
        const newPrice = phones[index].price * newQuantity;
        priceElement.innerHTML = newPrice;

        totalPrice(); // ✅ update total
        localStorage.setItem("products", JSON.stringify(phones)); // ✅ persist change
    }
}


function delEle(index) {
    phones.splice(index , 1)
    parent.innerHTML = ""
    totalPrice()
   phones.map((item , index) =>{
    parent.innerHTML += `<div style="
  width: 300px;
  max-width: 500px;
  margin: 20px auto;
  padding: 24px;
  border: 1px solid #ddd;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  gap: 12px;
  background-color: #fff;
  font-family: 'Segoe UI', sans-serif;
  position: relative;
">
<img src="${item.imageUrl}" alt="${item.name}" style="
    width: 100%;
    aspect-ratio: 3 / 2;
    object-fit: contain;
    border-bottom: 1px solid #eee;
    background-color: #f9f9f9;
  " />
  <h2 style="margin: 0; font-size: 20px; color: #333;">
    <strong>Brand:</strong> ${item.brand}
  </h2>
  
  <h3 style="margin: 0; font-size: 18px; color: #555;">
    <strong>Model:</strong> ${item.name}
  </h3>

  <div style="display: flex; align-items: center; gap: 10px;">
    <span style="font-size: 16px; color : black"><strong>Quantity:</strong></span>
    <button onclick="increase(${index})" style="
      width: 32px;
      height: 32px;
      font-size: 18px;
      border: none;
      background-color: #27ae60;
      color: white;
      border-radius: 6px;
      cursor: pointer;
    ">+</button>
    
    <span id="output${index}" style="min-width: 30px; text-align: center; font-weight: bold; color: #2c3e50;">${item.quantity}</span>
    
    <button onclick="decrease(${index})" style="
      width: 32px;
      height: 32px;
      font-size: 18px;
      border: none;
      background-color: #e74c3c;
      color: white;
      border-radius: 6px;
      cursor: pointer;
    ">-</button>
  </div>

  <p style="margin: 0; font-size: 16px; color: #2c3e50;">
    Price: <strong>$<span id="price${index}">${item.price * item.quantity}</span></strong>
  </p>

  <button onclick="delEle(${index})" style="
    padding: 10px 20px;
    background-color: #f39c12;
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    align-self: flex-start;
    cursor: pointer;
    transition: background-color 0.3s ease;
  " onmouseover="this.style.backgroundColor='#e67e22'" onmouseout="this.style.backgroundColor='#f39c12'">
    <i class="fa-solid fa-trash"></i> Delete
  </button>
</div>`
    
        localStorage.setItem("products" , JSON.stringify(phones))
    })
}

function totalPrice() {
    let TPrice = 0
    total.innerHTML = TPrice
    phones.forEach((item) => {
        TPrice += item.price * item.quantity
        localStorage.setItem("products" , phones)
    });
    total.innerHTML = TPrice
}

function Buy() {
  if (phones.length < 1) {
   return disableButton.innerHTML = `<button class="buy" onclick="Buy()" disabled>Place order</button>`
  }
  
  Swal.fire({
title: "Your parcel is coming in your home",
icon: "success",
draggable: true
});
parent.innerHTML = ""
total.innerHTML = "0"
disableButton.innerHTML = `<button class="buy" onclick="Buy()" disabled>Place order</button>`
}