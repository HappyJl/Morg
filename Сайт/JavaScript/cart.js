const cart = JSON.parse(localStorage.getItem('cart') || "[]");
let out = `<div class="conteiner">`;
let sum = 0;
for(let key in cart){
    out += `<div draggable="false" class="goods">`;
    out += `<div><img draggable="false" src="${cart[key]['image']}" alt="" class="goods_img"></div>`;
    out += `<div class="sub_goods">`;
    out += `<div class="name">${cart[key]['name']}</div>`;
    out += `<div class="sub_sub_goods">`;
    out += `<div class="add"><button class="bat plus" data-arct="${key}">+</button></div>`;
    out += `<div class="add"><button class="bat minus" data-arct="${key}">-</button></div>`;
    out += `<div class="col" data-counter>${cart[key]['count']} шт.</div>`;
    let price = cart[key]['price'];
    let count = cart[key]['count'];
    price *= count;
    sum += price;
    out += `<div class="price">${price} ₽</div>`;
    out += `</div>`;
    out += `</div>`;
    out += `</div>`;
}
out += `</div>`;
out += `<div class="sum">`;
out += `<div class="sum_text">Итого</div>`;
out += `<div class="sum_sum">${sum} ₽</div>`;
out += `<div><button class="sum_bat del">Купить</button></div>`;
out += `</div>`;
document.querySelector('.main').innerHTML = out;

document.onclick = event =>{
    if (event.target.classList.contains('plus')){
        plusFunction(event.target.dataset.arct);
    }
    if (event.target.classList.contains('minus')){
        minusFunction(event.target.dataset.arct);
    }
    if (event.target.classList.contains('del')){
        localStorage.clear();
        location.reload();
    }
}
const plusFunction = arct => {
    console.log(arct);
    for (let key in cart){
      if(key === arct ){
          ++cart[key]['count'];
          localStorage.setItem('cart',JSON.stringify(cart));
          location.reload();
      }
    }
}
const minusFunction = arct => {
    console.log(arct);
    for (let key in cart){
        if(key === arct ){
            --cart[key]['count'];
            localStorage.setItem('cart',JSON.stringify(cart));
            if(cart[key]['count'] === 0){
                delFunction(arct);
            }
            location.reload();
        }
    }
}

const delFunction = arct => {
    console.log(arct);
    for (let key in cart){
        if(key === arct ){
            delete cart[key];
            localStorage.setItem('cart',JSON.stringify(cart));
            location.reload();
        }
    }
}