const products = [
  { id: 1, itemName: "Laptop", price: 50000 },
  { id: 2, itemName: "Phone", price: 20000 },
  { id: 3, itemName: "Tablet", price: 5000 },
  { id: 4, itemName: "Smartwatch", price: 1000 },
  { id: 5, itemName: "Headphones", price: 500 },
];
let totalprice = 0;
let totalprice1 = 0;
let cart = [];
let data = document.getElementById("available");
let datcart = document.getElementById("cartproducts");
products.forEach(function (value) {
  let htmlpart = `<div class="border gaplo"  >${value.itemName} - ${value.price} <button onclick="onclickjavascript('${value.itemName}','${value.price}','${value.id}')">AddToCart</button></div>`;
  data.insertAdjacentHTML("afterbegin", htmlpart);
});
function onclickjavascript(valueitemName, valueprice, valueid) {
  let trueorfalse = cart.some((value) => value.valueitemName === valueitemName);
  if (!trueorfalse) {
    document.getElementById("feedback").style.display = "block";
    document.getElementById("feedback").classList.remove("classadded");
    cart.push({ valueitemName, valueid, valueprice });
    console.log(cart);
    let htmlpart1 = `<div class="border "  >${valueitemName}- ${valueprice} <button onclick="onclickjavascriptremove('${valueitemName}','${valueprice}')">Remove</button></div>`;
    datcart.insertAdjacentHTML("afterbegin", htmlpart1);
    totalprice = totalprice + Number(valueprice);
    document.getElementById("amount").textContent = `${totalprice}`;
    document.getElementById(
      "feedback"
    ).textContent = `${valueitemName} added to the cart`;
    setTimeout(function () {
      document.getElementById("feedback").style.display = "none";
    }, 1000);
  } else {
    document.getElementById("feedback").style.display = "block";
    document.getElementById("feedback").classList.add("classadded");

    document.getElementById(
      "feedback"
    ).textContent = `${valueitemName} is laready added to the cart so you cannot addd`;
    setTimeout(function () {
      document.getElementById("feedback").style.display = "none";
    }, 1000);
  }
}
function onclickjavascriptremove(vi, vp) {
  totalprice = 0;
  cart = cart.filter(function (value) {
    return value.valueitemName !== vi;
  });
  datcart.innerHTML = " ";
  cart.forEach(function (value) {
    let htmlpart = `<div class="border gaplo"  >${value.valueitemName}-${value.valueprice} <button onclick="onclickjavascriptremove('${value.valueitemName}','${value.valueprice}')">Remove</button></div>`;
    datcart.insertAdjacentHTML("afterbegin", htmlpart);
    totalprice = totalprice + Number(value.valueprice);
  });
  document.getElementById("amount").textContent = `${totalprice}`;
  document.getElementById("feedback").style.display = "block";
  document.getElementById(
    "feedback"
  ).textContent = `${vi} removed from the cart`;
  setTimeout(function () {
    document.getElementById("feedback").style.display = "none";
  }, 1000);
}
document.getElementById("amount").textContent = `${totalprice}`;
// function sortproducts() {}

// function clearcart() {
//   datcart.innerHTML = " ";
//   totalprice = 0;
//   document.getElementById("amount").textContent = `${totalprice}`;
// }
document.getElementById("clearcart").addEventListener("click", () => {
  datcart.innerHTML = "";
  totalprice = 0;
  document.getElementById("amount").textContent = `${totalprice}`;
  cart.length = 0;
});
function sortproducts() {
  datcart.innerHTML = "";
  // for (let i = 0; i < cart.length - 1; i++) {
  //   for (let j = i + 1; j < cart.length; j++) {
  //     if (Number(cart[i].valueprice) < Number(cart[j].valueprice)) {
  //       let temp = cart[i];
  //       cart[i] = cart[j];
  //       cart[j] = temp;
  //     }
  //   }
  // }
  cart.sort(
    (cart1, cart2) => Number(cart2.valueprice) - Number(cart1.valueprice)
  );
  cart.forEach(function (value) {
    let htmlpart = `<div class="border gaplo"  > ${value.valueitemName}-${value.valueprice} <button onclick="onclickjavascriptremove('${value.valueitemName}','${value.valueprice}')">Remove</button></div>`;
    datcart.insertAdjacentHTML("afterbegin", htmlpart);
  });
}
