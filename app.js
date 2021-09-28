//grab from front end
const priceInput = document.querySelector("[name=price]");
console.log(priceInput);
const qtyInput = document.querySelector("[name=quantity]");
console.log(qtyInput);
const total = document.querySelector(".total");
console.log(total);

//functions for response
function calcClassCost(){
  
    const cost = priceInput.value;
      console.log(cost);
    const qty = qtyInput.value;
      console.log(qty);
    const tot = cost * qty;
    console.log(tot);
    total.innerText = "$" + tot.toFixed(2);
}

//on first run

calcClassCost();

//listen for change
priceInput.addEventListener("input", calcClassCost);
qtyInput.addEventListener("input", calcClassCost);




